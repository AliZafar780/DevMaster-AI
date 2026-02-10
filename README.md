# 🚀 DevMaster AI

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.109-009688.svg)](https://fastapi.tiangolo.com)
[![Python](https://img.shields.io/badge/Python-3.11+-blue.svg)](https://www.python.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue.svg)](https://www.typescriptlang.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-316192.svg)](https://www.postgresql.org/)
[![Redis](https://img.shields.io/badge/Redis-7-DC382D.svg)](https://redis.io/)
[![Docker](https://img.shields.io/badge/Docker-ready-2496ED.svg)](https://www.docker.com/)

> **The Ultimate All-in-One Platform for Developer Productivity**

Created by [Ali Zafar](https://github.com/alizafar) | Open Source | Completely Free

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Architecture](#architecture)
- [Quick Start](#quick-start)
- [Development](#development)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## 🌟 Overview

**DevMaster AI** is a 100x enhanced, production-ready web application built as an ultimate all-in-one platform for developers. It serves developers, freelancers, teams, and enterprises to:

- 📊 **Track Progress** - Advanced Kanban boards with AI-powered predictions
- 📝 **Manage Notes** - Rich-text editor with semantic search and AI assistance
- 📈 **Visualize Data** - Interactive dashboards with predictive analytics
- 🔒 **Store Assets** - Encrypted vault with E2EE and AI tagging
- 🤖 **Leverage AI** - Code generation, task prioritization, and smart insights

### Why DevMaster AI?

| Feature | DevMaster AI | Other Tools |
|---------|--------------|-------------|
| **AI Integration** | 🤖 Built-in AI assistants | ❌ Limited/None |
| **Price** | 💯 100% Free | 💰 Paid tiers |
| **Open Source** | ✅ MIT Licensed | ❌ Proprietary |
| **Self-Hostable** | ✅ Docker/K8s ready | ❌ Cloud-only |
| **Real-time** | ✅ WebSocket collaboration | ⚠️ Limited |

---

## ✨ Features

### 🔐 Authentication & Security
- Multi-factor authentication (MFA)
- OAuth 2.0 (Google, GitHub, Microsoft)
- SSO support (SAML/OpenID)
- Role-based access control (RBAC)
- End-to-end encryption (E2EE) for sensitive data

### 📊 Progress Tracking
- **Kanban Boards** - Drag-and-drop with swimlanes
- **Agile/Scrum** - Epics, sprints, burndown charts
- **AI Predictions** - Task completion time forecasting
- **Time Tracking** - Pomodoro timers, idle detection
- **Reporting** - Exportable PDF/Excel reports

### 📝 Notes Management
- **Rich Text Editor** - Block-based editor with markdown
- **AI-Powered** - Auto-summarization, semantic search
- **Knowledge Graph** - Link notes and discover connections
- **Version Control** - Git-like history for notes
- **Real-time Collaboration** - Multiplayer editing

### 📈 Graphs & Visualizations
- **Interactive Dashboards** - Customizable widgets
- **Advanced Charts** - D3.js, ApexCharts integration
- **AI Insights** - Anomaly detection, trend forecasting
- **Export Options** - PDF, Excel, PNG

### 🔒 Secure Storage
- **Encrypted Vault** - AES-256 encryption
- **Unlimited Storage** - Bring your own S3-compatible storage
- **AI Tagging** - Automatic categorization
- **OCR Search** - Full-text search in images/PDFs
- **Blockchain Verification** - Document integrity

### 🤖 AI Integrations
- **Code Generator** - Generate code from descriptions
- **Smart Suggestions** - Context-aware recommendations
- **Bug Detection** - Analyze code snippets
- **Learning Paths** - Personalized based on progress
- **Task Prioritizer** - AI-driven prioritization

### 👥 Collaboration
- **Real-time Editing** - Like Google Docs
- **Team Chat** - Built-in messaging
- **Comments & Threads** - Contextual discussions
- **Webhooks** - Integrate with Slack, Discord
- **Audit Logs** - Complete activity history

---

## 🏗️ Architecture

```mermaid
graph TB
    subgraph "Frontend"
        A[Next.js 14<br/>App Router]
        B[Tailwind CSS<br/>shadcn/ui]
        C[TanStack Query<br/>Zustand]
    end

    subgraph "Backend"
        D[FastAPI<br/>Python 3.11+]
        E[Celery<br/>Background Tasks]
        F[Socket.io<br/>Real-time]
    end

    subgraph "AI/ML"
        G[Hugging Face<br/>Transformers]
        H[OpenAI<br/>API]
        I[TensorFlow.js<br/>Client-side]
    end

    subgraph "Data Layer"
        J[(PostgreSQL<br/>Primary)]
        K[(Redis<br/>Cache/Sessions)]
        L[(MongoDB<br/>Documents)]
        M[MinIO<br/>Object Storage]
    end

    A <-->|HTTP/WebSocket| D
    A <-->|WebSocket| F
    D <-->|SQL| J
    D <-->|Cache| K
    D <-->|NoSQL| L
    D <-->|S3 API| M
    D -->|Tasks| E
    D <-->|API| G
    D <-->|API| H
```

### Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | Next.js 14, TypeScript, Tailwind CSS, shadcn/ui |
| **Backend** | FastAPI, SQLModel, Pydantic |
| **Databases** | PostgreSQL 16, Redis 7, MongoDB 7 |
| **AI/ML** | Hugging Face, OpenAI, TensorFlow.js |
| **Real-time** | Socket.io |
| **Task Queue** | Celery + Redis |
| **Storage** | MinIO (S3-compatible) |
| **DevOps** | Docker, Kubernetes, GitHub Actions |

---

## 🚀 Quick Start

### Prerequisites

- [Docker](https://www.docker.com/) & Docker Compose
- [Node.js](https://nodejs.org/) 20+ & [pnpm](https://pnpm.io/)
- [Python](https://www.python.org/) 3.11+
- [Git](https://git-scm.com/)

### Option 1: Docker Compose (Recommended)

```bash
# Clone the repository
git clone https://github.com/alizafar/devmaster-ai.git
cd devmaster-ai

# Start all services
docker-compose up -d

# Access the application
# Frontend: http://localhost:3000
# API: http://localhost:8000
# API Docs: http://localhost:8000/docs
```

### Option 2: Local Development

```bash
# Install dependencies
pnpm install

# Start databases
docker-compose up -d postgres redis mongo minio

# Setup backend
cd apps/api
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
alembic upgrade head
uvicorn app.main:app --reload

# Setup frontend (new terminal)
cd apps/web
pnpm dev
```

---

## 💻 Development

### Project Structure

```
devmaster-ai/
 apps/
   ├── web/           # Next.js frontend
   └── api/           # FastAPI backend
 packages/
   └── shared/        # Shared types & utilities
 infra/
   ├── docker/        # Dockerfiles
   ├── k8s/           # Kubernetes manifests
   └── helm/          # Helm charts
 docs/              # Documentation
 .github/
    └── workflows/     # CI/CD pipelines
```

### Available Scripts

```bash
# Root level
pnpm dev          # Start all apps in dev mode
pnpm build        # Build all apps
pnpm test         # Run all tests
pnpm lint         # Run linting
pnpm format       # Format code

# Database
pnpm db:up        # Start databases
pnpm db:down      # Stop databases
pnpm migrate      # Run migrations
```

### Environment Variables

Create `.env.local` files in respective apps:

**apps/web/.env.local:**
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key
```

**apps/api/.env:**
```env
DATABASE_URL=postgresql+asyncpg://devmaster:devmaster_secret@localhost:5432/devmaster
REDIS_URL=redis://localhost:6379/0
SECRET_KEY=your-secret-key
OPENAI_API_KEY=sk-...
```

---

## 🚢 Deployment

### Docker

```bash
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
```

### Kubernetes

```bash
kubectl apply -f infra/k8s/
```

### Helm

```bash
helm upgrade --install devmaster infra/helm/devmaster/
```

### Cloud Platforms

- **Vercel**: One-click deploy for frontend
- **Railway/Render**: Easy backend deployment
- **AWS/GCP/Azure**: Full production setup with managed services

See [Deployment Guide](docs/deployment.md) for detailed instructions.

---

## 🤝 Contributing

We welcome contributions from the community! Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting PRs.

### Ways to Contribute

- 🐛 Report bugs via [GitHub Issues](https://github.com/alizafar/devmaster-ai/issues)
- 💡 Suggest features
- 📝 Improve documentation
- 🔧 Submit bug fixes
- ✨ Add new features

### Contributors

<a href="https://github.com/alizafar/devmaster-ai/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=alizafar/devmaster-ai" />
</a>

---

## 🔒 Security

- OWASP-compliant security practices
- Regular dependency updates via Dependabot
- Security audits in CI/CD pipeline
- Responsible disclosure policy

See [Security Policy](SECURITY.md) for details.

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 Ali Zafar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 🙏 Acknowledgments

- Built with love by [Ali Zafar](https://github.com/alizafar)
- Inspired by the developer community's needs
- Powered by amazing open-source projects

---

## 📞 Support

- 📧 Email: support@devmaster.ai
- 💬 Discord: [Join our community](https://discord.gg/devmaster)
- 🐦 Twitter: [@DevMasterAI](https://twitter.com/DevMasterAI)
- 🐛 Issues: [GitHub Issues](https://github.com/alizafar/devmaster-ai/issues)

---

<div align="center">

**⭐ Star us on GitHub — it motivates us a lot!**

[🚀 Getting Started](#quick-start) • [📖 Documentation](docs/) • [🤝 Contributing](CONTRIBUTING.md)

</div>
