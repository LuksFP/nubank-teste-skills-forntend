import AnimatedSection from "@/components/ui/AnimatedSection";
import FloatingCards from "@/components/ui/FloatingCards";

const stats = [
  { value: "100M+", label: "clientes ativos",  desc: "em todo o Brasil e América Latina", highlight: true },
  { value: "R$ 0",  label: "de anuidade",       desc: "no cartão de crédito, para sempre", highlight: false },
  { value: "100%",  label: "do CDI",             desc: "de rendimento na conta digital",    highlight: false },
  { value: "#1",    label: "banco digital",      desc: "mais amado pelos brasileiros",       highlight: false },
  { value: "4.9★",  label: "nas lojas",          desc: "App Store e Google Play",            highlight: false },
  { value: "24/7",  label: "suporte humano",     desc: "atendimento pelo app, sem espera",   highlight: false },
];

export default function Numbers() {
  return (
    <section
      className="relative py-28 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0d0020 0%, #1C0032 35%, #3B0066 70%, #5F0A9A 100%)" }}
    >
      {/* Floating cards */}
      <FloatingCards count={5} />

      {/* Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className="absolute rounded-full opacity-25"
          style={{ width: 500, height: 500, top: -100, right: -100,
            background: "radial-gradient(circle, rgba(160,32,208,0.5), transparent 70%)" }}
        />
        <div
          className="absolute rounded-full opacity-20"
          style={{ width: 400, height: 400, bottom: -80, left: -80,
            background: "radial-gradient(circle, rgba(95,10,154,0.5), transparent 70%)" }}
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1.5px, transparent 0)",
            backgroundSize: "44px 44px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <span className="nu-tag nu-tag-dark mb-5">Nossos números</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-4 leading-tight">
            O banco que não{" "}
            <span style={{
              background: "linear-gradient(135deg, #D4B4FF, #FF94FF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              para de crescer
            </span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {stats.map((s, i) => (
            <AnimatedSection key={s.label} animation="scale" delay={i * 60}>
              <div
                className="rounded-2xl p-6 h-full relative overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: s.highlight
                    ? "linear-gradient(135deg, rgba(130,10,209,0.4), rgba(95,10,154,0.3))"
                    : "rgba(255,255,255,0.05)",
                  border: `1px solid ${s.highlight ? "rgba(212,180,255,0.35)" : "rgba(212,180,255,0.12)"}`,
                  boxShadow: s.highlight ? "0 0 30px rgba(130,10,209,0.2)" : "none",
                }}
              >
                {s.highlight && (
                  <div
                    className="absolute inset-0 opacity-20 pointer-events-none rounded-2xl"
                    style={{ background: "radial-gradient(circle at 30% 30%, #D4B4FF, transparent 70%)" }}
                  />
                )}
                <div
                  className="text-3xl sm:text-4xl lg:text-5xl font-black mb-2"
                  style={{ color: s.highlight ? "#E8C6FF" : "#D4B4FF" }}
                >
                  {s.value}
                </div>
                <div className="text-sm font-bold text-white mb-1">{s.label}</div>
                <div className="text-xs text-purple-400 leading-relaxed">{s.desc}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
