#!/bin/bash

# VIDELINA - GitHub Push Instructions
# This script provides the exact commands to push the Videlina project to GitHub

echo "🚀 VIDELINA - GitHub Push Instructions"
echo "======================================"
echo ""

# Step 1: Create GitHub Repository
echo "📝 STEP 1: Create Repository on GitHub"
echo "--------------------------------------"
echo "1. Go to https://github.com and sign in"
echo "2. Click the '+' icon → 'New repository'"
echo "3. Repository name: 'videlina'"
echo "4. Description: 'A digital library dedicated to the works of Omraam Mikhaël Aïvanhov'"
echo "5. Choose public or private"
echo "6. DO NOT initialize with README (we already have one)"
echo "7. Click 'Create repository'"
echo ""

# Step 2: Set the correct remote URL
echo "🔗 STEP 2: Set GitHub Remote URL"
echo "--------------------------------"
echo "Replace 'YOUR_USERNAME' with your actual GitHub username and run:"
echo ""
echo "git remote set-url origin https://github.com/YOUR_USERNAME/videlina.git"
echo ""

# Step 3: Push to GitHub
echo "📤 STEP 3: Push to GitHub"
echo "-------------------------"
echo "Run this command to push your code:"
echo ""
echo "git push -u origin main"
echo ""

# Alternative: If you get an error about the branch name
echo "🔄 ALTERNATIVE: If you get branch name errors"
echo "---------------------------------------------"
echo "If the above fails, try:"
echo ""
echo "git branch -M main"
echo "git push -u origin main"
echo ""

# Verification
echo "✅ STEP 4: Verify"
echo "-----------------"
echo "After pushing, visit:"
echo "https://github.com/YOUR_USERNAME/videlina"
echo ""
echo "You should see all your files there!"
echo ""

# Troubleshooting
echo "🔧 TROUBLESHOOTING"
echo "------------------"
echo "If you get authentication errors:"
echo "- Make sure you're logged into GitHub on your browser"
echo "- Or set up SSH keys: https://docs.github.com/en/authentication/connecting-to-github-with-ssh"
echo ""
echo "If you get permission errors:"
echo "- Check that the repository name matches exactly"
echo "- Ensure you have write access to the repository"
echo ""

echo "🎉 Done! Your Videlina app is now on GitHub!"
echo ""
echo "Next steps:"
echo "- Add real book PDFs to the public/pdfs/ folder"
echo "- Replace placeholder content with authentic spiritual teachings"
echo "- Customize colors and styling as needed"
echo "- Deploy to Vercel or Netlify for live hosting"
echo ""
echo "📚 For more information, see README.md and PROJECT_SUMMARY.md"
