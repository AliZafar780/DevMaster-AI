from typing import Any, List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlmodel import select

from app.api.v1.endpoints.auth import get_current_user
from app.db.session import get_session
from app.models import User, Note

router = APIRouter()


@router.get("")
async def list_notes(
    current_user: User = Depends(get_current_user),
    session: AsyncSession = Depends(get_session)
) -> Any:
    result = await session.execute(
        select(Note).where(Note.owner_id == current_user.id)
    )
    notes = result.scalars().all()
    return [
        {
            "id": n.id,
            "title": n.title,
            "updated_at": n.updated_at.isoformat()
        }
        for n in notes
    ]


@router.post("")
async def create_note(
    title: str,
    content: str = "",
    current_user: User = Depends(get_current_user),
    session: AsyncSession = Depends(get_session)
) -> Any:
    note = Note(title=title, content=content, owner_id=current_user.id)
    session.add(note)
    await session.commit()
    await session.refresh(note)
    return {"id": note.id, "title": note.title}


@router.get("/{note_id}")
async def get_note(
    note_id: int,
    current_user: User = Depends(get_current_user),
    session: AsyncSession = Depends(get_session)
) -> Any:
    result = await session.execute(
        select(Note).where(Note.id == note_id, Note.owner_id == current_user.id)
    )
    note = result.scalar_one_or_none()
    if not note:
        raise HTTPException(status_code=404, detail="Note not found")
    return {
        "id": note.id,
        "title": note.title,
        "content": note.content,
        "updated_at": note.updated_at.isoformat()
    }


@router.put("/{note_id}")
async def update_note(
    note_id: int,
    title: str,
    content: str,
    current_user: User = Depends(get_current_user),
    session: AsyncSession = Depends(get_session)
) -> Any:
    result = await session.execute(
        select(Note).where(Note.id == note_id, Note.owner_id == current_user.id)
    )
    note = result.scalar_one_or_none()
    if not note:
        raise HTTPException(status_code=404, detail="Note not found")
    note.title = title
    note.content = content
    note.version += 1
    await session.commit()
    return {"id": note.id, "version": note.version}
