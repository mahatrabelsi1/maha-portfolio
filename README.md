# Mahaverse

An interactive personal portfolio for Maha Trabelsi, built as a playful mini operating system with four professional portals and a hidden chaos easter egg:

- Student Maha
- Developer Maha
- Scout & Volunteer Maha
- Graphic Designer Maha

## Tech Stack

- React + Vite
- Tailwind CSS
- Framer Motion
- Lucide React icons
- Static data only, no backend and no database

## Edit Personal Data

Most content lives in:

```text
src/data/portfolio.js
```

Edit that file to update projects, hackathons, education, experience, leadership, certifications, languages, stats, and contact details.

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## GitHub Pages Deployment

This repo is configured for a GitHub Pages project site named `maha-portfolio`.

The Vite base path is set in `vite.config.js`:

```js
base: "/maha-portfolio/"
```

After pushing to GitHub, enable Pages:

1. Open the repository settings.
2. Go to `Pages`.
3. Set source to `GitHub Actions`.
4. Push to the `main` branch.

The included workflow at `.github/workflows/deploy.yml` will build and publish the site.

The final URL will be:

```text
https://YOUR-GITHUB-USERNAME.github.io/maha-portfolio/
```

## CV Download

The download button points to:

```text
public/Maha_Trabelsi_CV_Rech.pdf
```

Replace that PDF when you want to update the downloadable CV.
