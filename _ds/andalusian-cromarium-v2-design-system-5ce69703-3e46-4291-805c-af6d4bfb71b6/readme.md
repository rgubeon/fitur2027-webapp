# Andalusian Cromarium — Design System

**FITUR 2027 · Turismo de Andalucía**

Andalusian Cromarium is the color-driven visual identity for Andalucía's pavilion at **FITUR 2027** (the international tourism fair in Madrid). The concept is a play on *chroma* + *-arium*: a place made of color. Its organizing idea is **"8 provincias, 8 colores"** — Andalucía experienced as a living spectrum, with each province (Almería, Cádiz, Córdoba, Granada, Huelva, Jaén, Málaga, Sevilla) mapped to a color in a prismatic wheel.

The hero mark is a **crystalline, prismatic "A"** — a faceted glass sculpture that refracts a single beam of light into the full rainbow. That refraction motif (iridescent, holographic, spectral) runs through every surface: pale near-white canvases catch soft rainbow light; deep navy ink anchors the type; the chromatic spectrum expresses everything interactive.

## Sources provided

- **Logos** — `ANDALUSIAN-CROMARIUM.svg/.png` (all-caps display-serif wordmark), `ANDALUCIA-FITUR27.svg/.png` (official Andalucía tourism brush-script logo + "FITUR 2027" lockup). Both copied to `assets/logo/`.
- **Key visuals** — `1.jpg`, `2.jpg`, `3.jpg`: the crystal-"A" hero renders on iridescent backgrounds. Copied to `assets/imagery/`.
- **`badge.jpg`** — lanyard / accreditation badge mockups (gradient lanyards, navy card foot).
- **`Imagen 5–14.png`** — 10 finished mobile-app screens (attendee companion app + organizer/admin app). Copied to `assets/reference/` and used as ground truth for the UI kits.

No source code or Figma file was supplied; UI kits are reconstructed faithfully from the finished screen renders listed above.

---

## CONTENT FUNDAMENTALS

**Language.** Primary copy is **Spanish** (Castilian). The brand is bilingual-adjacent — the campaign name itself mixes English + Latin ("Andalusian Cromarium") while the interface speaks Spanish to attendees.

**Voice & tone.** Warm, inviting, sensory, lightly poetic — tourism-brand romance, never corporate. Copy leans on color, light and place: *"Vive el color de Andalucía"*, *"Descubre Andalucía, color a color"*, *"Un pabellón que deja huella, no residuos"*. Even utility screens keep the poetry ("Mar de luz", "Sur profundo", "Sol de poniente", "Oro andaluz" name what are really color activations).

**Person.** Speaks **to** the attendee directly and familiarly — informal *tú*, first-name greeting: *"Hola, Javier"*, *"Tienes un tramo libre"*, *"Súmate a la conversación"*. First-person plural for the collective/event ("Ya hemos conectado 1.240 minutos").

**Casing.**
- **Eyebrows / section labels** — ALL CAPS, widely tracked, small, muted navy: `CROMARIUM`, `ACCESOS RÁPIDOS`, `PARA TI HOY`, `TU IMPACTO EN LA FERIA`.
- **Screen titles & headlines** — editorial **serif**, sentence or title case: *"Explora Andalucía"*, *"Agenda"*, *"Networking"*, *"Descubre Andalucía, color a color"*.
- **The wordmark** — ALL CAPS serif, two stacked lines: `ANDALUSIAN / CROMARIUM`.
- **Body & UI** — sentence case sans.

**Numerals.** Spanish conventions — thousands with a dot (*"1.240 minutos"*), progress as fractions (*"3/6"*), stand codes (*"Stand A-12"*), 24h time (*"16:00–18:00"*), CO₂ with subscript.

**Emoji.** **None.** Meaning is carried by color, tracked-caps labels and a restrained line-icon set — never emoji.

**Vibe.** Premium, luminous, optimistic, sustainable ("Pabellón responsable"), cultural. Think a fashion-editorial serif meeting a friendly product sans, floating on light.

---

## VISUAL FOUNDATIONS

**Color.** One **deep navy ink** (`--navy-900 #0E1A4D`) for all type and mono UI; a **near-white, faintly-lilac canvas**; and the **8-stop Cromarium spectrum** (cyan → indigo → violet → fuchsia → rose/red → orange → gold) for everything expressive — province tags, progress, activation swatches, status. Color is used as *content*, not decoration. Full-saturation spectrum colors appear as small solid swatches/dots; large areas stay pale. See `tokens/colors.css`.

**The prism gradient.** The signature `--gradient-prism` (cyan→indigo→violet→fuchsia→orange sweep) is reserved for **primary emphasis only** — the main CTA on a screen (*"Solicitar reunión"*), the active progress ring, occasional selected chips. Everywhere else, navy or single spectrum colors do the work. Overuse kills it.

**Type.** High-contrast editorial **display serif** (Cormorant Garamond — *substitute*, see below) for titles and hero statements; warm humanist **grotesque sans** (Hanken Grotesk — *substitute*) for UI, labels and body. The two are always paired: serif headline, tracked-caps sans eyebrow, sans body.

