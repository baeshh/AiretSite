# AIRET - Cloudflare Pages Deployment Guide

## Project Configuration Summary

**Frontend Framework**: React 18.3.1 + TypeScript + Vite  
**Build Output**: `dist/public/` (static files)  
**Build Command**: `npm run build` (this builds both frontend to dist/public and backend to dist/)  
**Node Version**: 20.x  
**Custom Domain**: airet.io

## Option 1: Direct Cloudflare Pages Deployment (Recommended)

### Step 1: Prepare Your Repository
1. Push your Replit project to GitHub (if not already done)
2. Ensure the repository contains the configuration files created above

### Step 2: Connect to Cloudflare Pages
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → Pages
2. Click "Create a project" → "Connect to Git"
3. Select your GitHub repository
4. Configure build settings:
   - **Framework preset**: React (Vite)
   - **Build command**: `npm run build`
   - **Build output directory**: `dist/public`
   - **Root directory**: `/` (leave empty)
   - **Node.js version**: 20

### Step 3: Configure Custom Domain
1. After successful deployment, go to Pages project → Custom domains
2. Click "Set up a custom domain"
3. Enter `airet.io`
4. Follow DNS configuration instructions:
   - Add CNAME record: `airet.io` → `[your-pages-subdomain].pages.dev`
   - Or use A/AAAA records as provided by Cloudflare

### Step 4: Environment Variables (if needed)
- Go to Settings → Environment variables
- Add any required variables for production

## Option 2: Manual Upload

### Step 1: Build Locally in Replit
```bash
# In Replit console
npm run build
```

### Step 2: Upload to Cloudflare Pages
1. Download the `dist/public` folder from Replit
2. Go to Cloudflare Pages → "Upload assets"
3. Drag and drop the contents of `dist/public`
4. Set up custom domain as above

## Important Configuration Details

### Current Build Setup
- **Entry Point**: `client/index.html`
- **Main Script**: `client/src/main.tsx`
- **Assets**: Images in `attached_assets/` folder
- **Output**: Static files in `dist/public/`

### SPA Routing Configuration
- The `_redirects` file ensures proper client-side routing
- All routes redirect to `index.html` for React Router handling

### SEO & Performance
- Pre-configured meta tags for airet.io domain
- Open Graph and Twitter cards
- Google Fonts preconnect
- Plausible Analytics ready (domain: airet.io)

### Security Headers
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- X-XSS-Protection enabled
- Strict referrer policy

## Verification Steps

After deployment:
1. ✅ Visit https://airet.io - should load the homepage
2. ✅ Test navigation - all routes should work
3. ✅ Check mobile responsiveness
4. ✅ Verify HTTPS certificate
5. ✅ Test social media sharing (Open Graph)

## Troubleshooting

**Build Fails**: Ensure Node.js 20 is selected in Cloudflare Pages settings  
**Routing Issues**: Verify `_redirects` file is in the build output  
**Assets Not Loading**: Check that `attached_assets` images are properly referenced  
**Domain Issues**: Ensure DNS propagation is complete (up to 48 hours)

## Performance Optimizations

The build already includes:
- Asset optimization via Vite
- Code splitting for React vendor chunks
- Minified CSS and JavaScript
- Optimized image loading

Your AIRET project is now ready for Cloudflare Pages deployment with the custom domain airet.io!