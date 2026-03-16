const steps = [
  {
    number: "01",
    title: "Baixe o app",
    description: "Disponível gratuitamente para iOS e Android. Rápido, leve e seguro.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <circle cx="12" cy="17" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Crie sua conta",
    description: "Preencha seus dados em minutos. Sem burocracia, sem papelada, sem filas.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Peça seu cartão",
    description: "Solicite o cartão de crédito sem anuidade e receba em casa sem custo.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="1" y="4" width="22" height="16" rx="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Aproveite tudo",
    description: "Use, controle, invista e proteja tudo na palma da sua mão.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round" />
        <polyline points="22,4 12,14.01 9,11.01" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 overflow-hidden" style={{ background: "#F8F5FA" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "#820AD1" }}>
            Como funciona
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Simples assim
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line */}
          <div
            className="absolute top-12 left-1/4 right-1/4 h-px hidden lg:block"
            style={{ background: "linear-gradient(90deg, transparent, #820AD1, #820AD1, transparent)" }}
          />

          {steps.map((step, i) => (
            <div key={step.number} className="relative flex flex-col items-center text-center">
              {/* Icon circle */}
              <div
                className="relative z-10 w-24 h-24 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                style={{
                  background: i === 0
                    ? "linear-gradient(135deg, #820AD1, #5F0A9A)"
                    : "white",
                  color: i === 0 ? "white" : "#820AD1",
                  border: i === 0 ? "none" : "2px solid #E8C6FF",
                }}
              >
                {step.icon}
                <span
                  className="absolute -top-2 -right-2 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center"
                  style={{ background: "#820AD1", color: "white" }}
                >
                  {i + 1}
                </span>
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#pedircartao"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all hover:scale-105 active:scale-95 shadow-lg"
            style={{ background: "linear-gradient(135deg, #820AD1, #5F0A9A)", color: "white" }}
          >
            Começar agora — é grátis
          </a>
        </div>
      </div>
    </section>
  );
}
