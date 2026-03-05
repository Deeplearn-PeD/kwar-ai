# Deployment Guide for Kwar-AI Website

## 🚀 GitHub Pages Deployment

This site is deployed to **GitHub Pages** with a custom domain: **kwar-ai.com.br**

## Automatic Deployment

The site automatically deploys when you push to the `main` branch via GitHub Actions.

**Workflow file:** `.github/workflows/deploy.yml`

## 🚨 Important: MIME Type Fix

**Issue:** GitHub Pages serves `.mjs` files with `application/octet-stream` MIME type, causing errors.

**Solution:** We've configured Vite to output `.js` files instead of `.mjs` files in `vite.config.ts`:

```typescript
build: {
  rollupOptions: {
    output: {
      entryFileNames: 'assets/[name]-[hash].js',  // .js instead of .mjs
      chunkFileNames: 'assets/[name]-[hash].js',
      assetFileNames: 'assets/[name]-[hash].[ext]'
    }
  }
}
```

## Deployment Process

### Automatic (Recommended)

1. **Make your changes** to the code
2. **Commit and push** to the `main` branch:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```
3. **GitHub Actions** will automatically:
   - Install dependencies
   - Build the project
   - Deploy to GitHub Pages

### Manual Trigger

You can also manually trigger deployment:
1. Go to **Actions** tab on GitHub
2. Select **"Deploy static content to Pages"** workflow
3. Click **"Run workflow"**

## Custom Domain Setup

The custom domain `kwar-ai.com.br` is configured via:
1. **CNAME file** in the repository (automatically managed by GitHub Pages)
2. **DNS settings** at your domain registrar:
   - CNAME record pointing to `[username].github.io`
   - Or A records pointing to GitHub Pages IPs

### Update Custom Domain (if needed)

1. Go to repository **Settings** → **Pages**
2. Enter custom domain: `kwar-ai.com.br`
3. Enable **Enforce HTTPS**

## Build Output

After running `npm run build`, the `dist/` folder contains:

```
dist/
├── .nojekyll          ← Prevents Jekyll processing
├── index.html         ← Main HTML file
├── assets/
│   ├── index-[hash].css
│   └── index-[hash].js  ← .js files (not .mjs!)
├── images/            ← Static images
└── locales/           ← Translation files
    ├── pt-BR/
    │   └── translation.json
    ├── en/
    │   └── translation.json
    └── es/
        └── translation.json
```

## Verification

After deployment, verify everything works:

### 1. Check MIME Types
- Open DevTools (F12) → Network tab
- Reload the page
- Find `.js` files
- Check that `Content-Type` is `application/javascript`

### 2. Check Console
- Should be clean, no MIME type errors
- No 404 errors for assets

### 3. Test i18n
- Click the globe icon 🌐 in navbar
- Switch between languages (PT, EN, ES)
- Verify translations load correctly

### 4. Test All Routes
- Navigate to different sections
- All internal links should work
- Page should load correctly on refresh

## File Sizes (after build)

- **HTML**: 0.43 kB
- **CSS**: 98.77 kB (16.15 kB gzipped)
- **JS**: 484.84 kB (146.82 kB gzipped)
- **Total**: ~163 kB gzipped (including translations)

## Troubleshooting

### MIME Type Errors

If you see "Expected a JavaScript module script but the server responded with a MIME type of application/octet-stream":

1. **Check vite.config.ts** has `.js` extensions (not `.mjs`)
2. **Rebuild**: `npm run build`
3. **Push changes**: `git push origin main`
4. **Clear browser cache**: Ctrl+Shift+R / Cmd+Shift+R

### Translation Keys Showing Instead of Text

If you see `hero.title` instead of translated text:

1. **Check i18n configuration** in `src/i18n/index.ts`
2. **Verify translation files** exist in `public/locales/`
3. **Rebuild and redeploy**

### Blank Page

1. **Check browser console** for errors
2. **Verify build succeeded** in GitHub Actions
3. **Check file paths** in `index.html`
4. **Clear cache and refresh**

### 404 Errors

1. **Check `.nojekyll` file** exists in `public/`
2. **Verify file paths** are correct
3. **Check GitHub Pages settings** in repository

### Custom Domain Not Working

1. **Verify DNS settings** at your registrar
2. **Check CNAME file** in repository
3. **Wait for DNS propagation** (can take up to 48 hours)
4. **Enable HTTPS** in GitHub Pages settings

## GitHub Pages Limitations

GitHub Pages has some limitations to be aware of:

- **No server-side processing** (static files only)
- **No .htaccess files** (not supported)
- **No server-side redirects** (use client-side routing)
- **100 GB bandwidth limit** per month
- **1 GB storage limit**

## Development vs Production

### Local Development
```bash
npm run dev
# Runs on http://localhost:5173
# Hot reload enabled
```

### Production Build
```bash
npm run build
# Creates optimized dist/ folder
npm run preview
# Preview production build locally
```

## Monitoring

### GitHub Actions Status
- Check the **Actions** tab for deployment status
- Review build logs if deployment fails

### Site Performance
- Use Google PageSpeed Insights
- Check Google Search Console
- Monitor Core Web Vitals

## Security

GitHub Pages automatically provides:
- **HTTPS** (when enabled)
- **DDoS protection** via GitHub's infrastructure
- **Free SSL certificate** for custom domains

## Support

If you encounter issues:

1. **Check GitHub Actions logs** for build errors
2. **Review browser console** for runtime errors
3. **Verify all files** are in the dist/ folder
4. **Test locally** with `npm run preview`
5. **Clear cache** and hard refresh

## Quick Reference Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy (automatic on push)
git add .
git commit -m "Update message"
git push origin main

# Check build output
ls -la dist/
```
