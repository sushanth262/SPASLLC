import { FormEvent, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { submitContactForm } from "../lib/contactApi";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState("");
  const messageRef = useRef<HTMLTextAreaElement>(null);

  function applyFormat(prefix: string, suffix: string) {
    const el = messageRef.current;
    if (!el) return;
    const start = el.selectionStart;
    const end = el.selectionEnd;
    const value = el.value;
    const selected = value.slice(start, end);
    const next = value.slice(0, start) + prefix + selected + suffix + value.slice(end);
    el.value = next;
    el.focus();
    el.selectionStart = start + prefix.length;
    el.selectionEnd = end + prefix.length;
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const result = await submitContactForm({
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      subject: String(data.get("subject") ?? ""),
      message: String(data.get("message") ?? ""),
      privacyAccepted: data.get("privacyAccepted") === "on",
      website: String(data.get("website") ?? ""),
    });

    if (result.ok) {
      setStatus("success");
      form.reset();
      return;
    }

    setStatus("error");
    setError(result.error);
  }

  return (
    <main className="mt-4 space-y-4">
      <section className="rounded-[24px] border border-[#183335]/10 bg-white px-6 py-10 sm:px-12">
        <h1 className="text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">Contact SPAS LLC</h1>
        <p className="mt-4 max-w-2xl text-base leading-8 text-[#60716f]">
          Send a message. We typically respond within a few business days. We do not publish an email address on this site — use the form below.
        </p>
      </section>

      <section className="rounded-2xl border border-[#183335]/10 bg-white px-6 py-8 sm:px-10">
        {status === "success" ? (
          <div className="rounded-xl bg-[#e9efd9] px-5 py-4 text-[#183335]" role="status">
            <p className="font-extrabold">Thanks — your message was received.</p>
            <p className="mt-2 text-sm text-[#60716f]">We will reply to the email address you provided.</p>
            <button type="button" className="button-primary mt-6" onClick={() => setStatus("idle")}>
              Send another message
            </button>
          </div>
        ) : (
          <form className="mx-auto max-w-xl space-y-5" onSubmit={onSubmit} noValidate>
            <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <div>
              <label htmlFor="name" className="field-label">
                Your name *
              </label>
              <input id="name" name="name" required className="field-input" autoComplete="name" />
            </div>

            <div>
              <label htmlFor="email" className="field-label">
                Your email * <span className="font-medium text-[#879492]">(for our reply)</span>
              </label>
              <input id="email" name="email" type="email" required className="field-input" autoComplete="email" />
            </div>

            <div>
              <label htmlFor="subject" className="field-label">
                Subject *
              </label>
              <input id="subject" name="subject" required className="field-input" />
            </div>

            <div>
              <label htmlFor="message" className="field-label">
                Message *
              </label>
              <div className="flex flex-wrap gap-2 rounded-t-xl border border-b-0 border-[#183335]/15 bg-[#f4f3ee] px-3 py-2">
                <button type="button" className="format-btn" onClick={() => applyFormat("**", "**")}>
                  Bold
                </button>
                <button type="button" className="format-btn" onClick={() => applyFormat("_", "_")}>
                  Italic
                </button>
                <button type="button" className="format-btn" onClick={() => applyFormat("\n- ", "")}>
                  List
                </button>
              </div>
              <textarea id="message" name="message" ref={messageRef} required rows={6} className="field-input rounded-t-none" />
            </div>

            <label className="flex items-start gap-3 text-sm text-[#60716f]">
              <input name="privacyAccepted" type="checkbox" required className="mt-1 size-4 accent-[#183335]" />
              <span>
                I agree to the{" "}
                <Link to="/privacy" className="font-bold text-[#183335] underline-offset-2 hover:underline">
                  Privacy Policy
                </Link>{" "}
                *
              </span>
            </label>

            {status === "error" && error ? (
              <p className="rounded-lg bg-[#fde8e4] px-4 py-3 text-sm font-semibold text-[#8a2e2e]" role="alert">
                {error}
              </p>
            ) : null}

            <button type="submit" className="button-primary w-full sm:w-auto" disabled={status === "submitting"}>
              {status === "submitting" ? "Sending…" : "Send message"}
            </button>

            <p className="text-sm text-[#60716f]">
              <strong className="text-[#183335]">Mailing location:</strong> Issaquah, WA, United States
            </p>
          </form>
        )}
      </section>
    </main>
  );
}
