#!/bin/bash

# VIDELINA - Setup Script
# This script helps set up the Videlina spiritual reading app

echo "🚀 Setting up VIDELINA - Digital Library of Light"
echo "=================================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ from https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2)
MAJOR_VERSION=$(echo $NODE_VERSION | cut -d'.' -f1)

if [ $MAJOR_VERSION -lt 18 ]; then
    echo "❌ Node.js version $NODE_VERSION is not supported. Please upgrade to Node.js 18+"
    exit 1
fi

echo "✅ Node.js $NODE_VERSION detected"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Build the project
echo "🔨 Building the project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Project built successfully"
else
    echo "❌ Build failed. Check for errors above"
    exit 1
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "To start the development server:"
echo "  npm run dev"
echo ""
echo "Then open http://localhost:3000 in your browser"
echo ""
echo "📚 For more information, see README.md"
echo "💡 Remember to replace placeholder content with real books and PDFs"
