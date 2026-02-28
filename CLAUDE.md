# CLAUDE.md - ihathaway_com

Owen Hathaway's personal website. Built with Nuxt 4, deployed to Cloudflare Pages.

## Stack

- **Framework:** Nuxt 4 (SSR disabled — SPA/static output)
- **Content:** @nuxt/content v3 — markdown-driven pages
- **Styling:** Bootstrap 5 + custom CSS (`app/assets/styles/global.css`)
- **Icons:** FontAwesome (solid, regular, brands)
- **Fonts:** Hypatia Sans Pro, Optima, Trajan Pro (custom, self-hosted)
- **Deployment:** Cloudflare Pages (`wrangler.json`, output dir: `dist`)
- **Database:** Cloudflare D1 (`ihathaway-content`, binding: `DB`)
- **Linting:** ESLint + Prettier

## Key Commands

```bash
npm install       # install deps
npm run dev       # dev server at http://localhost:3000
npm run generate  # static build → dist/
npm run build     # SSR build (not used for deployment)
npm run preview   # preview production build
npm run lint      # lint .ts and .vue files
npm run deploy    # push dist/ to gh-pages branch (legacy?)
```

> Deployment is Cloudflare Pages, not GitHub Pages. The `deploy` script may be stale.

## Project Structure

```
app/
  app.vue                  # root app component
  pages/
    index.vue              # home page
    blog/index.vue         # blog listing
    blog/[...slug].vue     # individual blog posts
    cv/index.vue           # CV page
    resume/index.vue       # resume page
  components/
    The*.vue               # home page section components
    ContactInfo.vue
    blog/                  # blog layout components
    cv/                    # CV layout components
    resume/                # resume layout components
    header/                # header components (Name, Contact)
    content/InfoBox.vue    # custom MDC component for content
  assets/
    styles/global.css
    fonts/                 # self-hosted fonts
    images/
  plugins/
    bootstrap.client.js    # Bootstrap JS (client-only)
    fontawesome.js         # FontAwesome plugin
  utils/
    useNumbers.js
    usePost.jsx

content/
  front_page.md            # home page content
  blog/                    # blog posts (markdown)
  cv/
    capabilities/          # CV capability pages
    projects/              # CV project pages

content.config.ts          # @nuxt/content collection schemas
nuxt.config.js             # Nuxt config
wrangler.json              # Cloudflare Pages / D1 config
```

## Content Collections

Defined in `content.config.ts` with Zod schemas:

- **blog** — `content/blog/**` — posts with optional `img` and `tags`
- **cvCapabilities** — `content/cv/capabilities/**`
- **cvProjects** — `content/cv/projects/**`

`content/front_page.md` is used directly (not part of a named collection).

## Nuxt Config Notes

- `ssr: false` — renders as SPA/static
- `nitro.preset: 'cloudflare-pages'` — Cloudflare Pages output
- `css: ['~/assets/styles/global.css']` — global stylesheet
- FontAwesome packages transpiled in `build.transpile`

## Cloudflare / Deployment

- Deployed via Cloudflare Pages
- D1 database binding: `DB` → `ihathaway-content` (id: `d5bf33da-568e-40b5-9f68-f2b3595f4d95`)
- Env var: `LAWMATICS_URL` (used for contact/legal integrations)
- Node version: 20.18

## Conventions

- Vue SFCs (`.vue`) for all components and pages
- Components named with PascalCase; home-section components prefixed `The`
- Content written in Markdown with frontmatter (`title`, `img`, `tags`)
- Custom MDC component: `<InfoBox>` available in content files
- No TypeScript strict mode — mix of `.ts`, `.vue`, and `.jsx` utils
