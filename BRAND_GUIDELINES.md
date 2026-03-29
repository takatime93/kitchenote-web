# Kitchenote Brand Guidelines

## Brand Overview

Kitchenote is a recipe management app that helps home cooks save, organize, and cook from recipes with ease. Our brand is warm, approachable, and playful—like a friend who happens to be great in the kitchen.

---

## Visual Identity

### Logo

The Kitchenote logo is a simple, rounded rectangle with three horizontal lines representing recipe content. It works at small sizes (app icon) and scales well for marketing materials.

**Usage:**
- Minimum size: 24px
- Clear space: At least 8px around all sides
- Always use on appropriate contrast backgrounds

### Color Palette

#### Primary Colors

| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| Terracotta 500 | `#e86f4c` | 232, 111, 76 | Primary buttons, highlights |
| Terracotta 600 | `#d5532e` | 213, 83, 46 | Hover states |
| Terracotta 100 | `#fde8e1` | 253, 232, 225 | Light backgrounds |

#### Background Colors

| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| Cream 50 | `#fefdfb` | 254, 253, 251 | Page background |
| Cream 100 | `#fcf9f4` | 252, 249, 244 | Card backgrounds |
| White | `#ffffff` | 255, 255, 255 | Content areas |

#### Accent Colors

| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| Sage 500 | `#788d61` | 120, 141, 97 | Success states, badges |
| Sage 50 | `#f6f7f4` | 246, 247, 244 | Light accent backgrounds |

#### Neutral Colors

| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| Neutral 900 | `#18181b` | 24, 24, 27 | Headings |
| Neutral 700 | `#3f3f46` | 63, 63, 70 | Body text |
| Neutral 500 | `#71717a` | 113, 113, 122 | Secondary text |
| Neutral 300 | `#d4d4d8` | 212, 212, 216 | Borders |

### Typography

#### Display Font: Nunito
- **Weights**: 600 (semibold), 700 (bold), 800 (extrabold)
- **Usage**: Headlines, buttons, navigation
- **Character**: Friendly, rounded, approachable

#### Body Font: Inter
- **Weights**: 400 (regular), 500 (medium), 600 (semibold)
- **Usage**: Body text, descriptions, UI elements
- **Character**: Clean, readable, modern

#### Type Scale

```
h1: 2.5rem (mobile) / 3.5rem (desktop) - Display font, bold
h2: 2rem (mobile) / 2.5rem (desktop) - Display font, bold
h3: 1.5rem (mobile) / 1.75rem (desktop) - Display font, bold
Body: 1rem - Body font, regular
Small: 0.875rem - Body font, regular
```

---

## Brand Voice

### Personality

**Playful & Fun** - Like chatting with a friend who loves to cook

We're enthusiastic about making cooking easier, but we don't take ourselves too seriously. We acknowledge the real frustrations of recipe management with empathy and light humor.

### Tone Markers

1. **Casual contractions**: "you'll love", "it's simple", "we've got you"
2. **Light humor**: Occasional food puns, relatable cooking frustrations
3. **Celebrates small wins**: "finally, no more scrolling past life stories!"
4. **Conversational**: Questions to the reader, asides, varied sentence structure

### Examples

**Good:**
> "You know that feeling when you find the perfect recipe but it's buried under someone's life story? Yeah, we fixed that."

> "One-tap to save any recipe. No more screenshots scattered across your camera roll like culinary confetti."

**Avoid:**
> "Kitchenote leverages cutting-edge technology to seamlessly integrate your recipe management workflow."

> "Our innovative solution empowers users to unlock their culinary potential."

### Words to Use

- Save, grab, snag
- Organize, sort, find
- Cook, make, try
- Simple, easy, quick
- Finally, actually, honestly

### Words to Avoid

- Seamlessly, leverage, unlock
- Empower, revolutionary, cutting-edge
- Synergy, ecosystem, paradigm
- Best-in-class, world-class
- Delve, utilize, facilitate

---

## Writing Guidelines

### Humanization Techniques

1. **Vary sentence length**
   - Short. Punchy. Then something longer that meanders a bit and gives the reader more context.

2. **Add personal asides**
   - "(Okay, maybe I'm biased, but...)"
   - "(Trust me on this one.)"
   - "Here's the thing—"

3. **Use specific details**
   - "Tuesday night tacos" not "meal planning"
   - "3 months of screenshots" not "your saved recipes"

4. **Include conversational fragments**
   - "The thing is..."
   - "Here's the deal."
   - "Not gonna lie."

### Content Quality Checklist

Before publishing, verify:

- [ ] No "AI smell" phrases (seamlessly, leverage, unlock, empower, delve)
- [ ] Sentence length varies (mix short punchy + longer flowing)
- [ ] At least one personal/specific detail per section
- [ ] Reads naturally when spoken aloud
- [ ] Contains at least one conversational aside or question
- [ ] Avoids perfect parallelism (not every bullet follows same pattern)
- [ ] Has a distinct point of view (not generic advice)

---

## Photography Style

### Do:
- Bright, natural lighting
- Home kitchen settings (not studio-perfect)
- Real ingredients with natural imperfections
- Hands in action (cooking, chopping)
- Warm color temperature

### Don't:
- Overly styled, unrealistic food
- Sterile, clinical settings
- Heavy filters or artificial colors
- Stock photo aesthetics
- Perfectly arranged "hero shots"

---

## Japanese Localization

### Tone Adjustments
- Slightly more formal than English
- Less slang, more polite expressions
- Humor style adapted for Japanese audience
- Information density can be higher

### Typography
- Use appropriate Japanese fonts (system defaults work well)
- Increase line-height (1.8 vs 1.7 for Latin)
- Allow for word-break: break-all

---

## Component Examples

### Buttons

**Primary**: Full terracotta background, white text, rounded-full
```
bg-primary-500 text-white font-display font-semibold rounded-full
```

**Secondary**: White background, terracotta text, terracotta border
```
bg-white text-primary-600 border-2 border-primary-200 rounded-full
```

### Cards

```
bg-white rounded-xl p-6 border border-cream-200 shadow-sm
hover:shadow-md transition-shadow
```

### Section Spacing

- Mobile: 3rem vertical padding
- Desktop: 5rem vertical padding
- Max content width: 72rem (container-wide) or 48rem (container-narrow)
