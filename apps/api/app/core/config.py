from typing import List
from pydantic_settings import BaseSettings
from functools import lru_cache


class Settings(BaseSettings):
    # App
    APP_NAME: str = "DevMaster AI"
    DEBUG: bool = False
    SECRET_KEY: str = "your-secret-key-change-in-production"
    
    # CORS
    ALLOWED_HOSTS: List[str] = ["http://localhost:3000", "http://localhost:5173"]
    
    # Database
    DATABASE_URL: str = "postgresql+asyncpg://devmaster:devmaster_secret@localhost:5432/devmaster"
    
    # Redis
    REDIS_URL: str = "redis://localhost:6379/0"
    
    # MongoDB
    MONGODB_URL: str = "mongodb://devmaster:devmaster_secret@localhost:27017/devmaster?authSource=admin"
    
    # JWT
    JWT_ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    REFRESH_TOKEN_EXPIRE_DAYS: int = 7
    
    # MinIO/S3
    MINIO_ENDPOINT: str = "localhost:9000"
    MINIO_ACCESS_KEY: str = "devmaster"
    MINIO_SECRET_KEY: str = "devmaster_secret_key"
    MINIO_BUCKET: str = "devmaster-files"
    
    # AI/ML
    OPENAI_API_KEY: str = ""
    HUGGINGFACE_API_TOKEN: str = ""
    
    class Config:
        env_file = ".env"
        case_sensitive = True


@lru_cache()
def get_settings() -> Settings:
    return Settings()


settings = get_settings()
