from datetime import datetime
from typing import Optional, List
from sqlmodel import SQLModel, Field, Relationship
from sqlalchemy import Column, String, Text


class Task(SQLModel, table=True):
    __tablename__ = "tasks"
    
    id: Optional[int] = Field(default=None, primary_key=True)
    title: str = Field(sa_column=Column(String, index=True))
    description: Optional[str] = Field(default=None, sa_column=Column(Text))
    status: str = Field(default="todo", sa_column=Column(String))  # todo, in_progress, review, done
    priority: str = Field(default="medium", sa_column=Column(String))  # low, medium, high, urgent
    project_id: int = Field(foreign_key="projects.id")
    assignee_id: Optional[int] = Field(default=None, foreign_key="users.id")
    due_date: Optional[datetime] = Field(default=None)
    estimated_hours: Optional[float] = Field(default=None)
    actual_hours: Optional[float] = Field(default=None)
    ai_prediction: Optional[str] = Field(default=None, sa_column=Column(Text))
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)
    
    # Relationships
    project: "Project" = Relationship(back_populates="tasks")
    assignee: Optional["User"] = Relationship(back_populates="tasks")
