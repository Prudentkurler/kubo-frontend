# HealthTech4Africa Frontend

> **Enterprise-grade healthcare technology marketing website** built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Apple/Pixelmator-inspired design with clinical precision.

![Status](https://img.shields.io/badge/status-ready-success)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38bdf8)

---

## 🚀 Quick Start

```powershell
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit **http://localhost:3000** to view the site.

### 📸 Adding Your Images

Place your images in the following folders (see `IMAGE_DOWNLOAD_GUIDE.md` for details):
- `public/images/hero-main.jpg` - Hero section background
- `public/images/features/*.png` - Feature bento box images (already added!)
- `public/images/workflow/*.jpg` - Workflow step images  
- `public/images/team/*.jpg` - Team member headshots

**Note:** Some images are already added as `.png` files in the features folder!

---

## 📋 What's Been Built

### ✅ Complete Landing Page
- **Navbar** - Sticky navigation with scroll-triggered glass effect
- **Hero Section** - Full-screen hero with animated CTAs and trust badges
- **Feature Bento Grid** - Responsive mosaic layout with large/small tiles
- **How It Works Carousel** - 4-step workflow with keyboard navigation
- **Team Grid** - Team member cards with grayscale-to-color hover effect
- **Footer** - Comprehensive footer with links, legal, and compliance badges

### ✅ UI Component Library
- **Button** - 4 variants (primary, secondary, ghost, outline) with 3 sizes
- **Card** - Flexible card component with variant and padding props
- **Input** - Accessible form input with label, error, and helper text
- **MotionSection** - Framer Motion wrapper for scroll animations

### ✅ Design System
- **Design Tokens** (`src/styles/tokens.css`) - Complete color palette, typography, spacing
- **Global Styles** (`src/styles/globals.css`) - Base styles, utilities, accessibility
- **Tailwind Config** - Custom theme with clinical-grade color system

### ✅ Project Structure
```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   └── page.tsx            # Landing page composition
├── components/
│   ├── ui/                 # Base UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   └── MotionSection.tsx
│   └── sections/           # Page sections
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── FeatureBento.tsx
│       ├── HowItWorksCarousel.tsx
│       ├── TeamGrid.tsx
│       └── Footer.tsx
├── data/
│   └── content.json        # Content data for features, team, workflow
├── lib/
│   └── utils.ts            # Utility functions (cn, debounce, etc.)
├── styles/
│   ├── tokens.css          # Design tokens
│   └── globals.css         # Global styles
└── types/
    └── index.ts            # TypeScript interfaces
```

---

## 🎨 Design Philosophy

Based on **AGENT.md** specifications:

### Pixelmator + Apple/Samsung DNA
- **Cinematic Clarity** - One idea per section with supporting visual
- **White as Space** - Clean white canvas with deliberate whitespace
- **Depth by Light** - Soft shadows, gradients, and focal lighting
- **Restraint** - Minimal visible controls, progressive disclosure
- **Polished Typography** - Large expressive headings, compact body copy
- **Trust & Credibility** - Clinical copy, compliance badges, research links

### Color Palette
```css
--bg-1: #FFFFFF        /* Main canvas */
--bg-2: #FAFBFC        /* Soft surface */
--bg-3: #F4F6F8        /* Deeper surface */
--accent-500: #3B82F6  /* Primary blue */
--text-primary: #0B1220
--text-secondary: #4A5568
```

### Typography
- **Headings**: Plus Jakarta Sans (700)
- **Body**: Inter (400)
- **H1**: 56px → 40px → 32px (desktop → tablet → mobile)
- **H2**: 40px → 32px → 24px
- **Body**: 18px (line-height 1.6)

---

## 🧩 Component Usage

### Hero
```tsx
<Hero
  heading="AI Radiology for the Real World"
  subheading="Precision-driven chest X-ray insights..."
  primaryCTA={{ label: "Request Early Access", href: "/contact" }}
  secondaryCTA={{ label: "View Demo", href: "/demo" }}
  heroImage="/images/hero-main.jpg"
/>
```

### Feature Bento
```tsx
<FeatureBento features={features} />
```

Features data structure:
```json
{
  "id": "ai-diagnostics",
  "title": "AI Diagnostics",
  "description": "Automatically detect chest abnormalities...",
  "icon": "🔬",
  "size": "large",
  "tag": "Core Feature",
  "image": "/images/features/ai-diagnostics.jpg"
}
```

### How It Works Carousel
```tsx
<HowItWorksCarousel steps={workflowSteps} />
```

### Team Grid
```tsx
<TeamGrid members={teamMembers} />
```

---

## 🖼️ Image Assets

### Current Status
✅ Placeholder SVG images created for all sections
📝 Image prompts document available in `IMAGE_PROMPTS.md`

### Image Structure
```
public/images/
├── hero-main.jpg          # Hero section (1920x1440)
├── placeholder.jpg        # Generic placeholder
├── features/              # Feature images (800x600 / 1200x900)
│   ├── ai-diagnostics.jpg
│   ├── telehealth.jpg
│   ├── chat.jpg
│   ├── integrations.jpg
│   └── analytics.jpg
├── workflow/              # Workflow step images (1000x750)
│   ├── upload.jpg
│   ├── analysis.jpg
│   ├── review.jpg
│   └── collaborate.jpg
└── team/                  # Team photos (600x800)
    ├── ama.jpg
    ├── kofi.jpg
    ├── chioma.jpg
    └── james.jpg
```

### Next Steps for Images
1. Use DALL-E, Midjourney, or Stable Diffusion with prompts from `IMAGE_PROMPTS.md`
2. Or source from Unsplash/Pexels for medical/healthcare imagery
3. Replace placeholder SVGs with real images

---

## ♿ Accessibility Features

- ✅ Semantic HTML throughout
- ✅ ARIA labels on all interactive elements
- ✅ Keyboard navigation support
- ✅ Focus states with 3px outline
- ✅ Skip-to-main-content link
- ✅ Reduced motion support
- ✅ Color contrast WCAG 2.1 AA compliant
- ✅ Screen reader friendly

---

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Container
- Max width: 1440px
- Padding: 1rem mobile → 2rem desktop

### Section Spacing
- `py-24` desktop
- `py-12` tablet
- `py-8` mobile

---

## 🎭 Animations

Powered by **Framer Motion**:

- Hero elements fade in and slide up on load
- Sections animate into view on scroll
- Cards have hover scale and shadow effects
- Carousel with smooth transitions
- Team photos grayscale → color on hover
- Navbar glass effect on scroll

**Performance Rules**:
- All animations ≤ 600ms duration
- Respects `prefers-reduced-motion`
- GPU-accelerated transforms only

---

## 📦 Dependencies

### Core
- **next**: ^14.2.0 - React framework
- **react**: ^18.3.0 - UI library
- **react-dom**: ^18.3.0 - React DOM

### Styling
- **tailwindcss**: ^3.4.0 - Utility-first CSS
- **clsx**: ^2.1.0 - Conditional classes
- **tailwind-merge**: ^2.2.0 - Merge Tailwind classes

### Animation
- **framer-motion**: ^11.0.0 - Animation library

### Dev Tools
- **typescript**: ^5.3.0
- **@types/node**: ^20.11.0
- **@types/react**: ^18.2.0
- **eslint**: ^8.56.0
- **prettier**: ^3.2.0

---

## 🛠️ Available Scripts

```powershell
npm run dev         # Start development server (http://localhost:3000)
npm run build       # Build for production
npm run start       # Start production server
npm run lint        # Run ESLint
npm run format      # Format code with Prettier
npm run type-check  # TypeScript type checking
```

---

## 📝 Content Management

All content is managed in `src/data/content.json`:

- **features**: Feature bento tiles
- **workflowSteps**: How It Works carousel steps
- **team**: Team member information

To update content, edit the JSON file and restart the dev server.

---

## 🚢 Deployment

### Vercel (Recommended)
```powershell
npm install -g vercel
vercel
```

### Other Platforms
1. Build: `npm run build`
2. Start: `npm run start`
3. Server will run on port 3000

### Environment Variables
No environment variables required for basic deployment.

---

## 📚 Documentation

- **AGENT.md** - Complete development specification and design system
- **IMAGE_PROMPTS.md** - AI image generation prompts for all assets
- **README.md** - This file

---

## 🎯 Compliance & Security

### Built-In Features
- HIPAA-ready architecture
- GDPR support indicators
- End-to-end encryption messaging
- Secure authentication ready (SSO)
- DICOM/FHIR/PACS integration ready

### Badges Displayed
- ✅ HIPAA-ready
- ✅ GDPR Support  
- ✅ ISO 27001
- ✅ Encrypted End-to-End

---

## 🔮 Next Steps

### Phase 2 - Additional Pages
- [ ] `/technology` - Detailed technology page
- [ ] `/team` - Extended team page
- [ ] `/news` - Blog/news section
- [ ] `/contact` - Contact form with validation
- [ ] `/demo` - Interactive product demo

### Phase 3 - Enhancements
- [ ] Replace placeholder images with real assets
- [ ] Add blog CMS integration
- [ ] Implement contact form backend
- [ ] Add analytics tracking
- [ ] SEO optimization
- [ ] Performance optimization
- [ ] Add Storybook for component documentation

### Phase 4 - Advanced Features
- [ ] Multi-language support (i18n)
- [ ] Dark mode toggle
- [ ] Advanced animations
- [ ] Video integration
- [ ] Case studies section
- [ ] Customer testimonials

---

## 💡 Tips for Development

### Hot Reload
- Next.js automatically reloads on file changes
- Tailwind classes are JIT-compiled

### Component Development
- All components are in `src/components/`
- Use TypeScript interfaces from `src/types/`
- Follow naming convention: `PascalCase.tsx`

### Styling
- Use Tailwind utility classes
- Custom utilities in `globals.css`
- Design tokens in `tokens.css`
- Avoid inline styles except for dynamic values

### Type Safety
- All components have TypeScript interfaces
- Props are strongly typed
- Use `cn()` utility for conditional classes

---

## 🐛 Troubleshooting

### Port Already in Use
```powershell
# Kill process on port 3000
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Module Not Found
```powershell
# Clear node_modules and reinstall
Remove-Item -Recurse -Force node_modules
npm install
```

### Build Errors
```powershell
# Type check first
npm run type-check

# Check linting
npm run lint
```

### Image Not Loading
- Verify image path starts with `/images/`
- Check file exists in `public/images/`
- Clear Next.js cache: `Remove-Item -Recurse -Force .next`

---

## 📄 License

Proprietary - HealthTech4Africa © 2025

---

## 👥 Team

- **Design System**: Based on Pixelmator + Apple/Samsung aesthetics
- **Architecture**: Next.js 14 + App Router
- **UI/UX**: Clinical-first, accessibility-focused
- **Performance**: Optimized for Core Web Vitals

---

## 🙏 Acknowledgments

- **AGENT.md** - Comprehensive specification document
- **Next.js** - React framework
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **Vercel** - Deployment platform

---

**Built with ❤️ for Healthcare in Africa** 🌍
