#!/bin/bash

# GitHub Actions Setup Verification Script
# Run this script to ensure your project is ready for GitHub Actions

echo "🔧 GitHub Actions Setup Verification"
echo "=================================="

# Check if workflow files exist
echo "📁 Checking workflow files..."
if [ -d ".github/workflows" ]; then
    echo "✅ .github/workflows directory exists"
    workflow_count=$(ls -1 .github/workflows/*.yml 2>/dev/null | wc -l)
    echo "✅ Found $workflow_count workflow files"
    ls -la .github/workflows/
else
    echo "❌ .github/workflows directory not found"
    exit 1
fi

echo ""
echo "🧪 Running local tests (same as CI)..."
echo "======================================"

# Run tests the same way CI does
echo "Running: CI=true npm run test:ci"
if CI=true npm run test:ci; then
    echo "✅ Tests pass locally"
else
    echo "❌ Tests fail - fix before pushing to GitHub"
    exit 1
fi

echo ""
echo "🏗️ Testing build (same as CI)..."
echo "==============================="

# Test build
echo "Running: npm run build"
if npm run build; then
    echo "✅ Build succeeds locally"
else
    echo "❌ Build fails - fix before pushing to GitHub"
    exit 1
fi

echo ""
echo "📋 Environment Check..."
echo "======================"

# Check Node.js version
node_version=$(node --version)
echo "📍 Node.js version: $node_version"

# Check npm version  
npm_version=$(npm --version)
echo "📍 npm version: $npm_version"

# Check if package.json has required scripts
echo "📍 Checking package.json scripts..."
if grep -q '"test:ci"' package.json; then
    echo "✅ test:ci script found"
else
    echo "❌ test:ci script missing"
fi

if grep -q '"build"' package.json; then
    echo "✅ build script found"
else
    echo "❌ build script missing"
fi

echo ""
echo "✅ PRE-FLIGHT CHECK COMPLETE!"
echo "============================="
echo ""
echo "🚀 Your project is ready for GitHub Actions!"
echo ""
echo "Next steps:"
echo "1. Push your code to GitHub"
echo "2. GitHub Actions will automatically run"
echo "3. Check the 'Actions' tab in your GitHub repository"
echo ""
echo "Optional: Set up branch protection rules (see github-setup-checklist.md)"
