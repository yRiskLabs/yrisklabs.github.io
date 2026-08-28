# yrisklabs.com

The standalone yRisk public site: an about page, human-approved asset reports,
and posts. Built with Astro and deployed as static HTML through GitHub Pages.

## Local development

```sh
npm ci
npm run dev
```

Open <http://127.0.0.1:4321>.

Run `npm run build` before publishing. The command validates Astro components,
TypeScript, and all content-collection schemas before producing `dist/`.

## Publish

Push `main` and the included workflow builds and deploys the site. GitHub Pages
uses Actions, serves `yrisklabs.com`, and enforces HTTPS.

## Content

- Copy `src/content/reports/_template.md` when adding an approved report.
- Add posts to `src/content/posts/`.

Asset reports must remain unpublished until human review is complete. Curve
governance and the eDAO retain approval, signing, deployment, and execution
authority.

## Architecture

The site ships no client-side framework or browser JavaScript. Astro generates
plain HTML, CSS, RSS, and sitemaps. Report front matter is schema-validated;
layouts and shared metadata remain small Astro components.

The visual system follows the official SF Mono yRisk direction: black, warm
paper, and quiet rules. The SF Mono font file is not distributed; visitors use
a locally installed face or the platform monospace fallback.
