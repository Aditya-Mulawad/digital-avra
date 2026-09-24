import { useState, type FormEvent, type ReactNode } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { submitLead, type LeadSource } from "@/lib/leads";
import { track } from "@/lib/analytics";
import { services } from "@/data/services";

type Errors = Record<string, string>;

const budgets = [
  "Not sure yet",
  "Under ₹25,000 / month",
  "₹25,000 – ₹50,000 / month",
  "₹50,000 – ₹1,00,000 / month",
  "Above ₹1,00,000 / month",
];

function validate(values: Record<string, string>, source: LeadSource): Errors {
  const errors: Errors = {};
  if (!values["name"]?.trim()) errors["name"] = "Please enter your name.";
  else if (values["name"].trim().length > 100) errors["name"] = "Name is too long.";

  const email = values["email"]?.trim() ?? "";
  if (!email) errors["email"] = "Please enter your email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
    errors["email"] = "Please enter a valid email address.";

  const phone = values["phone"]?.trim() ?? "";
  if (!phone) errors["phone"] = "Please enter your phone number.";
  else if (!/^[+\d][\d\s-]{6,19}$/.test(phone))
    errors["phone"] = "Please enter a valid phone number.";

  if (source === "growth_audit" && !values["objective"]?.trim())
    errors["objective"] = "Tell us your main objective.";

  if (values["message"] && values["message"].length > 1000)
    errors["message"] = "Please keep this under 1000 characters.";

  return errors;
}

function Field({
  id,
  label,
  error,
  children,
  optional,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
  optional?: boolean;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-sm font-medium">
        {label}
        {optional && <span className="text-muted-foreground font-normal"> (optional)</span>}
      </Label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="text-destructive text-xs">
          {error}
        </p>
      )}
    </div>
  );
}

export function LeadForm({ source }: { source: LeadSource }) {
  const isAudit = source === "growth_audit";
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [serverError, setServerError] = useState<string | null>(null);
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const values = { ...data, service, budget };

    const nextErrors = validate(values, source);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      track("form_error", { source, fields: Object.keys(nextErrors).join(",") });
      return;
    }

    setStatus("sending");
    setServerError(null);
    const result = await submitLead({ ...values, source });
    if (result.ok) {
      setStatus("done");
      form.reset();
      setService("");
      setBudget("");
    } else {
      setStatus("idle");
      setServerError(result.message);
    }
  }

  if (status === "done") {
    return (
      <div
        role="status"
        className="border-border bg-card shadow-card rounded-xl border p-8 text-center"
      >
        <span className="bg-primary-soft text-primary mx-auto flex size-12 items-center justify-center rounded-full">
          <CheckCircle2 className="size-6" aria-hidden />
        </span>
        <h3 className="mt-5 text-xl font-semibold">Thank you — we've got your details.</h3>
        <p className="text-muted-foreground mt-2 text-sm">
          Our team will review your business and get back to you with next steps. For
          anything urgent, message us on WhatsApp.
        </p>
        <Button variant="outline" className="mt-6" onClick={() => setStatus("idle")}>
          Send another request
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      onFocus={() => track("form_start", { source })}
      className="border-border bg-card shadow-card space-y-5 rounded-xl border p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Full name" {...(errors["name"] ? { error: errors["name"] } : {})}>
          <Input id="name" name="name" maxLength={100} autoComplete="name" placeholder="Your name" />
        </Field>
        <Field id="phone" label="Phone" {...(errors["phone"] ? { error: errors["phone"] } : {})}>
          <Input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+91 00000 00000" />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="email" label="Email" {...(errors["email"] ? { error: errors["email"] } : {})}>
          <Input id="email" name="email" type="email" maxLength={255} autoComplete="email" placeholder="you@company.com" />
        </Field>
        <Field id="company" label="Business name" optional>
          <Input id="company" name="company" maxLength={120} placeholder="Your business" />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="website" label="Website" optional>
          <Input id="website" name="website" maxLength={200} placeholder="yourwebsite.com" />
        </Field>
        <Field id="service" label="Service of interest" optional>
          <Select value={service} onValueChange={setService}>
            <SelectTrigger id="service" className="w-full">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              {services.map((s) => (
                <SelectItem key={s.slug} value={s.title}>
                  {s.title}
                </SelectItem>
              ))}
              <SelectItem value="Not sure yet">Not sure yet</SelectItem>
            </SelectContent>
          </Select>
        </Field>
      </div>

      {isAudit && (
        <>
          <Field
            id="objective"
            label="Your main business objective"
            {...(errors["objective"] ? { error: errors["objective"] } : {})}
          >
            <Input
              id="objective"
              name="objective"
              maxLength={200}
              placeholder="e.g. More qualified enquiries from Google"
            />
          </Field>
          <Field id="budget" label="Monthly budget range" optional>
            <Select value={budget} onValueChange={setBudget}>
              <SelectTrigger id="budget" className="w-full">
                <SelectValue placeholder="Select a range" />
              </SelectTrigger>
              <SelectContent>
                {budgets.map((b) => (
                  <SelectItem key={b} value={b}>
                    {b}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>
        </>
      )}

      <Field
        id="message"
        label={isAudit ? "Anything else we should know?" : "How can we help?"}
        optional={isAudit}
        {...(errors["message"] ? { error: errors["message"] } : {})}
      >
        <Textarea
          id="message"
          name="message"
          maxLength={1000}
          rows={4}
          placeholder="Tell us a little about your business and what you want to achieve."
        />
      </Field>

      {serverError && (
        <p role="alert" className="text-destructive text-sm">
          {serverError}
        </p>
      )}

      <Button type="submit" size="lg" className="h-12 w-full text-base" disabled={status === "sending"}>
        {status === "sending" && <Loader2 className="mr-2 size-4 animate-spin" />}
        {isAudit ? "Request My Free Growth Audit" : "Send Message"}
      </Button>

      <p className="text-muted-foreground text-xs">
        We use your details only to respond to your enquiry. No spam, ever.
      </p>
    </form>
  );
}