**Backgrounds.** Never flat. Screens sit on a **pale iridescent wash** — a whisper of rainbow refraction (`--gradient-canvas`) over `--paper`. Hero cards frequently place the **crystal-"A" render** bleeding off the right edge behind the headline. No hand-drawn illustration, no photography-as-texture beyond the crystal renders and province photos (soft, light, slightly desaturated, warm-to-cool).

**Cards = frosted glass.** The defining surface is **glassmorphism**: translucent white (`rgba(255,255,255,0.6)`), `backdrop-filter: blur(24px)`, a hairline light border (`rgba(255,255,255,0.72)`), and a very soft cool ambient shadow (`--shadow-sm`/`--shadow-md`). Radii are large — `--radius-lg 24px` standard, `--radius-xl 30px` for hero panels. No hard 1px grey borders; edges are made of light.

**Corner radii.** Generous and consistent: 24px cards, 30px hero panels, 16px icon tiles / color swatches, fully-pill buttons, chips and tabs (`--radius-pill`).

**Shadows.** Soft, cool, navy-tinted, diffuse — never black, never tight. Elevation is subtle. A single **colored glow** (`--glow-prism`) is allowed under the prism CTA only.

**Transparency & blur.** Core to the system. Glass cards, blurred nav bars, translucent chips. Use blur on any surface that floats over the iridescent canvas so the light shows through.

**Imagery color vibe.** Cool, luminous, high-key. Crystal renders are silvery-white with rainbow refraction. Province photos are soft and airy — warm dunes (Almería), cool sea-light (Cádiz), terracotta patios (Córdoba), violet mountains (Granada).

**Borders.** Mostly absent; where present, they are hairline light (glass edge) or a faint `--line` divider inside lists. Never heavy.

**Layout rules.** Mobile-first, single column, ~24px gutters. Fixed **bottom tab bar** (blurred glass, 5 items) and a fixed top row (title + bell + menu circles). Generous vertical rhythm; sections introduced by a tracked-caps eyebrow.

**Motion.** Gentle and physical. Fades + short rises on entrance (`--ease-out`, ~220ms). **No bounce, no infinite loops** on content. The only animated flourish is light: subtle iridescent drift on hero backgrounds. Respect `prefers-reduced-motion`.

**Hover / press.** (Primarily touch, but web surfaces honor it.) Hover = a touch more fill / faint lift. **Press = gentle scale-down** (`--press-scale 0.975`) plus a slight darken on solid fills. Never harsh color flips.

---

## ICONOGRAPHY

The app uses a **single-weight, rounded line-icon set** — thin-to-medium stroke (~1.75px), rounded caps and joins, no fill. Glyphs seen: home, compass (explore), calendar, user, bell, hamburger menu, arrow-right, chevron, star / four-point sparkle (the "Cromarium" tab uses a **four-point sparkle** echoing the crystal facet), lock, leaf (sustainability), document, QR, microphone, play, broadcast/RSS, shield-check, buildings, people, bookmark, plus-in-circle.

This matches **Lucide** (and Feather) almost exactly — same stroke weight, rounded terminals, geometric construction. **No brand icon font or SVG sprite was supplied**, so this system standardizes on **Lucide** (MIT, CDN-available) as the closest match. *Substitution flagged.* The four-point "sparkle" tab glyph is Lucide `sparkle`. Icons render in navy on light, in the active spectrum color when a tab/item is selected, and occasionally reversed white inside a solid tile.

- **Icon tiles** — quick actions sit in ~52px rounded-square tiles (`--radius-tile`) with a soft spectrum-tinted glass fill and the line icon centered in navy.
- **No emoji, no unicode-glyph icons.** Status is dots + tracked-caps text, not symbols.
- **The crystal-"A"** functions as the brand's pictorial mark / app icon; the four-point sparkle is its abstracted UI form.

Usage in this system: components take an optional `icon` name resolved against Lucide (loaded via CDN in cards/kits).

---

## SUBSTITUTIONS (please confirm / replace)

1. **Display serif** — bespoke Ogg/Canela-style face → **Cormorant Garamond** (Google Fonts). Nearest free high-contrast editorial serif. Ligature swashes in the real wordmark are not reproduced.
2. **UI sans** — friendly humanist grotesque → **Hanken Grotesk** (Google Fonts).
3. **Icons** — no supplied set → **Lucide** (CDN).

If you can share the licensed font binaries and any real icon assets, drop them in and I'll rewire `tokens/fonts.css` + the icon references.

---

## INDEX / MANIFEST

Root
- `styles.css` — global entry (import this).
- `readme.md` — this guide.
- `SKILL.md` — portable Agent Skill wrapper.

`tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`.

`assets/` — `logo/` (wordmarks), `imagery/` (crystal renders, badges), `reference/` (source app screens, ground truth for kits).

`components/core/` — reusable primitives (see cards):
`Icon`, `Button`, `IconButton`, `Chip`, `GlassCard`, `Badge`, `StatusPill`, `ColorDot`, `SpectrumTrack`, `ProgressRing`, `IconTile`, `ListRow`, `Input`, `SectionLabel`, `TabBar`, `Avatar`.

`guidelines/` — foundation specimen cards (Type, Colors, Spacing, Brand).

`ui_kits/`
- `companion-app/` — attendee mobile app (Home, Explora, Cromarium, Agenda, Networking).
- `organizer-app/` — organizer/admin app (Roles y permisos, Zona bar).

See the **Design System** tab for the rendered card gallery.
