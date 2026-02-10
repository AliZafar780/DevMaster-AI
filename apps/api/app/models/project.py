from datetime import datetime
from typing import Optional, List
from sqlmodel import SQLModel, Field, Relationship, ForeignKey
from sqlalchemy import Column, String, Text


class Project(SQLModel, table=True):
    __tablename__ = "projects"
    
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str = Field(sa_column=Column(String, index=True))
    description: Optional[str] = Field(default=None, sa_column=Column(Text))
    status: str = Field(default="active", sa_column=Column(String))  # active, archived, completed
    owner_id: int = Field(foreign_key="users.id")
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)
    
    # Relationships
    owner: "User" = Relationship(back_populates="projects")
    members: List["ProjectMember"] = Relationship(back_populates="project")
    tasks: List["Task"] = Relationship(back_populates="project")
    notes: List["Note"] = Relationship(back_populates="project")


class ProjectMember(SQLModel, table=True):
    __tablename__ = "project_members"
    
    id: Optional[int] = Field(default=None, primary_key=True)
    project_id: int = Field(foreign_key="projects.id")
    user_id: int = Field(foreign_key="users.id")
    role: str = Field(default="editor", sa_column=Column(String))  # admin, editor, viewer
    joined_at: datetime = Field(default_factory=datetime.utcnow)
    
    # Relationships
    project: Project = Relationship(back_populates="members")
    user: "User" = Relationship(back_populates="project_memberships")
