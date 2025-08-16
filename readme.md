# 🌿 Saudi Gardening - Professional Landscaping Website

A production-ready, SEO-optimized Next.js website for a landscaping company in Jeddah, Saudi Arabia. Built with modern web technologies and optimized for Arabic RTL content.

## 🚀 Features

### Core Features
- ✅ **Arabic RTL Support** - Full right-to-left layout with Arabic typography
- ✅ **SEO Optimized** - Meta tags, JSON-LD structured data, sitemap generation
- ✅ **Performance Optimized** - Lazy loading, image optimization, ISR caching
- ✅ **Mobile Responsive** - Works perfectly on all devices
- ✅ **Dynamic Content Generation** - Auto-generates pages from data files
- ✅ **Contact Forms** - Server actions with spam protection
- ✅ **Blog System** - Full blog with categories and tags
- ✅ **WhatsApp Integration** - Click-to-chat functionality
- ✅ **Service Showcase** - Detailed service pages with pricing
- ✅ **Local SEO** - Neighborhood-specific landing pages

### Technical Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Fonts:** Noto Naskh Arabic (Google Fonts)
- **Icons:** Lucide React
- **Markdown:** react-markdown
- **SEO:** next-seo, next-sitemap
- **Images:** next/image with Sharp

## 📁 Project Structure

```
saudi-gardening/
├── app/
│   ├── (site)/             # Main website routes
│   │   ├── services/        # Service pages
│   │   ├── jeddah/         # Location-specific pages
│   │   ├── blog/           # Blog posts
│   │   ├── contact/        # Contact page
│   │   └── ...
│   ├── actions/            # Server actions
│   ├── globals.css         # Global styles
│   └── layout.tsx          # Root layout
├── components/             # Reusable components
│   ├── ui/                # UI components
│   └── ...
├── content/               # Content data files
│   ├── services.ts        # Services data
│   ├── neighborhoods.ts   # Neighborhoods data
│   ├── blog.ts           # Blog posts
│   └── site.ts           # Site configuration
├── lib/                   # Utility functions
│   ├── routes.ts          # Route definitions
│   ├── seo.ts            # SEO utilities
│   ├── ldjson.ts         # JSON-LD generators
│   └── utils.ts          # General utilities
├── public/                # Static assets
│   ├── images/           # Image assets
│   └── videos/           # Video assets
└── ...
```

## 🛠️ Installation

1. **Clone the repository:**
```bash
git clone https://github.com/your-username/saudi-gardening.git
cd saudi-gardening
```

2. **Install dependencies:**
```bash
npm install
```

3. **Set up environment variables:**
```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration:
```env
# Required
NEXT_PUBLIC_SITE_URL=https://your-domain.com
COMPANY_NAME=Your Company Name
COMPANY_PHONE=+966501234567

# Optional
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
GSC_VERIFICATION=your-verification-code
```

4. **Run the development server:**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📝 Content Management

### Adding New Services

Edit `content/services.ts`:

```typescript
export const services: Service[] = [
  {
    key: 'new-service',
    slug: 'new-service',
    arabicTitle: 'خدمة جديدة',
    englishTitle: 'New Service',
    shortDescription: 'وصف مختصر',
    longDescription: 'وصف تفصيلي',
    keywords: ['كلمة1', 'كلمة2'],
    faqs: [...],
    pricingTiers: [...],
    gallery: [...],
  },
  // ... other services
]
```

### Adding New Neighborhoods

Edit `content/neighborhoods.ts`:

```typescript
export const neighborhoods: Neighborhood[] = [
  {
    slug: 'new-area',
    arabicName: 'حي جديد',
    englishName: 'New Area',
    description: 'وصف الحي',
  },
  // ... other neighborhoods
]
```

### Adding Blog Posts

Edit `content/blog.ts`:

```typescript
export const blogPosts: BlogPost[] = [
  {
    slug: 'new-post',
    title: 'عنوان المقال',
    excerpt: 'مقتطف',
    content: '...', // Markdown content
    author: 'الكاتب',
    publishedAt: '2024-01-20',
    image: '/images/post-image.webp',
    category: 'تصنيف',
    tags: ['وسم1', 'وسم2'],
    readTime: 5,
  },
  // ... other posts
]
```

## 🚀 Deployment

### Building for Production

```bash
npm run build
```

This will:
1. Generate static pages for all routes
2. Optimize images and assets
3. Create sitemap.xml
4. Minify code

### Testing Production Build

```bash
npm run start
```

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Configure environment variables
4. Deploy!

### Deploy to Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Google Cloud Run
- Azure Static Web Apps
- Self-hosted with Node.js

## 📊 Performance Optimization

### Image Optimization
- Use WebP/AVIF formats
- Implement responsive images with `sizes` prop
- Lazy load images below the fold

### Code Splitting
- Dynamic imports for heavy components
- Route-based code splitting (automatic with Next.js)

### Caching Strategy
- ISR (Incremental Static Regeneration) for dynamic content
- Static generation for marketing pages
- Browser caching with proper headers

## 🔍 SEO Configuration

### Meta Tags
- Title templates in `app/layout.tsx`
- Dynamic meta tags in page components
- Open Graph and Twitter Card support

### Structured Data
- LocalBusiness schema
- Service schema
- FAQ schema
- BreadcrumbList schema
- BlogPosting schema

### Sitemap
- Auto-generated with `next-sitemap`
- Configure in `next-sitemap.config.js`

## 📱 Progressive Web App (Optional)

To make it a PWA, add:

1. Create `public/manifest.json`:
```json
{
  "name": "تنسيق حدائق جدة",
  "short_name": "حدائق جدة",
  "theme_color": "#36bf36",
  "background_color": "#ffffff",
  "display": "standalone",
  "start_url": "/",
  "icons": [...]
}
```

2. Add service worker with `next-pwa`

## 🧪 Testing

### Lighthouse Scores
Target scores:
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

### Testing Commands
```bash
# Linting
npm run lint

# Type checking
npx tsc --noEmit

# Build test
npm run build
```

## 📈 Analytics Setup

### Google Analytics 4
1. Create GA4 property
2. Add measurement ID to `.env.local`
3. Analytics will auto-initialize

### Google Search Console
1. Verify ownership
2. Submit sitemap: `your-domain.com/sitemap.xml`
3. Monitor performance

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential.

## 💬 Support

For support, email info@jeddahgardens.com or call +966501234567

## 🏆 Credits

Built with ❤️ by [Your Company Name]

---

**Note:** This is a production-ready website. Ensure all environment variables are properly configured before deployment.
