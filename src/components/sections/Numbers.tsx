const stats = [
  { value: "100M+", label: "clientes ativos", desc: "em todo o Brasil e América Latina" },
  { value: "R$ 0", label: "de anuidade", desc: "no cartão de crédito para sempre" },
  { value: "100%", label: "do CDI", desc: "de rendimento na conta digital" },
  { value: "#1", label: "banco digital", desc: "mais amado pelos brasileiros" },
  { value: "4.9★", label: "nas lojas", desc: "App Store e Google Play" },
  { value: "24/7", label: "suporte", desc: "atendimento humano pelo app" },
];

export default function Numbers() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1C0032 0%, #3B0066 50%, #5F0A9A 100%)" }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: "#A020D0" }}
        />
        <div
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: "#820AD1" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider mb-3 text-purple-300">
            Nossos números
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            O banco que não para de crescer
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                animationDelay: `${i * 0.1}s`,
              }}
            >
              <div
                className="text-4xl lg:text-5xl font-bold mb-2"
                style={{ color: "#D4B4FF" }}
              >
                {stat.value}
              </div>
              <div className="text-base font-semibold text-white mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-purple-300">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
