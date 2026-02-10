from datetime import datetime
from typing import Optional, List
from sqlmodel import SQLModel, Field, Relationship
from sqlalchemy import Column, String


class User(SQLModel, table=True):
    __tablename__ = "users"
    
    id: Optional[int] = Field(default=None, primary_key=True)
    email: str = Field(sa_column=Column(String, unique=True, index=True))
    hashed_password: str = Field(sa_column=Column(String))
    name: str = Field(sa_column=Column(String, index=True))
    avatar: Optional[str] = Field(default=None, sa_column=Column(String))
    role: str = Field(default="user", sa_column=Column(String))  # admin, user
    is_active: bool = Field(default=True)
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)
    
    # Relationships
    projects: List["Project"] = Relationship(back_populates="owner")
    project_memberships: List["ProjectMember"] = Relationship(back_populates="user")
    tasks: List["Task"] = Relationship(back_populates="assignee")
    notes: List["Note"] = Relationship(back_populates="owner")
