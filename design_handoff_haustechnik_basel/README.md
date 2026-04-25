# Handoff: Haustechnik Basel — Website (index + /badumbau)

## Overview

Zwei HTML-Designseiten für die Website **haustechnikbasel.ch** einer lokalen Sanitär- und Badumbaufirma in Basel, Schweiz. Das Ziel ist Lead-Generierung über Google Ads — die `/badumbau`-Seite ist die primäre Performance-Landingpage, auf die Ads-Traffic geleitet wird.

Die Seiten sind:
- **`index.html`** — Hauptseite (Vertrauen aufbauen, Besucher Richtung Badumbau leiten)
- **`badumbau.html`** — Performance-Landingpage (maximale Lead-Konversion, für Google Ads)

## About the Design Files

Die Dateien in diesem Paket sind **High-Fidelity Designreferenzen in HTML/CSS/JS** — sie zeigen das beabsichtigte Aussehen und Verhalten der Website. Sie sind **nicht** direkt als Produktionscode gedacht.

Die Aufgabe: Diese Designs in einem realen Website-Stack neu implementieren. Empfehlung für diese Art von Projekt (lokaler Dienstleister, SEO-relevant, kein SPA nötig):

- **Empfohlener Stack**: Next.js (App Router) mit Tailwind CSS — oder plain HTML/CSS mit einem Static-Site-Generator wie Astro
- Formularanbindung: z. B. Formspree, Netlify Forms oder eigener API-Endpoint
- Analytics: Google Tag Manager + Google Ads Conversion Tracking auf Formular-Submit

---

## Fidelity

**High-Fidelity.** Die Designs sind pixelgenau mit finalen Farben, Typografie, Abständen und Interaktionen. Der Entwickler soll die UI so präzise wie möglich nachbauen, mit dem Codebase-eigenen Stack und etablierten Mustern.

---

## Design Tokens

### Farben
```
--blue:       #1e3a8a   (Primärakzent, CTAs, Links, Highlights)
--blue-hover: #182d70   (Hover-State für blaue Buttons)
--blue-bg:    rgba(30,58,138,0.08)  (Soft-Hintergrund für Tags, Icons)
--ink:        #0a0e1a   (Primäre Textfarbe, fast Schwarz)
--ink-2:      #4a5168   (Sekundärer Text, Beschreibungen)
--ink-3:      #8a90a0   (Placeholder, Mono-Labels, deaktiviert)
--bg:         #f4f5f7   (Seitenhintergrund, helles Grau)
--bg-white:   #ffffff   (Karten, Header, Formulare)
--line:       #d8dce4   (Borders, Divider)
```

### Typografie
```
Primär:  Inter (400, 500, 600, 700)
Mono:    JetBrains Mono (400, 500) — für Labels, Tags, Metadaten
```

Google Fonts Import:
```
https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap
```

### Typografische Skala
```
Hero Title:        72px / 700 / -0.03em letter-spacing / line-height 1.02
Section Title:     48px / 600 / -0.025em
Sub-Section Title: 44px / 600 / -0.025em
Card Title:        22–26px / 600 / -0.01em
Body Large:        20px / 400 / line-height 1.55
Body:              16px / 400 / line-height 1.6
Body Small:        14–15px / 400 / line-height 1.55
Mono Label:        11px / 400–500 / 0.10em letter-spacing / uppercase
Form Label:        12px / 500 / var(--ink-2)
```

### Abstände
```
Section padding:   96px 48px (oben/unten, links/rechts)
Card padding:      28–32px
Grid gap (cards):  24px
Grid gap (large):  64–96px
Form row gap:      14px
```

### Border Radius
```
--radius: 6px   (Cards, Buttons, Inputs, Tags)
Badges:   999px (Pills)
Icons:    50%   (Kreise)
```

### Schatten
```
Sticky Form Card:  0 8px 32px -8px rgba(10,14,26,0.15)
Aktiver Step:      0 20px 60px -20px rgba(30,58,138,0.4)
Floating Stat:     0 8px 32px -8px rgba(10,14,26,0.15)
```

---

## Screens / Views

---

### Screen 1: index.html — Hauptseite

**Zweck:** Vertrauen aufbauen, den Besucher als seriösen Betrieb bestätigen, dann schnell Richtung `/badumbau` leiten.

