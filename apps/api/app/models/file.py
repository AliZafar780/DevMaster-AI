from datetime import datetime
from typing import Optional
from sqlmodel import SQLModel, Field
from sqlalchemy import Column, String


class FileItem(SQLModel, table=True):
    __tablename__ = "files"
    
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str = Field(sa_column=Column(String))
    type: str = Field(sa_column=Column(String))
    size: int
    url: str = Field(sa_column=Column(String))
    project_id: Optional[int] = Field(default=None, foreign_key="projects.id")
    owner_id: int = Field(foreign_key="users.id")
    encrypted: bool = Field(default=False)
    ai_tags: Optional[str] = Field(default=None, sa_column=Column(String))
    created_at: datetime = Field(default_factory=datetime.utcnow)
