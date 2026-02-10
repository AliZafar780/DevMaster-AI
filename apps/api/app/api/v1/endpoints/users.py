from typing import Any
from fastapi import APIRouter, Depends

from app.api.v1.endpoints.auth import get_current_user
from app.models import User

router = APIRouter()


@router.get("/me")
async def get_current_user_info(current_user: User = Depends(get_current_user)) -> Any:
    return {
        "id": current_user.id,
        "email": current_user.email,
        "name": current_user.name,
        "role": current_user.role
    }
