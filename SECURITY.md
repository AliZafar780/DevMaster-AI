# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability, please help us fix it responsibly:

1. **DO NOT** open a public issue
2. Email us at security@devmaster.ai
3. Include:
   - Description of the vulnerability
   - Steps to reproduce
   - Possible impact
   - Suggested fix (if any)

We will:
- Acknowledge receipt within 48 hours
- Investigate and provide updates
- Fix and release patches
- Credit you in the release notes (with your permission)

## Security Best Practices

### For Users

- Keep your instance updated
- Use strong passwords
- Enable MFA when available
- Regularly review audit logs
- Report suspicious activity

### For Contributors

- Never commit secrets or API keys
- Use environment variables for sensitive data
- Follow OWASP guidelines
- Write secure code (input validation, sanitization)
- Review dependencies for vulnerabilities

## Security Features

DevMaster AI implements:

- JWT-based authentication
- Password hashing with bcrypt
- HTTPS enforcement
- CORS configuration
- Rate limiting
- Input validation
- SQL injection prevention
- XSS protection
- CSRF tokens

## Vulnerability Disclosure Timeline

1. **Day 0**: Report received
2. **Day 2**: Initial assessment
3. **Day 7**: Fix developed
4. **Day 14**: Patch released
5. **Day 21**: Public disclosure (if applicable)

Thank you for helping keep DevMaster AI secure!