#### Header (Sticky, z-index: 100)
- Background: `#ffffff`, Border-bottom: `1px solid var(--line)`
- Padding: `14px 48px`
- Layout: `flex, justify-content: space-between, align-items: center`
- **Logo links:**
  - Icon: 26×26px, background `var(--blue)`, border-radius 4px, SVG-Icon innen (weiss, "H"-Form aus Pfaden)
  - Firmenname: 14px / 600 / `-0.01em`
  - Subtext: JetBrains Mono / 10px / `var(--ink-3)` / Text: `SANITÄR · BADUMBAU`
- **Nav rechts:**
  - Links: 14px / color `var(--ink-2)`, hover → `var(--blue)`
  - Aktiver Link "Badumbau": color `var(--blue)`, fontWeight 500
  - Telefon-Button: Ghost-Style (weiss, Border `var(--line)`, padding `9px 16px`, 13px)

#### Hero
- Padding: `80px 48px 96px`
- Grid: `1fr 1fr`, gap `96px`, align-items `center`
- **Links:**
  - Eyebrow: JetBrains Mono / 11px / `var(--blue)` / uppercase / letter-spacing 0.12em
  - H1: 72px / 700 / -0.03em / line-height 1.02. „Haustechnik & Sanitär in Basel —" dann `<span color var(--blue)>`Badumbau`</span>` auf neuer Zeile
  - Subtext: 20px / color `var(--ink-2)` / line-height 1.55 / max-width 540px
  - CTAs: Primär (blau) + Ghost nebeneinander, gap 12px
- **Rechts:**
  - Bild-Placeholder: aspect-ratio 4/5, height 560px, Gradient `#c8cdd6 → #a8b0c0 → #6b7387`
  - Floating Stat Card: `position: absolute, bottom: 32px, left: -32px`
    - Background: white, border 1px line, border-radius 6px, padding 20px 24px
    - Shadow: `0 8px 32px -8px rgba(10,14,26,0.15)`
    - Inhalt: Mono-Label "SEIT 2008 IN BASEL", Zahl "340+" (32px/700/var(--blue)), Label "Bäder umgebaut"

#### Trust Strip
- Background: white, border-top + border-bottom: `1px solid var(--line)`
- Padding: `32px 48px`
- Grid: `repeat(5, 1fr)`, gap 24px
- Jeder Trust-Eintrag: `display: flex, gap: 14px, align-items: flex-start`
  - Icon Box: 40×40px / background `var(--blue-bg)` / border-radius 8px / Icon SVG in `var(--blue)`
  - Label: 14px / 600 / `-0.01em`
  - Subtext: 12px / `var(--ink-2)` / line-height 1.4
- Inhalte:
  1. Lokaler Fachbetrieb / In Basel und Umgebung verwurzelt
  2. Persönlicher Kontakt / Von Planung bis Fertigstellung
  3. Transparente Offerten / Keine versteckten Kosten
  4. Flexible Termine / Nach Ihren Arbeitszeiten möglich
  5. 4.9 / 5 Bewertung / 47 Google-Rezensionen

#### Leistungen (3 Kacheln)
- Padding: `96px 48px`
- Grid: `repeat(3, 1fr)`, gap 24px
- **Kachel 1 — Badumbau (Featured):**
  - Background: `var(--blue)`, border: `1px solid var(--blue)`, border-radius 6px, padding 32px
  - Badge: „Kernkompetenz" — `rgba(255,255,255,0.15)` background, weiß
  - Title: "Badsanierung & Badumbau" / 26px / 600
  - Desc: 15px / `rgba(255,255,255,0.8)` / line-height 1.6
  - Link: weiß / border-bottom `rgba(255,255,255,0.3)` / → `/badumbau`
  - Hover auf Kachel: `border-color: var(--blue)`, box-shadow `0 4px 20px -8px rgba(30,58,138,0.2)`
- **Kachel 2 — Sanitär:**
  - Standard Card (weiss, border `var(--line)`)
  - Badge: „02 — Sanitär" in `var(--bg)` / `var(--ink-2)` / 11px
  - Footer-Note: JetBrains Mono 13px / uppercase / "Keine eigene Seite — direkt anfragen"
- **Kachel 3 — Heizung (coming soon):**
  - Wie Kachel 2 aber `opacity: 0.7`
  - Dot-Indicator: 8px Kreis `var(--ink-3)` + Text "Demnächst verfügbar"

#### Prozess-Mini (4 Schritte)
- Background: white, border-top + border-bottom: 1px solid var(--line)
- Padding: `96px 48px`
- Grid: `repeat(4, 1fr)`, gap 0, border 1px solid var(--line), border-radius 6px, overflow hidden
- Jedes Item: padding 28px, border-right `1px solid var(--line)` (letztes keins)
  - Num: JetBrains Mono / 11px / `var(--ink-3)`
  - Title: 20px / 600 / `-0.01em`
  - Desc: 14px / `var(--ink-2)` / line-height 1.55
  - Connector: `position: absolute, right: -10px, top: 50%` — 20px Kreis mit Pfeil-SVG
