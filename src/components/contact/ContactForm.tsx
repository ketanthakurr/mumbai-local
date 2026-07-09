"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { Check, Send } from "lucide-react";

type Fields = {
  name: string;
  email: string;
  guests: string;
  date: string;
  message: string;
};

const empty: Fields = {
  name: "",
  email: "",
  guests: "2",
  date: "",
  message: "",
};

export function ContactForm() {
  const t = useTranslations("Contact.form");
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, boolean>>>({});
  const [sent, setSent] = useState(false);

  function update<K extends keyof Fields>(key: K, value: string) {
    setFields((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: false }));
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const next: Partial<Record<keyof Fields, boolean>> = {};
    if (!fields.name.trim()) next.name = true;
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fields.email)) next.email = true;
    if (!fields.date) next.date = true;
    setErrors(next);
    if (Object.keys(next).length === 0) {
      // No backend wired — confirm locally. Swap for a POST when ready.
      setSent(true);
    }
  }

  if (sent) {
    return (
      <div className="flex min-h-96 flex-col items-center justify-center rounded-3xl border border-jade/40 bg-jade/8 p-10 text-center">
        <span className="grid size-14 place-items-center rounded-full bg-jade/20 text-jade shadow-[0_0_24px_-4px_var(--color-jade)]">
          <Check className="size-7" />
        </span>
        <h3 className="font-display mt-5 text-3xl text-cyan">{t("sentTitle")}</h3>
        <p className="mt-2 max-w-sm text-sm text-bone/65">{t("sentBody")}</p>
        <button
          type="button"
          onClick={() => {
            setSent(false);
            setFields(empty);
          }}
          className="mt-6 font-mono text-xs uppercase tracking-widest text-marigold hover:underline"
        >
          {t("another")}
        </button>
      </div>
    );
  }

  const field =
    "w-full rounded-xl border bg-ink/60 px-4 py-3 text-bone placeholder:text-bone/30 transition-colors focus:border-cyan focus:bg-ink";
  const ok = "border-white/12";
  const bad = "border-chili";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-bone/60">
            {t("name")}
          </span>
          <input
            type="text"
            value={fields.name}
            onChange={(e) => update("name", e.target.value)}
            aria-invalid={!!errors.name}
            className={`${field} ${errors.name ? bad : ok}`}
            placeholder={t("namePlaceholder")}
          />
          {errors.name && (
            <span className="mt-1 block text-xs text-chili">{t("required")}</span>
          )}
        </label>

        <label className="block">
          <span className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-bone/60">
            {t("email")}
          </span>
          <input
            type="email"
            value={fields.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={!!errors.email}
            className={`${field} ${errors.email ? bad : ok}`}
            placeholder="you@example.com"
          />
          {errors.email && (
            <span className="mt-1 block text-xs text-chili">
              {t("emailError")}
            </span>
          )}
        </label>

        <label className="block">
          <span className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-bone/60">
            {t("date")}
          </span>
          <input
            type="date"
            value={fields.date}
            onChange={(e) => update("date", e.target.value)}
            aria-invalid={!!errors.date}
            className={`${field} ${errors.date ? bad : ok} [color-scheme:dark]`}
          />
          {errors.date && (
            <span className="mt-1 block text-xs text-chili">{t("required")}</span>
          )}
        </label>

        <label className="block">
          <span className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-bone/60">
            {t("guests")}
          </span>
          <select
            value={fields.guests}
            onChange={(e) => update("guests", e.target.value)}
            className={`${field} ${ok}`}
          >
            {["1", "2", "3", "4", "5", "6", "7+"].map((n) => (
              <option key={n} value={n} className="bg-ink">
                {n}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="block">
        <span className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-bone/60">
          {t("message")}
        </span>
        <textarea
          rows={4}
          value={fields.message}
          onChange={(e) => update("message", e.target.value)}
          className={`${field} ${ok} resize-none`}
          placeholder={t("messagePlaceholder")}
        />
      </label>

      <button
        type="submit"
        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-magenta px-6 py-4 font-mono text-sm uppercase tracking-widest text-bone transition-colors hover:bg-magenta-deep sm:w-auto"
      >
        {t("submit")}
        <Send className="size-4 transition-transform group-hover:translate-x-1" />
      </button>
    </form>
  );
}
