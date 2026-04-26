# Haustechnik Basel — Website

## Overview
Marketing site for a local Sanitär & Badsanierung company in Basel, Switzerland. Primary goal: lead generation via Google Ads. The `/badsanierung` page is the main landing page for ad traffic.

**Stack:** Astro 6 (static), TypeScript, scoped CSS per component. No UI frameworks.

```
npm run dev      # dev server (localhost:4321)
npm run build    # production build → dist/
npm run preview  # preview build locally
```

**Deployed:** Cloudflare Pages — `https://www.haustechnikbasel.ch`
Apex `haustechnikbasel.ch` → redirect to `www` via Cloudflare Redirect Rule.

---

## File structure
```
src/
  layouts/
    Layout.astro          # HTML shell: fonts, canonical, GTM + Consent Mode v2, CookieBanner
    LegalLayout.astro     # legal pages: back nav + footer, noindex meta
  pages/
    index.astro           # home page — composed from index components
    badsanierung.astro    # Google Ads landing page — primary conversion page
    impressum.astro
    datenschutz.astro
  components/
    Nav.astro             # sticky white header, mobile hamburger, activePage prop
    Hero.astro            # index hero: two-col grid, floating stat card
    TrustStrip.astro      # 5 trust items, white bg strip
    Services.astro        # 3 service cards (featured Badsanierung, Sanitär, Heizung)
    ProcessMini.astro     # 4-step mini process (index page)
    ReferenzenTeaser.astro # 3 reference cards teaser (index page)
    About.astro           # about section with region chips
    BadumbauHero.astro    # badsanierung hero: left text+stats, right sticky form
    ImageStrip.astro      # 3 image placeholders strip (badsanierung page)
    Features.astro        # 6-feature 3-col grid (badsanierung page)
    Process.astro         # 5-step animated process with progress bar (badsanierung page)
    Qualifier.astro       # yes/no qualifier cards (badsanierung page)
    Projects.astro        # 3 project cards + testimonial (badsanierung page)
    Guarantee.astro       # dark guarantee section (badsanierung page)
    Faq.astro             # accordion FAQ (badsanierung page)
    FinalCta.astro        # final CTA with quick form (badsanierung page)
    CookieBanner.astro    # fixed bottom bar, localStorage consent, gtag update
    Footer.astro          # 4-col dark footer
  styles/
    global.css            # reset, design tokens, shared utilities (.btn, .input, .reveal, etc.)
functions/
  contact.ts              # Cloudflare Pages Function — POST /contact → Resend API
public/
  favicon.svg             # H icon on blue bg (100×100)
  favicon.ico             # ico fallback
  logo-mark.svg           # same as favicon.svg
  logo.svg                # mark + "Haustechnik Basel" wordmark
  robots.txt              # Allow all, Sitemap pointer
```

---

## Design tokens
```css
--blue:       #1e3a8a   /* primary accent — CTAs, highlights */
--blue-hover: #182d70   /* hover state for blue buttons */
--blue-bg:    rgba(30,58,138,0.08)  /* soft bg for tags, icons */
--ink:        #0a0e1a   /* near-black — primary text */
--ink-2:      #4a5168   /* secondary text, descriptions */
--ink-3:      #8a90a0   /* placeholder, mono labels */
--bg:         #f4f5f7   /* page background, light gray */
--bg-white:   #ffffff   /* cards, header, forms */
--line:       #d8dce4   /* borders, dividers */
--radius:     6px
--font:       'Inter'
--mono:       'JetBrains Mono'
```

Max content width: 1440px (set per-component via `max-width: 1440px; margin: 0 auto;`)
Section padding: `96px 48px` → `72px 20px` on mobile ≤600px

---

## Astro conventions

- **`global.css` lives in `Layout.astro`**, not in page files. Contains reset, tokens, and shared utilities (`.btn`, `.input`, `.section-label`, `.img-ph`, `.tag`, `.reveal`).
- **`LegalLayout.astro` wraps `Layout.astro`** — never give it its own `<html>` shell.
- **TypeScript global declarations live in `src/env.d.ts`**. Extend `Window` there for any third-party globals (`dataLayer`, `gtag`). No `(window as any)`, no `@ts-ignore`.
- **Run `npm run build` after any layout, CSS, or config change** before declaring the task done.

