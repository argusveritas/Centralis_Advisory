# Centralis Advisory Group website

Static, dependency-free website generated from shared content and page templates.

## Run locally

```powershell
npm run build
npm run check
npm run preview
```

The preview command serves `dist/` on port 4173. Generated files are disposable; edit the source files and rebuild.

## Content model

- `site.config.mjs`: firm details, services, product case studies, FAQs, Insights, process, and missing-information list.
- `scripts/build.mjs`: page templates, metadata, structured data, sitemap, and robots.txt.
- `src/styles.css`: design system and responsive layouts.
- `src/app.js`: navigation, connected-framework tabs, AI readiness scoring, gated-guide access, Insights filters, form validation, and analytics-ready events.
- `public/centralis-logo.png`: current transparent 500 px logo.
- `public/centralis-mark.png`: transparent symbol crop for compact placements.
- `public/centralis-logo-source.png`: preserved current supplied source file.
- `public/centralis-logo-2026jun11-source.png`: archived prior supplied source.
- `DELIVERY.md`: prelaunch checklist, maintenance notes, missing inputs, and prioritized enhancements.

## Important prelaunch settings

The reserved `.example` domain, bracketed placeholders, legal drafts, article bylines/dates, scheduling link, and form endpoints must be replaced or approved before public deployment. The guide gate runs in explicit preview mode until `leadCaptureEndpoint` is configured and `leadCapturePreview` is set to `false`; preview mode validates but does not transmit or retain an email. No analytics or third-party tracking is installed.

The production lead endpoint must accept a JSON `POST` containing `email`, `consent`, `resource`, and `submittedAt`, return a successful HTTP status only after durable capture, and allow requests from the final website origin.
