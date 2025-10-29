# VIDELINA - GitHub Push Commands

## Quick Setup Commands

Run these commands in order to push your Videlina project to GitHub:

### 1. Create Repository on GitHub
First, create a new repository at [github.com](https://github.com):
- Name: `videlina`
- Description: "A digital library dedicated to the works of Omraam Mikhaël Aïvanhov"
- **Do not** initialize with README (we already have one)

### 2. Set Remote URL
Replace `YOUR_USERNAME` with your actual GitHub username:

```bash
git remote set-url origin https://github.com/YOUR_USERNAME/videlina.git
```

### 3. Push to GitHub
```bash
git push -u origin main
```

### Alternative (if branch name issues):
```bash
git branch -M main
git push -u origin main
```

## Complete Command Sequence
```bash
# Navigate to project directory
cd /Users/gunjansharma/Documents/Videlina

# Set your GitHub remote URL (replace YOUR_USERNAME)
git remote set-url origin https://github.com/YOUR_USERNAME/videlina.git

# Push to GitHub
git push -u origin main
```

## Verification
After pushing, visit:
`https://github.com/YOUR_USERNAME/videlina`

You should see all your Videlina files there!

## Troubleshooting

### Authentication Issues
- Make sure you're logged into GitHub in your browser
- Or set up SSH keys: https://docs.github.com/en/authentication/connecting-to-github-with-ssh

### Permission Errors
- Check that repository name matches exactly
- Ensure you have write access to the repository

### Branch Name Conflicts
If you get errors about branch names, use:
```bash
git branch -M main
git push -u origin main
```

---

**Next Steps:**
- Add real book PDFs to `public/pdfs/` folder
- Replace placeholder content with authentic spiritual teachings
- Deploy to Vercel or Netlify for live hosting

*"Let light, peace, and wisdom guide your every thought."*  
*- Omraam Mikhaël Aïvanhov*