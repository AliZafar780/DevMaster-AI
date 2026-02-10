# Development Guide

## Prerequisites

- Node.js 20+ and pnpm 8+
- Python 3.11+ and pip
- Docker and Docker Compose
- Git

## Quick Start

### 1. Clone and Install

```bash
git clone https://github.com/alizafar/devmaster-ai.git
cd devmaster-ai
pnpm install
```

### 2. Start Infrastructure

```bash
pnpm db:up
```

This starts PostgreSQL, Redis, MongoDB, and MinIO.

### 3. Setup Backend

```bash
cd apps/api
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
alembic upgrade head
uvicorn app.main:app --reload
```

### 4. Setup Frontend

```bash
cd apps/web
pnpm dev
```

### 5. Access the App

- Frontend: http://localhost:3000
- API: http://localhost:8000
- API Docs: http://localhost:8000/docs

## Development Workflow

### Branch Naming

- `feature/description` - New features
- `bugfix/description` - Bug fixes
- `hotfix/description` - Critical fixes

### Commit Messages

Follow Conventional Commits:
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `style:` Code style
- `refactor:` Code refactoring
- `test:` Tests
- `chore:` Maintenance

### Testing

```bash
# Frontend
cd apps/web
pnpm test

# Backend
cd apps/api
pytest

# E2E
cd apps/web
pnpm test:e2e
```

## Troubleshooting

### Database Connection Issues

```bash
# Reset databases
pnpm db:down
pnpm db:up

cd apps/api
alembic upgrade head
```

### Port Conflicts

Default ports:
- 3000 - Next.js frontend
- 8000 - FastAPI backend
- 5432 - PostgreSQL
- 6379 - Redis
- 27017 - MongoDB
- 9000/9001 - MinIO

If any port is in use, modify docker-compose.yml or the app configs.
