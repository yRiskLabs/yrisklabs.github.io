# yrisklabs.com

The standalone yRisk public site: an about page, human-approved asset reports,
and posts. Built with Astro and deployed as static HTML through GitHub Pages.

## Local development

```sh
npm install
npm run dev
```

Open <http://127.0.0.1:4321>.

Run `npm run build` before publishing. The command validates Astro components,
TypeScript, and all content-collection schemas before producing `dist/`.

## Publish

Push `main` to the GitHub repository, enable **Settings → Pages → GitHub
Actions**, and the included workflow will build and deploy the site. The custom
domain is configured as `yrisklabs.com`; the same value must be entered in the
repository's Pages settings after its DNS records point to GitHub Pages.

## Content

- Add approved reports to `src/content/reports/` using
  [`docs/publishing-reports.md`](docs/publishing-reports.md).
- Add posts to `src/content/posts/`.

Asset reports must remain unpublished until human review is complete. Curve
governance and the eDAO retain approval, signing, deployment, and execution
authority.

## Architecture

The site intentionally ships no client-side framework and currently requires
no browser JavaScript. Astro generates plain HTML, CSS, RSS, and sitemaps.
Structured report front matter is schema-validated, while page layouts and
shared metadata remain small Astro components.

The visual system follows the official SF Mono yRisk direction: black, warm
paper, and quiet rules. The SF Mono font file is not distributed; visitors use
a locally installed face or the platform monospace fallback.
