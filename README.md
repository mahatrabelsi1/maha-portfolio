# Maha Trabelsi · Academic Portfolio

One-page research portfolio, live at https://mahatrabelsi1.github.io/maha-portfolio/

Built with React, Vite and Tailwind CSS. Deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

## Editing content

All text, links, publications, projects and dates live in `src/data/portfolio.js`.

- **CV:** replace `public/Maha_Trabelsi_CV_Rech.pdf` (or change `profile.cvPath`).
- **Photo:** add an image under `public/images/profile/` and set `profile.photo`.
- **Project images:** put them in `public/images/projects/` and reference them without a leading slash.

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
```
