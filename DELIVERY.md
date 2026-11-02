# Centralis site delivery

## Build summary

- 17 generated HTML pages, including 5 service pages, a product Case Studies page, three draft articles, legal placeholders, and a custom 404.
- Five-question AI readiness assessment with Emerging, Ready, and Advanced results plus a scheduling call to action.
- Consent-aware guide gate with endpoint integration, honest preview mode, session access, text download, and print-to-PDF support.
- Dependency-free build with shared content in `site.config.mjs`.
- Responsive CSS and accessible interaction layer in `src/`.
- Analytics-ready data events without an analytics vendor installed.

## Information and assets still required

- Confirmed legal firm name and preferred short name
- Approved logo variants and brand standards
- Contact email, telephone number, and service area
- Leadership names, biographies, headshots, and approved credentials
- Firm history, industry experience, selected engagements, and affiliations
- Approved scheduling link and secure contact and lead-capture endpoints
- Approved social-media profiles
- Approval for public product case studies, development-stage labels, supporting metrics, and product visuals
- Final canonical domain and hosting decision
- Counsel-reviewed privacy policy, terms, disclaimers, and consent language
- Approved analytics platform, consent requirements, and retention settings
- Photography or additional brand assets, if desired

## Prelaunch QA

- [ ] Replace the reserved placeholder domain in `site.config.mjs`.
- [ ] Confirm firm name, logo treatment, brand colors, and image rights.
- [ ] Replace every visible `[NEEDS: ...]` placeholder.
- [ ] Obtain counsel approval for privacy, terms, disclaimers, and consent.
- [ ] Configure secure contact and lead-capture endpoints, spam protection, notification routes, and retention policies.
- [ ] Set `leadCapturePreview` to `false` only after the lead endpoint is approved and tested.
- [ ] Test submission success and failure against each production endpoint.
- [ ] Add the approved scheduling URL and verify analytics events.
- [ ] Approve authors, dates, and editorial drafts before publishing Insights.
- [ ] Run keyboard-only, screen-reader, zoom, contrast, reduced-motion, and touch testing.
- [ ] Test current Chrome, Edge, Firefox, and Safari at mobile, tablet, and desktop widths.
- [ ] Validate titles, descriptions, canonicals, structured data, sitemap, and robots.txt against the final domain.
- [ ] Run Lighthouse or equivalent performance checks on the deployed build.
- [ ] Confirm HTTPS, redirects, 404 behavior, security headers, backups, and rollback process.

## Editing and maintenance

1. Edit global facts, services, FAQs, process steps, Insights, scheduling, and lead capture in `site.config.mjs`.
2. Edit layout templates in `scripts/build.mjs`, visual styles in `src/styles.css`, and interactions in `src/app.js`.
3. Run `npm run build` and `npm run check`.
4. Review generated files in `dist/`; never edit them directly because the next build replaces them.
5. Keep policy text and regulated-service boundaries under professional review.

## Future enhancements

| Priority | Enhancement | Business value | Effort |
|---|---|---:|---:|
| 1 | Secure form delivery and scheduling integration | High | Low |
| 2 | Headless CMS adapter for Insights, bios, FAQs, and SEO fields | High | Medium |
| 3 | Add approved product visuals and verified adoption or outcome metrics to case studies | High | Medium |
| 4 | Privacy-conscious analytics and conversion dashboard | Medium | Low |
| 5 | Optional emailed readiness summary and CRM routing | Medium | Medium |
| 6 | Approved photography and leadership profiles | Medium | Low |
| 7 | Multilingual content or client portal | Situational | High |
