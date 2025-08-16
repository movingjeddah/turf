# Deployment Guide

## 🚀 Quick Start

### 1. Environment Variables

Create a `.env.local` file in the root directory with:

```env
# Required
NEXT_PUBLIC_SITE_URL=https://your-domain.com

# Optional - Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Optional - Google Site Verification
GSC_VERIFICATION=your-google-site-verification-code
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 4. Build for Production

```bash
npm run build
npm run start
```

## 📱 Deployment Options

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import repository in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Deploy to Netlify

1. Push to GitHub
2. Connect to [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `.next`

### Deploy to Traditional Hosting

1. Build the project:
```bash
npm run build
```

2. Copy these folders to your server:
- `.next/`
- `public/`
- `package.json`
- `package-lock.json`

3. Install dependencies on server:
```bash
npm install --production
```

4. Start the application:
```bash
npm run start
```

## 🔍 Post-Deployment Checklist

- [ ] Update `NEXT_PUBLIC_SITE_URL` in environment variables
- [ ] Submit sitemap to Google Search Console: `your-domain.com/sitemap.xml`
- [ ] Verify Google Analytics is tracking
- [ ] Test all forms and contact methods
- [ ] Check WhatsApp links with correct phone number
- [ ] Verify all images are loading correctly
- [ ] Test on mobile devices
- [ ] Check RTL layout on Arabic content

## 📊 Performance Monitoring

After deployment, test your site with:
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

Target scores:
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## 🛠️ Troubleshooting

### Images not loading
- Check that all images exist in `/public/images/`
- Verify image paths in content files

### Arabic text not displaying correctly
- Ensure fonts are loading from Google Fonts
- Check RTL styles in `globals.css`

### Forms not working
- Verify server actions are enabled
- Check form submission endpoints

### Build errors
- Clear `.next` folder: `rm -rf .next`
- Clear node_modules: `rm -rf node_modules && npm install`
- Check Node.js version (16+ required)

## 📞 Support

For issues or questions about deployment, check the README.md file or contact the development team.
