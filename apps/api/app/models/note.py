from datetime import datetime
from typing import Optional, List
from sqlmodel import SQLModel, Field, Relationship
from sqlalchemy import Column, String, Text


class Note(SQLModel, table=True):
    __tablename__ = "notes"
    
    id: Optional[int] = Field(default=None, primary_key=True)
    title: str = Field(sa_column=Column(String, index=True))
    content: str = Field(sa_column=Column(Text))
    project_id: Optional[int] = Field(default=None, foreign_key="projects.id")
    owner_id: int = Field(foreign_key="users.id")
    version: int = Field(default=1)
    embedding: Optional[str] = Field(default=None, sa_column=Column(Text))  # JSON string
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)
    
    # Relationships
    project: Optional["Project"] = Relationship(back_populates="notes")
    owner: "User" = Relationship(back_populates="notes")
    versions: List["NoteVersion"] = Relationship(back_populates="note")


class NoteVersion(SQLModel, table=True):
    __tablename__ = "note_versions"
    
    id: Optional[int] = Field(default=None, primary_key=True)
    note_id: int = Field(foreign_key="notes.id")
    version: int
    content: str = Field(sa_column=Column(Text))
    created_by: int = Field(foreign_key="users.id")
    created_at: datetime = Field(default_factory=datetime.utcnow)
    
    # Relationships
    note: Note = Relationship(back_populates="versions")
