# Kitchenote Web

Marketing website for Kitchenote - the recipe organizer app.

## Tech Stack

- **Framework**: [Astro](https://astro.build/) - Fast, static-first site generator
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4
- **Content**: MDX for blog posts
- **i18n**: Built-in Astro internationalization (EN/JP)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
kitchenote-web/
├── src/
│   ├── pages/
│   │   ├── en/              # English pages
│   │   │   ├── index.astro  # Home
│   │   │   ├── features.astro
│   │   │   ├── how-it-works.astro
│   │   │   ├── about.astro
│   │   │   ├── support.astro
│   │   │   ├── privacy.astro
│   │   │   ├── terms.astro
│   │   │   └── blog/
│   │   └── ja/              # Japanese pages (mirrors EN)
│   ├── components/          # Reusable components
│   ├── layouts/             # Page layouts
│   ├── i18n/               # Translation strings
│   └── styles/             # Global CSS (Tailwind)
├── public/
│   └── images/             # Static assets
├── astro.config.mjs
└── package.json
```

## Pages

| Route | Description |
|-------|-------------|
| `/en/` | English homepage |
| `/ja/` | Japanese homepage |
| `/en/features` | Feature breakdown |
| `/en/how-it-works` | Step-by-step guide |
| `/en/about` | Story and mission |
| `/en/blog` | Blog index |
| `/en/support` | FAQ and contact |
| `/en/privacy` | Privacy Policy |
| `/en/terms` | Terms of Service |

## i18n

The site supports English and Japanese. Translations are in `src/i18n/translations.ts`.

```typescript
import { useTranslations } from '../i18n/translations';

const t = useTranslations('en');
// or
const t = useTranslations('ja');

// Usage
t('hero.headline')
```

## Deployment

The site is configured for static export and can be deployed to:

- **Vercel** (recommended)
- **Netlify**
- **Cloudflare Pages**
- Any static hosting

```bash
# Build static site
npm run build

# Output is in dist/
```

## Brand Colors

See `BRAND_GUIDELINES.md` for full brand documentation.

| Color | Hex | Usage |
|-------|-----|-------|
| Primary (Terracotta) | `#e86f4c` | CTAs, accents |
| Cream | `#fefdfb` | Backgrounds |
| Sage | `#788d61` | Secondary accents |
| Neutral | `#27272a` | Text |

## Adding Content

### Blog Posts

1. Create a new file in `src/pages/en/blog/` (and `ja/` for Japanese)
2. Use the blog post template
3. Update the posts array in `blog/index.astro`

### New Pages

1. Create `.astro` files in both `en/` and `ja/` directories
2. Add translations to `src/i18n/translations.ts`
3. Update navigation in `Header.astro` if needed

## Scripts

```bash
npm run dev       # Start dev server (localhost:4321)
npm run build     # Build for production
npm run preview   # Preview production build
npm run astro     # Run Astro CLI commands
```

## License

Proprietary - All rights reserved.
