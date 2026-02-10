from typing import Any
from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from sqlmodel import select, func

from app.api.v1.endpoints.auth import get_current_user
from app.db.session import get_session
from app.models import User, Project, Task, Note

router = APIRouter()


@router.get("/stats")
async def get_stats(
    current_user: User = Depends(get_current_user),
    session: AsyncSession = Depends(get_session)
) -> Any:
    # Count projects
    projects_result = await session.execute(
        select(func.count()).select_from(Project).where(Project.owner_id == current_user.id)
    )
    total_projects = projects_result.scalar()
    
    # Count active tasks
    tasks_result = await session.execute(
        select(func.count()).select_from(Task).where(
            Task.assignee_id == current_user.id,
            Task.status.in_(["todo", "in_progress", "review"])
        )
    )
    active_tasks = tasks_result.scalar()
    
    # Count completed tasks
    completed_result = await session.execute(
        select(func.count()).select_from(Task).where(
            Task.assignee_id == current_user.id,
            Task.status == "done"
        )
    )
    completed_tasks = completed_result.scalar()
    
    # Count notes
    notes_result = await session.execute(
        select(func.count()).select_from(Note).where(Note.owner_id == current_user.id)
    )
    total_notes = notes_result.scalar()
    
    return {
        "total_projects": total_projects,
        "active_tasks": active_tasks,
        "completed_tasks": completed_tasks,
        "total_notes": total_notes,
        "storage_used": 0  # TODO: Calculate from file storage
    }


@router.get("/activity")
async def get_activity(
    current_user: User = Depends(get_current_user),
    session: AsyncSession = Depends(get_session)
) -> Any:
    # Get recent tasks
    tasks_result = await session.execute(
        select(Task).where(
            Task.assignee_id == current_user.id
        ).order_by(Task.updated_at.desc()).limit(5)
    )
    recent_tasks = tasks_result.scalars().all()
    
    return {
        "recent_tasks": [
            {
                "id": t.id,
                "title": t.title,
                "status": t.status,
                "priority": t.priority,
                "updated_at": t.updated_at.isoformat()
            }
            for t in recent_tasks
        ]
    }
