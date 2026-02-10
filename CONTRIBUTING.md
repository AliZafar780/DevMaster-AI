# Contributing to DevMaster AI

First off, thank you for considering contributing to DevMaster AI! It's people like you that make this project a great tool for the developer community.

## 🤝 How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When creating a bug report, include:

- **Clear title and description**
- **Steps to reproduce**
- **Expected behavior**
- **Screenshots** (if applicable)
- **Environment details** (OS, browser, versions)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. Include:

- **Clear use case**
- **Expected behavior**
- **Possible implementation approach**

### Pull Requests

1. Fork the repository
2. Create a branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🚀 Development Setup

### Prerequisites

- Node.js 20+
- pnpm 8+
- Python 3.11+
- Docker & Docker Compose

### Setup

```bash
# Clone your fork
git clone https://github.com/AliZafar780/devmaster-ai.git
cd devmaster-ai

# Install dependencies
pnpm install

# Start databases
docker-compose up -d postgres redis mongo minio

# Run migrations
cd apps/api
pip install -r requirements.txt
alembic upgrade head

# Start development
pnpm dev
```

## 📋 Code Style

### TypeScript/JavaScript

- Use TypeScript for all new code
- Follow the existing code style
- Run `pnpm lint` before committing
- Use meaningful variable names

### Python

- Follow PEP 8
- Use type hints
- Run `black` and `isort` for formatting
- Write docstrings for functions

### Commit Messages

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

Example:
```
feat(auth): add OAuth2 support for GitHub

- Implement GitHub OAuth flow
- Add user model extensions
- Update environment variables
```

## 🧪 Testing

- Write tests for new features
- Ensure all tests pass before submitting PR
- Maintain or improve code coverage

```bash
# Run all tests
pnpm test

# Run specific test suite
pnpm test:unit
pnpm test:e2e
```

## 📝 Documentation

- Update README if needed
- Add JSDoc comments for functions
- Update API documentation
- Include examples for new features

## 🏷️ Issue Labels

- `bug` - Something isn't working
- `enhancement` - New feature or request
- `documentation` - Documentation improvements
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention needed
- `priority:high` - Urgent issues

## 💬 Community

- Join our [Discord](https://discord.gg/devmaster)
- Follow us on [Twitter](https://twitter.com/DevMasterAI)
- Read our [Code of Conduct](CODE_OF_CONDUCT.md)

## 🙏 Recognition

Contributors will be:
- Listed in our README
- Mentioned in release notes
- Added to the contributors graph

Thank you for contributing! 🎉
