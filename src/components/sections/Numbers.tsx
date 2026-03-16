import AnimatedSection from "@/components/ui/AnimatedSection";

const stats = [
  { value: "100M+", label: "clientes ativos",      desc: "em todo o Brasil e América Latina" },
  { value: "R$ 0",  label: "de anuidade",           desc: "no cartão de crédito, para sempre" },
  { value: "100%",  label: "do CDI",                desc: "de rendimento na conta digital" },
  { value: "#1",    label: "banco digital",          desc: "mais amado pelos brasileiros" },
  { value: "4.9★",  label: "nas lojas",              desc: "App Store e Google Play" },
  { value: "24/7",  label: "suporte",                desc: "atendimento humano pelo app" },
];

export default function Numbers() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1C0032 0%, #3B0066 50%, #5F0A9A 100%)" }}
    >
      {/* Purple blobs — composited, no filter on each individual */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className="purple-blob w-96 h-96 -top-20 -right-20 opacity-20"
          style={{ filter: "blur(70px)" }}
        />
        <div
          className="purple-blob w-96 h-96 -bottom-20 -left-20 opacity-15"
          style={{ filter: "blur(70px)" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up" className="text-center mb-14">
          <span className="section-label justify-center" style={{ color: "#D4B4FF" }}>
            <span style={{ background: "#D4B4FF" }} />
            Nossos números
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3">
            O banco que não para de crescer
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} animation="scale" delay={i * 70}>
              <div
                className="text-center p-6 rounded-2xl glass h-full"
                style={{ border: "1px solid rgba(212,180,255,0.15)" }}
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black mb-2" style={{ color: "#D4B4FF" }}>
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base font-semibold text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-purple-400">{stat.desc}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
