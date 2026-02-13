import { getApps, initializeApp, type FirebaseApp, type FirebaseOptions } from 'firebase/app';
import { getAnalytics, isSupported, logEvent, type Analytics } from 'firebase/analytics';

export type AnalyticsEventParams = Record<string, string | number | boolean | null | undefined>;

let analyticsPromise: Promise<Analytics | null> | null = null;

function hasCoreConfig(config: Partial<FirebaseOptions> | null): config is FirebaseOptions {
  return Boolean(config?.apiKey && config?.authDomain && config?.projectId && config?.appId);
}

function parseConfigValue(value: unknown): Partial<FirebaseOptions> | null {
  if (!value) return null;

  if (typeof value === 'string') {
    try {
      const parsed = JSON.parse(value) as Partial<FirebaseOptions>;
      return typeof parsed === 'object' && parsed !== null ? parsed : null;
    } catch {
      return null;
    }
  }

  if (typeof value === 'object') {
    return value as Partial<FirebaseOptions>;
  }

  return null;
}

function getFirebaseConfig(): FirebaseOptions | null {
  const env = import.meta.env;

  const objectConfig = parseConfigValue(env.VITE_FIREBASE_CONFIG ?? env.VITE_FIREBASE_CONFIG_JSON);
  if (hasCoreConfig(objectConfig)) {
    return objectConfig;
  }

  const splitConfig: Partial<FirebaseOptions> = {
    apiKey: env.VITE_FIREBASE_API_KEY,
    authDomain: env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: env.VITE_FIREBASE_APP_ID,
    measurementId: env.VITE_FIREBASE_MEASUREMENT_ID,
  };

  return hasCoreConfig(splitConfig) ? splitConfig : null;
}

function getOrCreateApp(): FirebaseApp | null {
  const config = getFirebaseConfig();
  if (!config) return null;

  try {
    return getApps().length > 0 ? getApps()[0] : initializeApp(config);
  } catch {
    return null;
  }
}

async function setupAnalytics(): Promise<Analytics | null> {
  if (typeof window === 'undefined') return null;

  const app = getOrCreateApp();
  if (!app) return null;

  const supported = await isSupported().catch(() => false);
  if (!supported) return null;

  try {
    return getAnalytics(app);
  } catch {
    return null;
  }
}

export function initializeFirebaseAnalytics(): Promise<Analytics | null> {
  if (!analyticsPromise) {
    analyticsPromise = setupAnalytics();
  }

  return analyticsPromise;
}

export async function trackAnalyticsEvent(
  eventName: string,
  eventParams: AnalyticsEventParams = {}
): Promise<void> {
  const analytics = await initializeFirebaseAnalytics();
  if (!analytics) return;

  try {
    logEvent(analytics, eventName, eventParams);
  } catch {
    // Keep analytics failures non-blocking for the app.
  }
}