- CTA rechts oben: Ghost Button „Ausführliche Version →" → `/badumbau#prozess`

#### Referenzen Teaser
- Background: white, border-top + border-bottom: 1px solid var(--line)
- Padding: `96px 48px`
- Grid: `repeat(3, 1fr)`, gap 24px
- Jede Karte: border 1px var(--line), border-radius 6px, overflow hidden
  - Bild-PH: aspect-ratio 4/3
  - Meta: padding 18px 20px
  - Tag: JetBrains Mono / 11px / `var(--ink-3)`
  - Title: 17px / 600
- CTA unten rechts: Primär-Button → `/badumbau#projekte`

#### Über uns
- Padding: `96px 48px`
- Grid: `1fr 1.6fr`, gap 80px, align-items center
- Links: Bild-PH, height 480px, Gradient leicht abweichend
- Rechts:
  - Section Label → H2 (48px)
  - Subtext: 18px / `var(--ink-2)` / line-height 1.6 / margin 24px 0 36px
  - Punkte-Grid: `repeat(2, 1fr)`, gap 16px
    - Jeder Punkt: `flex, gap 12px`, Check-Circle 20×20px `var(--blue-bg)` / „✓" in `var(--blue)` / Text 14px
  - Regionen: flex-wrap, gap 8px
    - Chips: `padding 6px 12px` / border `1px var(--line)` / border-radius 999px / 12px / 500 / `var(--ink-2)`
  - CTA: Primär-Button → `/badumbau`

#### Footer
- Background: `var(--ink)`, padding: `56px 48px 32px`
- Grid: `2fr 1fr 1fr 1fr`, gap 48px
- Col-Titles: JetBrains Mono / 11px / `rgba(255,255,255,0.4)` / uppercase / letter-spacing 0.1em
- Text: 13px / `rgba(255,255,255,0.6)` / line-height 1.85
- Divider: `1px solid rgba(255,255,255,0.1)`
- Footer-Bottom: 12px / flex space-between

---

### Screen 2: badumbau.html — Performance Landingpage

**Zweck:** Google-Ads-Traffic konvertieren. Leads generieren. Alles andere ist sekundär.

**Wichtig für Google Ads:** `<title>`, `<meta description>` und H1 enthalten Keyword "Badezimmer renovieren Basel".

#### Header
Identisch mit index.html, aber Nav-Link "Badumbau" ist aktiv.

#### Hero
- Padding: `64px 48px 80px`
- Tag: „Basel · Riehen · Allschwil · Binningen · Münchenstein" (blauer Pill oben)
- Grid: `1.4fr 1fr`, gap 64px
- **Links:**
  - H1: 72px / 700 / -0.03em. Zeile 3: `<span color var(--blue)>aus einer Hand.</span>`
  - Subtext: 20px / `var(--ink-2)` / max-width 540px
  - CTAs: „Erstberatung anfragen" (primär) + „061 200 00 00" (ghost mit Tel-Icon)
  - Stat-Row: `repeat(4, 1fr)`, gap 24px, margin-top 64px, padding-top 32px, border-top 1px var(--line)
    - Stat-Value: 32px / 700 / `var(--blue)` / line-height 1
    - Werte: 17+ / 340+ / 7 Tage / 24 h
    - Labels: 13px / `var(--ink-2)`
- **Rechts — Lead-Formular (STICKY):**
  - `position: sticky, top: 76px`
  - Card: white, border 1px var(--line), border-radius 6px, padding 28px
  - Header: Tag „Kostenlos" links + Mono-Label „FORM-01" rechts
  - Title: 22px / 600 / `-0.01em`
  - Subtext: 13px / `var(--ink-2)` / line-height 1.55
  - **Felder:**
    - Name (volle Breite)
    - Telefon + PLZ/Ort (2-spaltig, gap 12px)
    - E-Mail (volle Breite)
    - Wann geplant? (Select: 0–3 Mt / 3–6 Mt / 6–12 Mt / Noch unklar)
    - Beschreibung optional (Textarea, rows=2)
  - Submit-Button: primär, volle Breite, centered
  - Datenschutz-Note: 11px / `var(--ink-3)` / line-height 1.5
  - **Success State:** Formular ausblenden, Erfolgsmeldung mit ✓ anzeigen
  - **Input-Styles:** background white / border `1px var(--line)` / padding `12px 14px` / border-radius 6px / focus: border `var(--blue)` + box-shadow `0 0 0 3px rgba(30,58,138,0.12)`

