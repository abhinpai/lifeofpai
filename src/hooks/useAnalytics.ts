import { useCallback } from 'react';
import { trackAnalyticsEvent, type AnalyticsEventParams } from '../analyics';

export function useAnalytics() {
  const trackEvent = useCallback((eventName: string, eventParams: AnalyticsEventParams = {}) => {
    void trackAnalyticsEvent(eventName, eventParams);
  }, []);

  return { trackEvent };
}
