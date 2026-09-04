# Anna Spiechowicz

Bilingual portfolio for Anna Spiechowicz, Product Owner and Business Analyst.

Static site built with Astro. No client framework, no CSS framework: one self-hosted
type family (IBM Plex Sans and IBM Plex Mono) and one hand-written stylesheet.

## Development

```sh
npm install
npm run dev
```

The production build is static and is deployed by Vercel:

```sh
npm run build    # astro check + astro build -> dist/
npm run preview
```

English is served at `/` and German at `/de/`.

## Where things live

| Path | Purpose |
| --- | --- |
| `src/data/site.ts` | All copy, in English and German. One file, typed. |
| `src/styles/global.css` | Design tokens at the top (colour, type scale, spacing), then components. |
| `src/styles/fonts.css` | Self-hosted IBM Plex Sans Variable and IBM Plex Mono faces. |
| `src/components/` | Page shell, header, footer and `DecisionBoard.astro` — the animated hero diagram. |
| `src/pages/` | `/`, `/de/`, `/impressum/`, `/datenschutz/`, `404`. |
| `public/og-image.svg` | Source of the social share image; fonts are embedded so it rasterises exactly. |
| `public/anna-spiechowicz-cv-*.pdf` | One CV per language; `cvUrls` in `site.ts` picks by locale. |
| `vercel.json` | Trailing-slash behaviour, asset caching and security headers. |
| `netlify.toml` | Only for the Netlify integration still attached to the repo; keep it in step with `vercel.json`. |

To restyle the site, change the custom properties in the `:root` block at the top of
`global.css`. Everything else reads from them — `--accent` alone re-themes the whole page,
diagram included.

## Motion

Every animation is CSS, gated behind an `IntersectionObserver` that adds `.is-visible`
when a section scrolls into view, and switched off entirely under
`prefers-reduced-motion: reduce`:

- the decision board's signals travel their routes while each input's LED strip charges
- the metric numbers count up the first time they are seen
- the timeline rail draws itself left to right
- the working-vocabulary rows drift in opposite directions

`--years` and the role count are computed from `careerStart` in `src/data/site.ts` and the
length of the journey list, so they stay correct without being edited.

## Launch checklist

- Anna reviews and approves the English and German copy.
- Anna reviews both public CVs before each deploy. Both currently include her phone
  number and street address, so treat them as fully public documents.
- Anna or a qualified adviser reviews the Impressum and privacy notice.
- The Vercel project uses `npm run build`, publishes `dist`, and installs with npm
  (`npm ci`), not yarn. Node is pinned to 22.x by `engines` and `.nvmrc`.
- The custom domain points to the approved production deployment.

## License

The MIT License (MIT)

Copyright (c) 2022 Maciej Spiechowicz

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