#### Bild-Strip
- Padding: `0 48px 80px`
- Grid: `2fr 1fr 1fr`, gap 12px
- Bild-Placeholder Gradienten:
  - Gross: `#c8cdd6 → #a8b0c0 → #6b7387`
  - Mitte: `#b8c0cc → #8f9aaa → #5e697a`
  - Klein: leicht anders

#### Leistungen (6er-Grid)
- Background: white, border-top + border-bottom: 1px solid var(--line)
- `repeat(3, 1fr)`, border 1px var(--line), border-radius 6px, overflow: hidden
- Jede Zelle: padding 28px, border-right + border-bottom `1px var(--line)` (Rand-Zellen ohne)
- Num: JetBrains Mono / 11px / `var(--ink-3)`
- Title: 18px / 600 / `-0.01em`
- Desc: 14px / `var(--ink-2)` / line-height 1.55

#### Prozess (5 Schritte) — Animiert
- Progress Bar: `height: 4px` / background `var(--line)` / border-radius 2px
  - Fill: background `var(--blue)`, width animiert per JS (20%, 40%, 60%, 80%, 100%)
  - Dots: 5× 20px Kreise, `done`-State: `background + border: var(--blue)`
- Step-Cards: `repeat(5, 1fr)`, gap 16px, margin-top 56px
  - Default: white / border `1px var(--line)` / padding 24px
  - Active: background `var(--blue)` / border `var(--blue)` / color white / `translateY(-4px)` / box-shadow `0 20px 60px -20px rgba(30,58,138,0.4)`
  - Transition: `all 0.4s ease`
  - Interval: alle 2200ms wechselt der aktive Step (Klick auf Step pausiert den Auto-Timer)

#### Qualifier (2 Spalten)
- Grid: `1fr 1fr`, gap 24px
- Geeignet-Card: white, border 1px var(--line)
  - Header-Icon: `var(--blue-bg)` / ✓ in `var(--blue)`
  - Label: „Geeignet, wenn" / `var(--blue)` / 13px / 600 / uppercase
  - Items: `flex, gap 14px` / padding 14px 0 / border-bottom 1px var(--line)
- Nicht geeignet-Card: `var(--bg)`, border 1px var(--line)
  - Icon: `var(--line)` background / ✕ in `var(--ink-3)`
  - Label + Text in `var(--ink-2)` / `var(--ink-3)`

#### Projekte (3 Karten)
- Grid: `repeat(3, 1fr)`, gap 24px
- Karte: border-radius 6px, overflow hidden
  - Bild: aspect-ratio 4/3, Gradient (leicht unterschiedlich je Karte)
  - Meta: padding 20px 22px / white / border 1px var(--line) / border-top none
  - Tag: JetBrains Mono / 11px / uppercase / `var(--ink-3)`
  - Title: 18px / 600
  - Desc: 14px / `var(--ink-2)`
- Testimonial-Box: background `var(--blue)` / padding 40px / border-radius 6px / margin-top 48px
  - Grid: `2fr 1fr`, gap 48px
  - Quote: 22px / 500 / line-height 1.45
  - Autor: JetBrains Mono / 12px / opacity 0.7
  - Rating: 56px / 700 / rechts / „4.9/5"

#### Garantie
- Background: `var(--ink)`, color white
- Grid: `1fr 1.4fr`, gap 64px
- Titel: 44px / 600 / `-0.025em`
- 2 Garantie-Karten: `repeat(2, 1fr)`, border `1px rgba(255,255,255,0.15)`, border-radius 6px, padding 28px
  - Num: JetBrains Mono / 11px / opacity 0.5
  - Text: 16px / 500 / line-height 1.55

#### FAQ (Akkordeon)
- Background: white
- Grid: `1fr 2fr`, gap 64px
- Linke Spalte: Label + H2 (44px) + Erklärungs-Subtext
- Rechte Spalte: Akkordeon-Items
  - Button: volle Breite / padding 22px 0 / 18px / 500 / flex space-between
  - Icon: 24px Kreis
    - Geschlossen: background `var(--bg)` / color `var(--ink)` / „+"
    - Offen: background `var(--blue)` / color white / „+" rotiert 45°
  - Content: `max-height: 0 → 220px` / `opacity: 0 → 1` / transition 0.35s ease
  - 15px / `var(--ink-2)` / line-height 1.65

