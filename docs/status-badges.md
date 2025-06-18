# GitHub Actions Status Badges

Add these badges to your main README.md file to show the status of your CI/CD pipeline:

## Main CI Status
```markdown
![CI](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## Test Coverage
```markdown
[![codecov](https://codecov.io/gh/YOUR_USERNAME/YOUR_REPO_NAME/branch/main/graph/badge.svg)](https://codecov.io/gh/YOUR_USERNAME/YOUR_REPO_NAME)
```

## Build Status
```markdown
![Build Status](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/workflows/CI%2FCD%20Pipeline/badge.svg?branch=main)
```

## Combined Example for README.md

```markdown
# Coffee Shop Inventory System

[![CI](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/workflows/CI%2FCD%20Pipeline/badge.svg)](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/actions)
[![codecov](https://codecov.io/gh/YOUR_USERNAME/YOUR_REPO_NAME/branch/main/graph/badge.svg)](https://codecov.io/gh/YOUR_USERNAME/YOUR_REPO_NAME)
[![Tests](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/workflows/CI%2FCD%20Pipeline/badge.svg?event=push)](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/actions)

A comprehensive inventory management system for coffee shops built with Next.js, Prisma, and PostgreSQL.

## 🧪 Testing

This project maintains high code quality with:
- ✅ 56 comprehensive unit tests
- 📊 80%+ test coverage requirement  
- 🔄 Automated testing on every commit
- 🛡️ Protected main branch with required checks

[View CI/CD Documentation](docs/CI-CD.md)
```

## Repository Setup Instructions

1. **Replace placeholders** in the badge URLs with your actual GitHub username and repository name
2. **Enable Actions** in your repository settings
3. **Set up Codecov** (optional):
   - Sign up at codecov.io
   - Connect your GitHub repository
   - Add `CODECOV_TOKEN` to repository secrets
4. **Configure branch protection** (the workflow will attempt to do this automatically)

## Repository Secrets (Optional)

Add these to your repository settings > Secrets and variables > Actions:

- `CODECOV_TOKEN` - For coverage reporting (get from codecov.io)
- Any database credentials for production deployments
