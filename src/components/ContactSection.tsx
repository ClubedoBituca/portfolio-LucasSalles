import { useState, FormEvent } from "react";
import AuroraMeshFooter from "./OrangeParticle";
import { trackContactForm } from "@/utils/analytics";

export default function ContactSection() {
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xvzawvpg";
  const [status, setStatus] = useState({ state: "idle", message: "" });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus({ state: "sending", message: "" });
    trackContactForm('submit');

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        form.reset();
        setStatus({
          state: "success",
          message: "Mensagem enviada! Vou te responder o quanto antes.",
        });
        trackContactForm('success');
      } else {
        setStatus({
          state: "error",
          message: "Não consegui enviar agora. Tente novamente em instantes.",
        });
        trackContactForm('error');
      }
    } catch {
      setStatus({
        state: "error",
        message: "Erro de rede. Confira sua conexão e tente novamente.",
      });
      trackContactForm('error');
    }
  }

  return (
    <section
      className="section-padding relative overflow-hidden"
      id="contact"
    >
      {/* Background Animation - Positioned to fill entire section */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <AuroraMeshFooter
          className="w-full h-full"
          speed={0.6}
          blobCount={5}
          blobRadius={320}
          intensity={0.7}
          colors={["#ff6a00", "#ffb45c", "#ff8533"]}
          interact={0.5}
          topFade={0.3}
          meshOpacity={0.15}
          meshStep={50}
          blurPx={12}
        />
        {/* Subtle fade to ensure readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/20 to-background/40" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-mono text-primary mb-4 block">
              // contact
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-primary">Get In Touch</span>
            </h2>

            <p className="text-foreground/80 text-lg font-medium">
              I'm currently open to new opportunities. Feel free to reach out if you
              have a project in mind or just want to connect!
            </p>
          </div>

          <form
            className="bg-card/90 backdrop-blur-md border border-border/50 rounded-xl p-6 md:p-8 shadow-2xl"
            onSubmit={handleSubmit}
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 border border-border/50 rounded-lg bg-background/80 backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 border border-border/50 rounded-lg bg-background/80 backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows={6}
                required
                className="w-full px-4 py-3 border border-border/50 rounded-lg bg-background/80 backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-vertical transition-all duration-200"
              />
            </div>

            <input type="hidden" name="_subject" value="New message from portfolio" />

            <div className="text-center">
              <button
                type="submit"
                disabled={status.state === "sending"}
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105"
              >
                {status.state === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status.state !== "idle" && (
                <p
                  className={`mt-4 text-sm font-medium ${
                    status.state === "success" 
                      ? "text-green-600 dark:text-green-400" 
                      : "text-red-600 dark:text-red-400"
                  }`}
                  role="status"
                >
                  {status.message}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}