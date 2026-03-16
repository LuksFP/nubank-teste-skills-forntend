import AnimatedSection from "@/components/ui/AnimatedSection";
import FlipCard from "@/components/ui/FlipCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CardShowcase() {
  return (
    <section
      className="relative py-28 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0d0020 0%, #1C0032 40%, #3B0066 80%, #5F0A9A 100%)" }}
      aria-labelledby="card-showcase-title"
    >
      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute rounded-full opacity-25"
          style={{ width: 600, height: 600, top: -100, left: "50%", transform: "translateX(-50%)",
            background: "radial-gradient(circle, rgba(130,10,209,0.5), transparent 65%)", filter: "blur(10px)" }} />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1.5px, transparent 0)",
            backgroundSize: "44px 44px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: text ── */}
          <AnimatedSection animation="slide-left">
            <span className="nu-tag nu-tag-dark mb-6">Cartão interativo</span>
            <h2
              id="card-showcase-title"
              className="text-4xl sm:text-5xl font-black text-white leading-tight mt-4 mb-5"
            >
              Explore o cartão{" "}
              <span style={{
                background: "linear-gradient(135deg, #D4B4FF, #FF94FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Nubank
              </span>
            </h2>
            <p className="text-purple-300 text-lg leading-relaxed mb-8 max-w-md">
              Passe o mouse para ver o efeito holográfico e clique para ver a frente e o verso do cartão.
              Totalmente sem anuidade, para sempre.
            </p>

            <ul className="space-y-3 mb-10">
              {[
                { label: "Sem anuidade",           desc: "Para sempre, sem asterisco" },
                { label: "Efeito holográfico",      desc: "Tecnologia de ponta no design" },
                { label: "Cartão virtual incluso",  desc: "Número diferente para compras online" },
                { label: "Mastercard Platinum",     desc: "Ou Black no Ultravioleta" },
              ].map((item) => (
                <li key={item.label} className="flex items-center gap-3">
                  <div
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: "#A855F7" }}
                  />
                  <span className="text-white font-semibold text-sm">{item.label}</span>
                  <span className="text-purple-400 text-sm">— {item.desc}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/cartao"
                className="btn-shimmer inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm text-white group"
              >
                Pedir meu cartão
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/ultravioleta"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-bold text-sm border transition-all hover:bg-white/10"
                style={{ color: "#D4B4FF", borderColor: "rgba(212,180,255,0.25)" }}
              >
                Ver Ultravioleta
              </Link>
            </div>
          </AnimatedSection>

          {/* ── Right: flip cards ── */}
          <AnimatedSection animation="slide-right" delay={150}>
            <div className="flex flex-col sm:flex-row gap-8 items-center justify-center lg:justify-end">
              {/* Standard */}
              <div className="flex flex-col items-center gap-2">
                <FlipCard variant="standard" />
                <span
                  className="text-xs font-bold uppercase tracking-wider"
                  style={{ color: "rgba(212,180,255,0.5)" }}
                >
                  Standard
                </span>
              </div>

              {/* Ultra — slightly offset */}
              <div className="flex flex-col items-center gap-2 sm:-mt-8">
                <FlipCard variant="ultravioleta" />
                <span
                  className="text-xs font-bold uppercase tracking-wider"
                  style={{ color: "rgba(212,180,255,0.5)" }}
                >
                  Ultravioleta
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
