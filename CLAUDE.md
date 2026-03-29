# Kitchenote Web - Agent Context

## Project Overview

Kitchenote Web is the marketing website for the Kitchenote iOS recipe management app. It's a bilingual (EN/JP) static site built with Astro and Tailwind CSS.

## Tech Stack

- **Framework**: Astro 5.x (static site generator)
- **Styling**: Tailwind CSS v4
- **Languages**: TypeScript, Astro components
- **i18n**: Built-in Astro i18n with custom translations

## Key Files

| File | Purpose |
|------|---------|
| `astro.config.mjs` | Astro configuration with i18n and plugins |
| `src/i18n/translations.ts` | All UI strings for EN/JP |
| `src/layouts/Layout.astro` | Main page layout with meta tags |
| `src/styles/global.css` | Tailwind theme and custom styles |
| `BRAND_GUIDELINES.md` | Brand voice, colors, typography |
| `CONTENT_CALENDAR.md` | Blog content planning |

## Directory Structure

```
src/
├── pages/
│   ├── en/          # English pages
│   └── ja/          # Japanese pages
├── components/      # Shared Astro components
├── layouts/         # Page layouts
├── i18n/           # Translation files
└── styles/         # Global CSS
```

## Commands

```bash
npm run dev      # Development server (localhost:4321)
npm run build    # Production build to dist/
npm run preview  # Preview production build
```

## Brand Colors

- **Primary**: `#e86f4c` (Terracotta)
- **Background**: `#fefdfb` (Cream)
- **Accent**: `#788d61` (Sage)
- **Text**: `#27272a` (Neutral)

## Content Guidelines

1. **Voice**: Playful, conversational, friend-like
2. **Avoid**: AI-sounding phrases (seamlessly, leverage, unlock)
3. **Include**: Personal asides, varied sentence length, specific details
4. **Japanese**: More formal than English, adapted humor

## Adding Pages

1. Create `.astro` files in both `src/pages/en/` and `src/pages/ja/`
2. Add translation keys to `src/i18n/translations.ts`
3. Update navigation in `src/components/Header.astro` if needed

## Adding Blog Posts

1. Create post file in `src/pages/en/blog/` (and Japanese version in `ja/blog/`)
2. Update posts array in corresponding `blog/index.astro`
3. Follow blog post template structure

## Common Patterns

### Using Translations
```astro
---
import { getLangFromUrl, useTranslations } from '../i18n/translations';
const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
---
<h1>{t('hero.headline')}</h1>
```

### Localized Links
```astro
---
import { getLocalizedPath } from '../i18n/translations';
---
<a href={getLocalizedPath('/features', lang)}>Features</a>
```

## Deployment

The site builds to static HTML and can be deployed to:
- Vercel (recommended)
- Netlify
- Cloudflare Pages
- Any static hosting

## Notes

- All recipes/app data mentioned is local to user devices (privacy-first)
- App Store link placeholder needs real app-id when available
- OG image is placeholder - needs proper design