---

## Nav component
Pass `activePage` prop: `'home' | 'badsanierung' | 'legal'`.

- `home`: shows Startseite, Leistungen, Über uns, Badsanierung (blue+bold), Phone
- `badsanierung`: shows Startseite, Leistungen, Ablauf, Projekte, FAQ, Phone
- `legal`: same as `home` but with `/#` prefix for section links

The "Badsanierung" link always renders in blue+bold on the home nav (`.nav-cta-link` class).

---

## Form backend (`functions/contact.ts`)
Cloudflare Pages Function. POST to `/contact`.

Spam protection: honeypot `_hp` field only (no Turnstile).
Required fields: `name`, `tel`, `email`. Optional: `plz`, `timing`, `message`.
On success: client pushes `{ event: 'form_submit_success' }` to `dataLayer` for GTM.

**Env vars** (Cloudflare Pages → Settings → Environment variables):
| Variable | Scope | Value |
|---|---|---|
| `PUBLIC_GTM_ID` | Build | `GTM-XXXXXXX` |
| `RESEND_API_KEY` | Runtime | `re_...` from resend.com |
| `CONTACT_TO` | Runtime | `info@haustechnikbasel.ch` |
| `CONTACT_FROM` | Runtime | `forms@haustechnikbasel.ch` (verified Resend domain) |

Local dev: `.env` for build vars, `.dev.vars` for runtime vars (both gitignored).

---

## Scroll reveal
`.reveal` → fade in + slide up 28px, IntersectionObserver threshold 0.1, wired in `Layout.astro`.
Stagger: `data-delay="100|150|200|300"` (ms).

---

## Tracking (GTM + GA4 + Consent Mode v2)

### Consent defaults (Layout.astro, runs before GTM)
- EEA + UK + CH: all denied, `wait_for_update: 500`
- All other regions: all granted

### GTM tags to configure
1. **GA4 Configuration** — trigger: Consent Initialization - All Pages
2. **GA4 Event: generate_lead** — trigger: Custom Event `form_submit_success`
3. **Google Ads Conversion** — trigger: Custom Event `form_submit_success`

### CookieBanner
Key: `htb_consent` in localStorage. On load: if `granted` → call `gtag consent update`; if no value → show banner.

---

## Sitemap
- `/sitemap-index.xml` — auto-generated by `@astrojs/sitemap` (covers `/`, `/badsanierung`, `/impressum`, `/datenschutz`)
- `/robots.txt` — Allow all, sitemap pointer

---

## Business details (placeholders — replace before launch)
- **Company name:** Haustechnik Basel GmbH (confirm legal name)
- **Address:** Musterstrasse 1, 4051 Basel (replace with real address)
- **Phone:** 061 200 00 00 (replace throughout — Nav, BadumbauHero, FinalCta, Footer, Faq section)
- **Email:** info@haustechnikbasel.ch
- **Handelsregister:** CH-… (placeholder)
- **MwSt-Nr.:** CHE-… (placeholder)

---

## TODO
1. **Real phone number** — replace `061 200 00 00` / `+41612000000` in Nav, BadumbauHero, FinalCta, Footer
2. **Real address** — replace `Musterstrasse 1, 4051 Basel` in Footer, Impressum
3. **Legal details** — fill Handelsregister + MwSt-Nr. in Footer, Impressum
4. **Real project photos** — replace gradient image placeholders in Projects, ReferenzenTeaser, ImageStrip, Hero, About
5. **Resend domain** — verify `forms@haustechnikbasel.ch` sending domain in Resend dashboard
6. **Google Ads conversion tag** — in GTM: create GA4 Event + Google Ads Conversion tag triggered by `form_submit_success`
7. **Google Ads SEO** — verify `<title>` and `<meta description>` on `/badsanierung` contain keyword "Badsanierung Basel"
8. **Google rating** — update rating in Projects.astro and TrustStrip.astro once real reviews exist
