import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const benefits = [
  "Sem anuidade para sempre",
  "Conta digital grátis",
  "Aprovação 100% digital",
  "Suporte humano 24/7",
];

export default function CTA() {
  return (
    <section className="py-24 bg-white lazy-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="scale">
          <div
            className="rounded-3xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #820AD1 0%, #5F0A9A 50%, #1C0032 100%)" }}
          >
            {/* Blobs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
              <div
                className="purple-blob w-80 h-80 -top-20 -right-20 opacity-25"
                style={{ filter: "blur(60px)" }}
              />
              <div
                className="purple-blob w-80 h-80 -bottom-20 -left-20 opacity-20"
                style={{ filter: "blur(60px)", background: "radial-gradient(circle, rgba(212,180,255,0.4), transparent)" }}
              />
              {/* Dot grid */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                  backgroundSize: "36px 36px",
                }}
              />
            </div>

            <div className="relative">
              <span className="section-label justify-center mb-4" style={{ color: "#D4B4FF" }}>
                <span style={{ background: "#D4B4FF" }} />
                Pronto para começar?
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 mb-4 max-w-2xl mx-auto leading-tight">
                Junte-se a mais de{" "}
                <span className="text-gradient-light">100 milhões</span>{" "}
                de clientes
              </h2>

              <p className="text-lg text-purple-200 mb-8 max-w-xl mx-auto">
                O banco que simplifica sua vida financeira — sem burocracia, sem taxa, sem complicação.
              </p>

              {/* Benefits */}
              <div className="flex flex-wrap justify-center gap-3 sm:gap-5 mb-10">
                {benefits.map((b) => (
                  <div key={b} className="flex items-center gap-2 text-sm text-white">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(255,255,255,0.15)" }}
                      aria-hidden="true"
                    >
                      <Check size={11} />
                    </div>
                    {b}
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/cartao"
                  className="btn-shimmer inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base text-white group w-full sm:w-auto justify-center"
                >
                  Pedir cartão grátis
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/conta"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base border-2 transition-all hover:bg-white/10 w-full sm:w-auto justify-center focus-visible:outline-white"
                  style={{ color: "white", borderColor: "rgba(255,255,255,0.35)" }}
                >
                  Abrir conta digital
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
