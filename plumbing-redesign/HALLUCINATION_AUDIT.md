# Hallucination Audit

## KEPT (verified source)

| Element | Source |
|---------|--------|
| Phone: `+1 (218) 438-4180` | From original — hero, CTA banner, form section |
| Badge: "Emergency Line Active • Answers in Seconds" | From original PlumbingHero |
| Headline: "Plumbing Emergency? We're There Fast." | From original PlumbingHero |
| Sub: "AI-powered dispatch… no hold times, no call centres." | From original PlumbingHero |
| CTA: "Call Now — It's Free" | From original PlumbingHero |
| CTA: "Get a Free Quote" | From original PlumbingHero |
| Trust bullets: Same-Day Service, Licensed & Insured, No Call-Out Fee | From original PlumbingHero |
| Float card: "5-Star Rated Service" | From original PlumbingHero |
| Float card: "Under 15 min" / "Response Time" | From original PlumbingHero |
| Stats: 2,400+ / <15 min / 12 yrs / 4.9/5 | From redesigned page.tsx stats strip |
| Stat labels: Jobs Completed / Avg. Response / In Business / Customer Rating | From redesigned page.tsx |
| Section label: "What We Fix" | From original page.tsx |
| Section headline: "Every Plumbing Problem, Solved Same Day." | From original page.tsx |
| All 6 service cards (01–06): titles + descriptions | From original page.tsx SERVICES array |
| Trust bar: Licensed & Insured, 24/7 Emergency, Same-Day Booking, 5-Star Rated, AI-Powered Dispatch | From original page.tsx TRUST_ITEMS |
| CTA banner label: "Emergency? Don't Wait" | From original page.tsx |
| CTA banner headline: "A Plumber On The Way." | From original page.tsx |
| CTA banner sub: "Our AI dispatch system ensures zero wait time…" | From original page.tsx |
| Form section label: "Free Quote" | From original page.tsx |
| Form headline: "Get a Free Quote in Minutes" | From original page.tsx |
| Call steps 01–04 | From original page.tsx CALL_STEPS array |
| Phone card: "Prefer to Call Directly?" | From original page.tsx |
| Phone note: "Available 24/7 — no wait times" | From original page.tsx |
| GHL form ID: `XOr0eWukDIWa4yZsXuPn` | From PlumbingGHLForm.tsx |
| GHL subdomain: `links.aiagenticworkflow.ai` | From PlumbingGHLForm.tsx |
| Footer: "Agentic Workflow AI • Demo plumbing funnel powered by GHL Voice AI" | From original page.tsx footer |
| Plumber photo URL (Unsplash `photo-1558618666-fcd25c85cd64`) | From current PlumbingHero.tsx |
| Color palette: `#0F172A`, `#2563EB`, `#F8FAFC`, `#EF4444`, `#FBBF24` | Extracted from Tailwind classes in source |
| Design spec: Bebas Neue display font | From Step 3 design spec |
| Design spec: DM Sans body font | From Step 3 design spec |
| Design spec: numbered ghost overlays 01–06 | From Step 4 features spec |
| Design spec: diagonal clip-path CTA section | From Step 4 CTA spec |
| Design spec: stat counter animation | From Step 4 trust/stats spec |
| Design spec: magnetic button hover | From Step 4 CTA spec |
| Design spec: staggered card reveal | From Step 3 animation spec |
| Design spec: noise texture dark sections | From Step 3 backgrounds spec |

---

## REMOVED / MODIFIED

| Element | Reason |
|---------|--------|
| `ScrollReveal` (Framer Motion) | Not available in plain HTML; replaced with Intersection Observer |
| `next/image` component | Not available in plain HTML; replaced with `<img>` |
| Framer Motion `motion.div` animations | Replaced with CSS keyframe animations + JS counters |
| Separate CSS files / Tailwind classes | Consolidated into `<style>` per spec requirement |

---

## CLIENT TO FILL

| Placeholder | Location | Notes |
|-------------|----------|-------|
| Logo text "EXPERTPLUMB" | `<header>` hdr-logo | Replace with actual business name |
| Testimonials section | Not present | No testimonials existed in original — add real customer quotes before publishing |
| Business address | Not present | Original had none; add if needed for local SEO |
| License/cert numbers | Not present | "Licensed & Insured" claim is present in original; no specific cert numbers |
| Real customer count (2,400+) | Stats bar | Confirm actual number with client |
| Years in business (12 yrs) | Stats bar | Confirm actual number with client |
| Rating source (4.9/5) | Stats bar | Confirm which platform (Google, Trustpilot, etc.) |
