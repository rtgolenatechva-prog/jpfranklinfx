# Design Notes — Plumbing Demo Funnel Redesign

## Aesthetic Direction
"Precision Trades — Dark Luxury Meets Industrial Edge"
Dark slate-900 (#0F172A) base with blue-600 (#2563EB) as the singular accent.
Sharp corners (4px radius max), no rounded pill buttons, no pastel softness.

## Font Choices
- **Bebas Neue** — display/headline font. Zero-width optical gaps, ultra-condensed, high
  authority. Used for hero H1, section H2, stat values, step numbers, CTA headlines.
- **DM Sans** — body/UI font. Geometric humanist, highly legible at small sizes, modern
  without being clinical. Used for all body copy, labels, buttons, sub-headlines.

## Color System (all derived from extracted palette)
| Token | Value | Source |
|-------|-------|--------|
| `--dark` | `#0F172A` | Tailwind slate-900 |
| `--dark-2` | `#1E293B` | Tailwind slate-800 |
| `--dark-3` | `#080E1C` | slate-900 darkened ~12% |
| `--accent` | `#2563EB` | Tailwind blue-600 |
| `--accent-light` | `#60A5FA` | Tailwind blue-400 |
| `--light` | `#F8FAFC` | Tailwind slate-50 |
| `--red` | `#EF4444` | Tailwind red-500 |
| `--gold` | `#FBBF24` | Tailwind amber-400 |

No new hues introduced. All variants are lightened/darkened within 10–20% of extracted values.

## Section Architecture
1. **Hero** — Full-viewport, two-column split. Left: content over dark + blue radial glow.
   Right: Unsplash photo with diagonal `clip-path` cutout and gradient overlay.
   Two floating stat cards animate in from top and bottom.
2. **Stats Bar** — Full-width dark band with blue top/bottom borders. Counter animation
   fires once on first scroll into view via IntersectionObserver.
3. **Services Grid** — 3-column on desktop, cards stagger-reveal on scroll with 75ms
   per-card delay. Ghost numbers (01–06) in Bebas Neue behind each card at 3.5% opacity.
   Icon color and bg transition to solid blue-600 on hover.
4. **Trust Bar** — Full-width blue-600 band. Exact items from original.
5. **CTA Banner** — `clip-path: polygon(...)` creates diagonal top/bottom edges.
   Central radial glow behind headline. Disabled on mobile (flat section).
6. **Form Section** — Dark background matching the rest. Left column has numbered
   steps (Bebas Neue step numbers) + phone card. Right column is the GHL iframe embed,
   same form ID and subdomain as production.
7. **Footer** — Minimal. Accent-color top border, copyright from original.

## Animation Details
- **Hero entrance**: CSS `@keyframes fade-up` (translateY 22px → 0, opacity 0 → 1)
  staggered 100ms per element via nth-child selectors. GPU-safe (transform + opacity only).
- **Header underline**: CSS `@keyframes draw-line` scaleX 0→100% over 1.4s.
- **Floating cards**: Separate `@keyframes float-in-top` and `float-in-bot` delayed 0.9s/1.1s.
- **Stat counters**: `requestAnimationFrame` loop with `easeOutCubic` over 1600ms.
  Fires once via IntersectionObserver at 40% viewport intersection.
- **Service cards**: IntersectionObserver at 8% adds `.in` class with 75ms stagger.
  Cards use CSS transition for opacity + translateY (not keyframes) so they're interruptible.
- **Scroll reveals**: `.reveal` → `.in` class via IntersectionObserver, 12% threshold.
- **Magnetic buttons**: `mousemove` → `translate(dx*0.14, dy*0.14)`. Subtle — 14% of
  cursor offset. Resets on `mouseleave`. Applied to all `.btn` elements.
- All animations use `transform` and `opacity` only (GPU compositing — no layout thrashing).

## Performance Notes
- Hero image: `loading="eager"` (above fold, critical)
- GHL form iframe: `loading="lazy"` (below fold)
- Fonts: `display=swap` prevents FOIT
- No unused CSS rules; all properties active on page
- Lucide loaded as CDN UMD bundle (~80KB), initialized once via `lucide.createIcons()`
