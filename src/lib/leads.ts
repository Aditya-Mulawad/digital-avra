import emailjs from "@emailjs/browser";
import { createEventId, track, trackLead } from "./analytics";

/**
 * Lead submission boundary.
 *
 * Sends via EmailJS when VITE_EMAILJS_* env vars are set (see .env).
 * Falls back to a generic webhook (VITE_LEAD_WEBHOOK_URL) if EmailJS isn't
 * configured, and to local-only capture if neither is set — so every form
 * in the site stays functional in the UI either way. Never hardcode API
 * keys here; read them from environment variables.
 */
export type LeadSource = "growth_audit" | "contact";

export type LeadPayload = Record<string, string> & { source: LeadSource };

export type LeadResult = { ok: true; eventId: string } | { ok: false; message: string };

const EMAILJS_SERVICE_ID = import.meta.env["VITE_EMAILJS_SERVICE_ID"] as string | undefined;
const EMAILJS_TEMPLATE_ID = import.meta.env["VITE_EMAILJS_TEMPLATE_ID"] as string | undefined;
const EMAILJS_PUBLIC_KEY = import.meta.env["VITE_EMAILJS_PUBLIC_KEY"] as string | undefined;

async function deliverLead(payload: LeadPayload): Promise<void> {
  // Preferred path: EmailJS, when configured.
  if (EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY) {
    // Keys here must match the {{placeholders}} in your EmailJS template.
    const templateParams = {
      name: payload["name"] || "Not provided",
      phone: payload["phone"] || "Not provided",
      email: payload["email"] || "Not provided",
      company: payload["company"] || "Not provided",
      website: payload["website"] || "Not provided",
      service: payload["service"] || "Not specified",
      objective: payload["objective"] || "Not provided",
      budget: payload["budget"] || "Not specified",
      message: payload["message"] || "No additional message",
      source: payload.source === "growth_audit" ? "Free Growth Audit" : "Contact Form",
    };

    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, {
      publicKey: EMAILJS_PUBLIC_KEY,
    });
    return;
  }

  // Fallback: a generic webhook endpoint, if configured instead.
  const endpoint = import.meta.env["VITE_LEAD_WEBHOOK_URL"] as string | undefined;
  if (!endpoint) {
    // No destination configured yet — the lead is captured client-side only.
    if (import.meta.env.DEV) console.info("[lead] captured (no endpoint configured)", payload);
    await new Promise((r) => setTimeout(r, 700));
    return;
  }
  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`Lead delivery failed (${res.status})`);
}

export async function submitLead(payload: LeadPayload): Promise<LeadResult> {
  const eventId = createEventId();
  try {
    await deliverLead(payload);
    track("form_submit", { source: payload.source, event_id: eventId });
    track(payload.source === "growth_audit" ? "audit_request" : "contact_submit", {
      event_id: eventId,
    });
    trackLead(payload.source, eventId); // conversion fires only on success
    return { ok: true, eventId };
  } catch (error) {
    return {
      ok: false,
      message:
        error instanceof Error
          ? "We couldn't send your details just now. Please try again or reach us on WhatsApp."
          : "Something went wrong. Please try again.",
    };
  }
}