# Design Exports Guide

The uploaded HTML files are visual references from Stitch. They are not the final app architecture.

## Where to put them
Store them here:

```txt
docs/design-exports/
├── DESIGN.md
├── homepage.html
├── projects_page.html
├── techstack_page.html
├── certificats_page.html
├── about_page.html
└── contact_page.html
```

## How to use them
Use exports for:
- layout reference
- spacing reference
- page sections
- visual hierarchy
- Tailwind class inspiration

Do not use exports for:
- final routing
- final component architecture
- data structure
- repeated navbar/footer code
- production images without replacing them

## Conversion rule
For each exported page:
1. Identify sections.
2. Extract repeated UI into shared components.
3. Replace fake content with API data or seed data.
4. Keep the same design tokens from `DESIGN_SYSTEM.md`.
5. Delete duplicate one-off Tailwind config blocks.

## Page mapping
```txt
homepage.html           -> HomePage.jsx
projects_page.html      -> ProjectsPage.jsx
techstack_page.html     -> TechStackPage.jsx
certificats_page.html   -> CertificatesPage.jsx
about_page.html         -> AboutPage.jsx
contact_page.html       -> ContactPage.jsx
```

## Important cleanup
- Fix typo: `certificats_page.html` becomes `CertificatesPage.jsx`.
- Replace placeholder email, social links, projects, and certificates.
- Replace external temporary image URLs with local assets or controlled URLs.
- Keep only one shared navbar.
- Make Resume button download `/resume/Joseph-Sotomil-Resume.pdf`.
