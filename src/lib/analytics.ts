/**
 * Centralised analytics event utility.
 *
 * No tracking IDs are hardcoded. Provide them through environment variables
 * (VITE_GA4_ID, VITE_META_PIXEL_ID, VITE_GOOGLE_ADS_ID) and initialise the
 * corresponding scripts before events will be forwarded. Until then, events
 * are queued on window.dataLayer, which is safe and inspectable.
 */

export type AnalyticsEvent =
  | "page_view"
  | "view_service"
  | "view_case_study"
  | "click_cta"
  | "click_whatsapp"
  | "form_start"
  | "form_submit"
  | "form_error"
  | "audit_request"
  | "contact_submit"
  | "lead";

type Payload = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export const analyticsConfig = {
  ga4Id: import.meta.env["VITE_GA4_ID"] as string | undefined,
  metaPixelId: import.meta.env["VITE_META_PIXEL_ID"] as string | undefined,
  googleAdsId: import.meta.env["VITE_GOOGLE_ADS_ID"] as string | undefined,
};

/** Stable ID shared between browser pixel and future server-side (CAPI) events. */
export const createEventId = () =>
  `da_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;

export function track(event: AnalyticsEvent, payload: Payload = {}) {
  if (typeof window === "undefined") return;
  const data = { event, ...payload };
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(data);
  window.gtag?.("event", event, payload);
  if (import.meta.env.DEV) console.debug("[analytics]", data);
}

/**
 * Conversion event. Fire ONLY after a successful form submission —
 * never on page load. `eventId` enables pixel/CAPI deduplication later.
 */
export function trackLead(source: string, eventId = createEventId()) {
  track("lead", { source, event_id: eventId });
  window.fbq?.("track", "Lead", {}, { eventID: eventId });
  return eventId;
}
