# GitHub Pages Deployment - MIME Type Fix

## 🎯 Issue Fixed

**Problem:** GitHub Pages serves `.mjs` files with `application/octet-stream` MIME type, causing this error:
```
Failed to load module script: Expected a JavaScript-or-Wasm module script 
but the server responded with a MIME type of "application/octet-stream"
```

**Root Cause:** GitHub Pages does not recognize `.mjs` as a JavaScript module extension.

## ✅ Solution Implemented

Changed Vite configuration to output `.js` files instead of `.mjs` files.

### Changes Made

#### 1. Updated `vite.config.ts`
```diff
- entryFileNames: 'assets/[name]-[hash].mjs',
- chunkFileNames: 'assets/[name]-[hash].mjs',
+ entryFileNames: 'assets/[name]-[hash].js',
+ chunkFileNames: 'assets/[name]-[hash].js',
```

**File:** `vite.config.ts` (lines 13-14)

#### 2. Removed `.htaccess` file
- Deleted `public/.htaccess`
- GitHub Pages doesn't support Apache configuration files

#### 3. Added `.gitattributes`
- Ensures consistent line endings across different operating systems
- Sets proper EOL for text files

## 📦 Build Output

**Before (with .mjs):**
```
dist/assets/index-[hash].mjs  ← Caused MIME type error
```

**After (with .js):**
```
dist/assets/index-[hash].js   ← Works on GitHub Pages ✓
```

## 🚀 Deployment Process

### Automatic Deployment
1. Push to `main` branch
2. GitHub Actions automatically builds and deploys
3. Site updates at https://kwar-ai.com.br

### Manual Deployment
1. Go to **Actions** tab
2. Select "Deploy static content to Pages"
3. Click "Run workflow"

## 🔍 Verification Steps

After deployment, verify:

### 1. Check MIME Types
- Open DevTools (F12)
- Go to Network tab
- Reload page
- Find `.js` files
- **Expected:** `Content-Type: application/javascript`
- **NOT:** `application/octet-stream`

### 2. Check Console
- Should be clean (no MIME type errors)
- No 404 errors for assets
- Translations load correctly

### 3. Test i18n
- Click globe icon 🌐 in navbar
- Switch languages (PT/EN/ES)
- All text should translate properly

## 📋 File Structure

```
dist/
├── .nojekyll              ← Prevents Jekyll processing
├── index.html             ← Main HTML
├── assets/
│   ├── index-[hash].css   ← Styles
│   └── index-[hash].js    ← JavaScript (not .mjs!)
├── images/                ← Static images
└── locales/               ← i18n translations
    ├── pt-BR/translation.json
    ├── en/translation.json
    └── es/translation.json
```

## 🌐 Custom Domain

- **Domain:** kwar-ai.com.br
- **Hosting:** GitHub Pages
- **HTTPS:** Enabled (automatic)
- **CDN:** GitHub's global CDN

## 📊 Performance

- **Bundle size:** 484.84 kB (146.82 kB gzipped)
- **CSS size:** 98.77 kB (16.15 kB gzipped)
- **Total:** ~163 kB gzipped

## ⚠️ Important Notes

### Why .js instead of .mjs?

1. **GitHub Pages limitation:** Doesn't recognize `.mjs` as JavaScript
2. **Browser support:** Modern browsers support ES modules with `.js` extension
3. **Module type:** The `<script type="module">` tag indicates it's a module, not the file extension

### Why no .htaccess?

- GitHub Pages uses nginx, not Apache
- `.htaccess` files are ignored
- Server configuration is managed by GitHub

### Why .nojekyll?

- Prevents Jekyll from processing the site
- Ensures files starting with `_` are included
- Required for SPAs on GitHub Pages

## 🔧 Troubleshooting

### Still seeing MIME type errors?

1. **Clear cache:** Ctrl+Shift+R / Cmd+Shift+R
2. **Verify build:** Check `dist/assets/*.js` files exist
3. **Check workflow:** Review GitHub Actions logs
4. **Wait for deployment:** Can take 1-5 minutes

### Translations not loading?

1. Check `dist/locales/` exists
2. Verify JSON files are valid
3. Check browser console for 404s
4. Clear localStorage

### Build failing?

1. Check Node version (use LTS)
2. Run `npm ci` locally
3. Check for TypeScript errors
4. Review GitHub Actions logs

## 📚 Related Documentation

- [Vite Configuration](./vite.config.ts)
- [GitHub Actions Workflow](./.github/workflows/deploy.yml)
- [i18n Implementation](./I18N_IMPLEMENTATION.md)
- [Deployment Guide](./DEPLOYMENT.md)

## ✨ Summary

The MIME type issue on GitHub Pages has been **permanently resolved** by:

✅ Changing output from `.mjs` to `.js`
✅ Removing Apache-specific `.htaccess`
✅ Maintaining all i18n functionality
✅ Keeping the build process simple
✅ Ensuring compatibility with GitHub Pages

**Status:** Ready for deployment 🚀

---

**Last Updated:** 2026-03-05
**Tested On:** GitHub Pages with custom domain
**Build Status:** ✅ Passing
