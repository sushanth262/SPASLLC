const DEFAULT_ENDPOINT = "https://api.scoutify.finance/api/public/spas-contact";

export type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
  privacyAccepted: boolean;
  website?: string;
};

export type ContactResult = { ok: true } | { ok: false; error: string };

export async function submitContactForm(payload: ContactPayload): Promise<ContactResult> {
  const url = import.meta.env.VITE_SPAS_CONTACT_API?.trim() || DEFAULT_ENDPOINT;

  let res: Response;
  try {
    res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch {
    return { ok: false, error: "We could not reach the server. Check your connection and try again." };
  }

  let data: { error?: string } = {};
  try {
    data = await res.json();
  } catch {
    data = {};
  }

  if (res.ok) return { ok: true };
  return {
    ok: false,
    error: data.error || "We could not send your message. Please try again in a few minutes.",
  };
}
