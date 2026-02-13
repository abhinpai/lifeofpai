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
4. On push to `main`, deploys `dist/` to Firebase Hosting.

### Required GitHub repository secrets

- `FIREBASE_PROJECT_ID` (your Firebase project id, e.g. `lifeofpai-prod`)
- `FIREBASE_SERVICE_ACCOUNT` (JSON key contents of a Firebase Admin service account)
- `VITE_FIREBASE_CONFIG` (single JSON object string for Firebase Web config, preferred)
- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_STORAGE_BUCKET`
- `VITE_FIREBASE_MESSAGING_SENDER_ID`
- `VITE_FIREBASE_APP_ID`
- `VITE_FIREBASE_MEASUREMENT_ID`

`VITE_FIREBASE_CONFIG` can be used alone as a single object string. Split keys are supported as fallback.
These `VITE_` secrets are injected at build time in CI and used by `/Users/abhinpai/Workshop/lifeofpai/src/analyics/index.ts` to initialize Firebase Analytics.

### How to get Firebase values

1. In Firebase Console, open your project and enable Hosting.
2. Go to Project settings -> Service accounts -> Generate new private key.
3. Copy the downloaded JSON file contents into GitHub secret `FIREBASE_SERVICE_ACCOUNT`.
4. Copy your project id into GitHub secret `FIREBASE_PROJECT_ID`.
5. In Firebase Hosting, connect your custom domain `lifeofpai.in`.

## Docker

Production Docker image is defined in `/Users/abhinpai/Workshop/lifeofpai/Dockerfile` and serves the built app with Nginx.

Build and run locally:

```bash
docker build -t lifeofpai:local .
docker run --rm -p 8080:80 lifeofpai:local
```
