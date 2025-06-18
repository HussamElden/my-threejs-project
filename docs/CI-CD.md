# CI/CD Pipeline Documentation

This project uses GitHub Actions for automated testing and deployment. Here's how the pipeline works:

## 🔄 Automated Workflows

### 1. **Main CI/CD Pipeline** (`.github/workflows/ci.yml`)
**Triggers:** Push to `main` or `develop` branches, Pull Requests
- ✅ Runs unit tests on Node.js 18.x and 20.x
- ✅ Sets up PostgreSQL test database
- ✅ Generates Prisma client and runs migrations
- ✅ Runs linting (if configured)
- ✅ Builds the application
- ✅ Uploads test coverage to Codecov
- ✅ Creates build artifacts

### 2. **Pre-commit Checks** (`.github/workflows/pre-commit.yml`)
**Triggers:** Push to any branch except main
- ⚡ Quick validation (10-minute timeout)
- ✅ Fast test execution
- ✅ Build verification

### 3. **Pull Request Validation** (`.github/workflows/pull-request.yml`)
**Triggers:** Pull requests to `main` or `develop`
- 📝 Posts detailed test results as PR comments
- 🔍 Detects API changes
- ✅ Full test suite with verbose output
- ✅ Build validation

### 4. **Branch Protection** (`.github/workflows/branch-protection.yml`)
**Triggers:** Push to `main`
- 🛡️ Enforces required status checks
- 🔒 Requires PR reviews before merge
- 📋 Ensures tests pass before merge

### 5. **Manual Database Reset** (`.github/workflows/manual-db-reset.yml`)
**Triggers:** Manual dispatch
- 🗄️ Resets test database when needed
- ✅ Runs verification tests
- 📝 Provides confirmation feedback

## 🚀 How to Use

### Running Tests Locally
```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch

# Run tests in CI mode (silent, no watch)
npm run test:ci

# Run tests with verbose output
npm run test:verbose
```

### Database Commands
```bash
# Generate Prisma client
npm run db:generate

# Run migrations
npm run db:migrate

# Reset database (destructive!)
npm run db:reset

# Seed database
npm run db:seed
```

### Pre-commit Validation
```bash
# Run the same checks as CI
npm run pre-commit
```

## 📊 Test Coverage

The pipeline enforces minimum test coverage:
- **Branches:** 80%
- **Functions:** 80%
- **Lines:** 80%
- **Statements:** 80%

Coverage reports are automatically uploaded to Codecov on successful test runs.

## 🔒 Branch Protection Rules

The `main` branch is protected with:
- ✅ Required status checks must pass
- 👥 At least 1 approving review required
- 🔄 Dismiss stale reviews on new commits
- 🚫 No direct pushes (must use PRs)

## 🐛 Troubleshooting

### Test Failures
1. Check the GitHub Actions logs for detailed error messages
2. Run tests locally: `npm run test:verbose`
3. Ensure database is properly set up: `npm run db:reset`

### Build Failures
1. Check for TypeScript errors: `npm run type-check`
2. Verify all dependencies are installed: `npm ci`
3. Ensure environment variables are set correctly

### Database Issues
1. Use the manual database reset workflow if needed
2. Check that migrations are up to date
3. Verify Prisma client is generated: `npm run db:generate`

## 📈 Monitoring

- **Test Results:** Visible in PR comments and Actions tab
- **Coverage:** Tracked in Codecov dashboard
- **Build Status:** Shown in repository badges
- **Performance:** Monitored via Actions execution time

## 🔧 Configuration Files

- `jest.config.js` - Test configuration
- `.github/workflows/` - CI/CD workflows
- `package.json` - Scripts and dependencies
- `prisma/schema.prisma` - Database schema

---

**Note:** All workflows use PostgreSQL 15 and Node.js 18.x/20.x for consistency with production environments.
