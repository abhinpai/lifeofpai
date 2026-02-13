# Life of Pai - Couple Travel Landing Page

A React + Vite + TypeScript + Tailwind single-page website for a couple travel creator brand.

## Run locally

1. Install dependencies:
   `npm install`
2. Start dev server:
   `npm run dev`
3. Build for production:
   `npm run build`
4. Preview build:
   `npm run preview`

## Notes

- Update media URLs in `/Users/abhinpai/Workshop/lifeofpai/src/App.tsx`:
  - `heroVideo`
  - `ugcClips`
  - social embeds (`YouTube` and `Instagram` iframes)
- Theme tokens and animation utilities are in `/Users/abhinpai/Workshop/lifeofpai/src/index.css` and `/Users/abhinpai/Workshop/lifeofpai/tailwind.config.ts`.

## CI/CD setup

GitHub Actions workflow lives at `/Users/abhinpai/Workshop/lifeofpai/.github/workflows/ci-cd.yml`.

### What it does

1. Runs on every push/PR to `main`.
2. Installs dependencies and builds the Vite app.
3. Validates the Docker build.
4. On push to `main`, deploys `dist/` to Hostinger via FTP.

### Required GitHub repository secrets

- `HOSTINGER_FTP_HOST` (example: `ftp.yourdomain.com`)
- `HOSTINGER_FTP_USERNAME`
- `HOSTINGER_FTP_PASSWORD`
- `HOSTINGER_FTP_TARGET_DIR` (example: `/public_html/`)

### Deploy target on Hostinger

- Point your domain `lifeofpai.in` to the Hostinger site where the FTP target directory is configured.
- Keep `HOSTINGER_FTP_TARGET_DIR` aligned with your live web root (usually `/public_html/`).

## Docker

Production Docker image is defined in `/Users/abhinpai/Workshop/lifeofpai/Dockerfile` and serves the built app with Nginx.

Build and run locally:

```bash
docker build -t lifeofpai:local .
docker run --rm -p 8080:80 lifeofpai:local
```
