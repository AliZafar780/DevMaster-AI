from typing import Any, List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlmodel import select

from app.api.v1.endpoints.auth import get_current_user
from app.db.session import get_session
from app.models import User, Task

router = APIRouter()


@router.get("")
async def list_tasks(
    project_id: int = None,
    current_user: User = Depends(get_current_user),
    session: AsyncSession = Depends(get_session)
) -> Any:
    query = select(Task).where(Task.assignee_id == current_user.id)
    if project_id:
        query = query.where(Task.project_id == project_id)
    result = await session.execute(query)
    tasks = result.scalars().all()
    return [
        {
            "id": t.id,
            "title": t.title,
            "status": t.status,
            "priority": t.priority,
            "due_date": t.due_date.isoformat() if t.due_date else None,
            "created_at": t.created_at.isoformat()
        }
        for t in tasks
    ]


@router.post("")
async def create_task(
    title: str,
    project_id: int,
    priority: str = "medium",
    current_user: User = Depends(get_current_user),
    session: AsyncSession = Depends(get_session)
) -> Any:
    task = Task(
        title=title,
        project_id=project_id,
        assignee_id=current_user.id,
        priority=priority
    )
    session.add(task)
    await session.commit()
    await session.refresh(task)
    return {"id": task.id, "title": task.title, "status": task.status}


@router.put("/{task_id}")
async def update_task(
    task_id: int,
    status: str,
    current_user: User = Depends(get_current_user),
    session: AsyncSession = Depends(get_session)
) -> Any:
    result = await session.execute(
        select(Task).where(Task.id == task_id, Task.assignee_id == current_user.id)
    )
    task = result.scalar_one_or_none()
    if not task:
        raise HTTPException(status_code=404, detail="Task not found")
    task.status = status
    await session.commit()
    return {"id": task.id, "status": task.status}