#### Final CTA
- Card: white, border 1px var(--line), border-radius 6px, padding 48px
- Grid: `1.2fr 1fr`, gap 56px
- Links: Label + H2 (44px) + Subtext + Telefonnummer (36px / 700 / `var(--blue)`) + Öffnungszeiten
- Rechts: Schnell-Anfrage Formular (Name, Telefon, E-Mail, PLZ) + Submit

---

## Interactions & Behavior

### Navigation
- `index.html` ↔ `badumbau.html` verlinkt
- Alle `href="#section"` → smooth scroll (`scroll-behavior: smooth`)
- Header sticky

### FAQ Akkordeon
- Nur ein FAQ-Item gleichzeitig offen
- Klick auf offenes Item: schliesst es
- Klick auf geschlossenes Item: öffnet es, schliesst alle anderen
- Animation: `max-height` + `opacity` transition

### Prozess-Animation (badumbau.html)
- 5 Schritte, auto-advance alle 2200ms
- Klick auf Step: pausiert auto-timer, aktiviert diesen Step
- Active Step: blaue Card, `translateY(-4px)`, blauer Progress-Fill
- Progress-Bar Dots: alle `<= activeStep` sind blau

### Formular
- HTML5 Validierung (`required`, `type="email"`, `type="tel"`)
- Submit: verhindert default, zeigt Success-Message, versteckt Form
- Success-State: ✓ Symbol + Bestätigungstext
- Für Produktion: Backend-Endpoint oder Formularservice (Formspree, Netlify Forms, etc.)

### Hover States
- Buttons: `background: var(--blue-hover)` / `transform: translateY(1px)` bei active
- Ghost Buttons: `border-color: var(--ink)`
- Service-Kachel: `border-color: var(--blue)` + leichter Box-Shadow
- Nav-Links: `color: var(--blue)`
- FAQ-Button: `color: var(--blue)`

---

## Assets

Alle Bilder sind aktuell **Gradient-Platzhalter** (CSS-only). Für die Produktion werden benötigt:

| Placeholder | Inhalt | Empfohlene Grösse |
|---|---|---|
| Hero Foto | Inhaber oder Team (index.html) | 800×1000px |
| Hero Foto | Projektbild (badumbau.html) | 1400×900px |
| REF-248 | Badumbau Riehen | 800×600px |
| REF-251 | Badumbau Allschwil | 800×600px |
| REF-253 | Badumbau Basel-Stadt | 800×600px |

Alle Projektbilder als Placeholder mit Text-Tag (`position: absolute, bottom: 12px, left: 12px`, Mono-Font, dunkler Semi-transparent-Hintergrund).

---

## State Management

### Benötigte State-Variablen
```
// badumbau.html
activeStep: number (0–4)          — animierter aktiver Prozessschritt
stepInterval: IntervalID          — wird bei manuellem Klick gecleard
openFaqIndex: number | null       — welches FAQ-Item offen ist
formSubmitted: boolean            — primäres Hero-Formular abgeschickt
formSubmitted2: boolean           — finales CTA-Formular abgeschickt

// index.html
(kein dynamischer State — rein statisches HTML/CSS)
```

---

## Files in This Package

```
design_handoff_haustechnik_basel/
├── README.md              ← Diese Datei (vollständige Spec)
├── index.html             ← Hauptseite Design-Referenz
└── badumbau.html          ← Performance Landingpage Design-Referenz
```

---

## Implementation Notes für Claude Code

1. **SEO First:** `badumbau.html` bekommt Conversion Tracking via Google Tag Manager. `<head>` entsprechend vorbereiten.
2. **Formular-Endpoint:** Muss noch definiert werden — entweder API-Route (Next.js) oder externer Service. Vorschlag: Formspree für schnellen Start.
3. **Google Ads:** Alle Ads-Kampagnen direkt auf `/badumbau` schicken, nicht auf die Startseite.
4. **Telefonnummer:** Im gesamten Code als `+41612000000` hinterlegt — mit echter Nummer ersetzen.
5. **Adresse:** `Musterstrasse 1, 4051 Basel` — mit echter Adresse ersetzen.
6. **Bilder:** Echte Projektfotos (Vorher/Nachher) drastisch erhöhen die Konversionsrate. Platzhalter baldmöglichst ersetzen.
7. **Handelsregister / MwSt-Nr.:** Platzhalter `CH-…` / `CHE-…` mit echten Nummern ersetzen.
8. **Performance:** Inter + JetBrains Mono von Google Fonts — `display=swap` bereits gesetzt. `preconnect` Tags im `<head>` nicht vergessen.
