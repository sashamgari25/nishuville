# Nishuville React Migration (Milestone 07)

This `react-app/` directory is the new React/Vite implementation of the original Nishuville **homepage**. The original vanilla HTML/CSS/JavaScript website remains unchanged in the repository root.

## Start locally

```bash
cd react-app
npm install
npm run dev
```

Other commands: `npm run build`, `npm run lint`, `npm run test`.

## Architecture

- `src/App.jsx`: site composition; featured project selection and top-five ranked albums.
- `src/components/`: header, hero, reusable cards, footer, icon and sound toggle; CSS split by component.
- `src/data/`: existing two projects and five seeded albums, stored locally (no runtime MusicBrainz calls).
- `src/utils/ratings.js`: 60% track average / 40% holistic rating; unrated albums remain `null`.
- `src/hooks/useInterfaceSounds.js`: original Web Audio click, `nishuville-sound` preference and hover sound event delegation.
- `src/styles/global.css`: original palette, typography and shared spacing.
- `public/assets/`: copies of the existing logo, screenshots and album artwork.

## Scope and remaining work

- Homepage functionality and appearance migrated, but **not yet signed off by manual browser comparison**.
- `projects.html`, `listening-room.html`, `blog.html`, `about.html` and `contact.html` in the original repo were empty. Those pages and routes remain Milestone 08 work. Links pointing to them are retained for parity but are not operational React routes yet.
- `mailto:YOUR_EMAIL` is a placeholder inherited from the original site. Set it before publishing.
- MusicBrainz/Cover Art Archive code stays as an offline/owner-import prototype in the original `js/musicbrainz.js`, not in public runtime.
- Do not commit `node_modules/` or generated `dist/` files. Work on the existing migration branch; don't overwrite the original site.

## Manual parity checks

1. Desktop and mobile navigation styles, mobile `<details>` menu and original logo.
2. Hero, two project cards with correct screenshots/links, five album covers and hover ratings.
3. Tab through album covers to show the same overlay and keep the floating sound toggle after the footer in focus order.
4. Sound starts enabled on a first visit after a gesture, plays on `.sound-nav` hover, toggle on/off persists after refresh; mobile toggle size and footer credit spacing.
5. Check at 1200px+, 900px and 600px screen widths; verify reduced-motion preference.
