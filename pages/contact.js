import { useState } from "react";

const initialFormState = { name: "", email: "", message: "" };

const ContactPage = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

  const validate = () => {
    const validationErrors = {};
    if (!formData.name.trim()) {
      validationErrors.name = "Please enter your name.";
    }
    if (!validateEmail(formData.email)) {
      validationErrors.email = "Enter a valid email address.";
    }
    const messageLength = formData.message.trim().length;
    if (messageLength < 10) {
      validationErrors.message = "Your message should be at least 10 characters.";
    } else if (messageLength > 1000) {
      validationErrors.message = "Your message cannot exceed 1000 characters.";
    }
    return validationErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus(null);

    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(data?.error || "Something went wrong. Please try again.");
      }

      setStatus({
        type: "success",
        message: "Thanks for reaching out! We'll be in touch shortly.",
      });
      setFormData(initialFormState);
      setErrors({});
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Unable to send your message right now.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl space-y-10">
        <header className="text-center space-y-3">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">
            Contact
          </p>
          <h1 className="text-4xl font-semibold md:text-5xl">
            Let's start a conversation
          </h1>
          <p className="text-base text-white/70 md:text-lg">
            Have a question, feedback, or partnership idea? Drop us a line and
            we'll respond within two business days.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30 backdrop-blur"
          >
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold uppercase tracking-wide text-white/70"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                maxLength={80}
                required
                className="w-full rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-white placeholder-white/50 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/40"
                placeholder="Jane Doe"
              />
              {errors.name && (
                <p className="mt-2 text-sm text-rose-300">{errors.name}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold uppercase tracking-wide text-white/70"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                maxLength={120}
                required
                className="w-full rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-white placeholder-white/50 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/40"
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="mt-2 text-sm text-rose-300">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-semibold uppercase tracking-wide text-white/70"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                maxLength={1000}
                required
                className="w-full rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-white placeholder-white/50 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/40"
                placeholder="Tell us how we can help..."
              />
              {errors.message && (
                <p className="mt-2 text-sm text-rose-300">{errors.message}</p>
              )}
            </div>

            {status && (
              <div
                className={`rounded-2xl border px-4 py-3 text-sm font-medium ${
                  status.type === "success"
                    ? "border-emerald-400/60 bg-emerald-400/10 text-emerald-200"
                    : "border-rose-400/60 bg-rose-400/10 text-rose-200"
                }`}
                role="status"
                aria-live="polite"
              >
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-2xl bg-white px-6 py-3 text-base font-semibold text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:bg-white/50"
            >
              {isSubmitting ? "Sending..." : "Send message"}
            </button>
          </form>

          <aside className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white/80 backdrop-blur">
            <p className="text-sm uppercase tracking-[0.3em] text-white/60">
              Say hello
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-white">
              Prefer email?
            </h2>
            <p className="mt-3 text-sm text-white/70">
              Reach our team directly and we will follow up as soon as possible.
            </p>
            <a
              href="mailto:aleksandrovich.mikita@gmail.com"
              className="mt-6 inline-flex items-center text-lg font-semibold text-white underline decoration-white/40 underline-offset-8 hover:decoration-white"
            >
              aleksandrovich.mikita@gmail.com
            </a>
            <div className="mt-8 space-y-3 text-sm text-white/60">
              <p>Response time: within 48 hours</p>
              <p>Available: Monday – Friday</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;