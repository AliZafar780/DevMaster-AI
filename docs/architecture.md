# DevMaster AI Architecture

## Overview

DevMaster AI is a full-stack application built with a microservices-ready architecture using modern technologies.

## System Architecture

```

                        Clients                               │
  ┌──────────┐  ┌──────────┐  ┌──────────┐                  │
  │  Web App │  │ Mobile   │  │  CLI     │                  │
  │ (Next.js)│  │(Future)  │  │(Future)  │                  │
  └────┬─────┘  └────┬─────┘  └────┬─────┘                  │
cd /home/engine/project && -la ls
        │             │             │
        └─────────────┴─────────────┘
                      │
              ┌───────▼───────┐
              │   Nginx/      │
              │   Ingress     │
              └───────┬───────┘
                      │
        ┌─────────────┼─────────────┐
        │             │             │
cd /home/engine/project && ls -la ┌─────▼─────┐ ┌────▼────┐
   Web       │ │   API     │ │ Worker  │
   (Next.js) │ │ (FastAPI) │ │(Celery) │
 └─────┬─────┘ └────┬────┘
        │             │             │
        │     ┌───────┴───────┐     │
        │     │   Message     │     │
        └────►│   Queue       │◄────┘
              │   (Redis)     │
              └───────┬───────┘
                      │
        ┌─────────────┼─────────────┐
        │             │             │
cd /home/engine/project && ls -la ┌─────▼─────┐ ┌────▼────┐
 PostgreSQL  │ │   Redis   │ │ MongoDB │
  (Primary)  │ │  (Cache)  │ │(Docs)   │
 └───────────┘ └─────────┘
```

## Technology Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **State Management**: Zustand + TanStack Query
- **Charts**: ApexCharts

### Backend
- **Framework**: FastAPI
- **Language**: Python 3.11+
- **ORM**: SQLModel (SQLAlchemy 2.0)
- **Validation**: Pydantic v2
- **Authentication**: JWT + OAuth2

### Data Layer
- **Primary DB**: PostgreSQL 16
- **Cache/Sessions**: Redis 7
- **Document Store**: MongoDB 7
- **File Storage**: MinIO (S3-compatible)

### AI/ML
- **Embeddings**: Hugging Face Transformers
- **LLM**: OpenAI API
- **Task Queue**: Celery + Redis

## Security

- JWT-based authentication
- Password hashing with bcrypt
- HTTPS enforcement
- CORS configuration
- Rate limiting
- Input validation
- SQL injection prevention
- XSS protection
