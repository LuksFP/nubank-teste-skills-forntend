import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Star, Zap, Globe, Headphones, Gift, Shield, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Nubank Ultravioleta - Cartão de crédito premium sem complicação",
  description: "O cartão Nubank Ultravioleta com cashback de 1% em tudo, acesso a salas VIP e benefícios exclusivos Mastercard Black.",
};

const perks = [
  {
    icon: TrendingUp,
    title: "1% de cashback em tudo",
    desc: "Ganhe 1% de volta em todas as compras, direto na sua conta como NuCash.",
  },
  {
    icon: Globe,
    title: "Acesso a salas VIP",
    desc: "Mais de 1.300 salas VIP em aeroportos no mundo todo com o Mastercard Travel Pass.",
  },
  {
    icon: Shield,
    title: "Seguro de viagem incluso",
    desc: "Cobertura automática para viagens internacionais ao comprar passagem com o cartão.",
  },
  {
    icon: Headphones,
    title: "Atendimento prioritário",
    desc: "Linha exclusiva de atendimento, sem fila, com especialistas dedicados.",
  },
  {
    icon: Gift,
    title: "Benefícios Mastercard Black",
    desc: "Acesso ao Mastercard Surpreenda, concierge 24h e muito mais.",
  },
  {
    icon: Zap,
    title: "Limite diferenciado",
    desc: "Limites mais altos e revisão proativa conforme seu perfil de uso.",
  },
];

const comparison = [
  { feature: "Anuidade", standard: "R$ 0", ultravioleta: "R$ 49/mês" },
  { feature: "Cashback", standard: "Não incluso", ultravioleta: "1% em tudo" },
  { feature: "Salas VIP", standard: "Não incluso", ultravioleta: "Ilimitado" },
  { feature: "Seguro viagem", standard: "Não incluso", ultravioleta: "Incluso" },
  { feature: "Atendimento", standard: "Padrão", ultravioleta: "Prioritário 24/7" },
  { feature: "Mastercard", standard: "Platinum", ultravioleta: "Black" },
  { feature: "Cartão virtual", standard: "Sim", ultravioleta: "Sim" },
  { feature: "Pix integrado", standard: "Sim", ultravioleta: "Sim" },
];

export default function UltravioletaPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section
        className="min-h-screen flex items-center relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #0a0014 0%, #1C0032 40%, #3B0066 70%, #5F0A9A 100%)" }}
      >
        {/* Animated background orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-20 right-10 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl animate-float"
            style={{ background: "radial-gradient(circle, #820AD1, transparent)" }}
          />
          <div
            className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full opacity-15 blur-3xl"
            style={{ background: "#D4B4FF", animationDelay: "2s" }}
          />
          {/* Particle dots */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full opacity-30"
              style={{
                background: "white",
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              {/* Badge */}
              <div className="flex items-center gap-2 mb-6">
                <div
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"
                  style={{ background: "rgba(212,180,255,0.15)", color: "#D4B4FF", border: "1px solid rgba(212,180,255,0.3)" }}
                >
                  <Star size={10} fill="currentColor" />
                  Mastercard Black · Premium
                </div>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-none">
                Ultra
                <br />
                <span style={{
                  background: "linear-gradient(135deg, #D4B4FF, #A020D0, #FF94FF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  violeta
                </span>
              </h1>

              <p className="text-xl text-purple-200 mb-4 leading-relaxed max-w-lg">
                O cartão Nubank premium. Cashback de 1% em tudo, acesso a salas VIP e benefícios exclusivos Mastercard Black.
              </p>

              <p className="text-sm text-purple-400 mb-8">
                Por apenas <strong className="text-purple-200">R$ 49 por mês</strong> — e o valor é totalmente recuperável com o cashback.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#pedir"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base group transition-all hover:scale-105"
                  style={{ background: "linear-gradient(135deg, #D4B4FF, #820AD1)", color: "white" }}
                >
                  Pedir Ultravioleta
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="#comparar"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-base border transition-all hover:bg-white/5"
                  style={{ color: "#D4B4FF", borderColor: "rgba(212,180,255,0.3)" }}
                >
                  Comparar planos
                </a>
              </div>
            </div>

            {/* Premium card visual */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-80">
                {/* Glow */}
                <div
                  className="absolute inset-0 rounded-3xl blur-3xl opacity-60"
                  style={{ background: "linear-gradient(135deg, #820AD1, #D4B4FF)" }}
                />

                {/* Card */}
                <div
                  className="relative rounded-2xl p-7 animate-float"
                  style={{
                    background: "linear-gradient(135deg, #0a0014 0%, #1C0032 30%, #3B0066 60%, #5F0A9A 100%)",
                    boxShadow: "0 30px 80px rgba(130,10,209,0.6), inset 0 1px 0 rgba(255,255,255,0.1)",
                    minHeight: "210px",
                  }}
                >
                  {/* Holographic effect overlay */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-20"
                    style={{
                      background: "linear-gradient(45deg, transparent 30%, rgba(212,180,255,0.3) 50%, transparent 70%)",
                    }}
                  />

                  <div className="relative">
                    <div className="flex justify-between items-start mb-8">
                      <span className="font-black text-lg tracking-widest" style={{ color: "#D4B4FF" }}>
                        nubank
                      </span>
                      <div className="flex flex-col items-end gap-1">
                        <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#D4B4FF" }}>
                          Ultravioleta
                        </span>
                        <svg width="52" height="32" viewBox="0 0 48 30" opacity="0.7">
                          <circle cx="18" cy="15" r="14" fill="rgba(180,0,100,0.6)" />
                          <circle cx="30" cy="15" r="14" fill="rgba(255,80,0,0.6)" />
                        </svg>
                      </div>
                    </div>

                    {/* Chip */}
                    <div className="w-12 h-9 rounded-md mb-6"
                      style={{ background: "linear-gradient(135deg, #C8A800, #FFD700)", opacity: 0.9 }} />

                    <div className="font-mono text-base tracking-[0.2em] mb-5 opacity-70" style={{ color: "#D4B4FF" }}>
                      •••• •••• •••• 9999
                    </div>

                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-xs uppercase tracking-wider mb-0.5" style={{ color: "rgba(212,180,255,0.5)" }}>
                          Titular
                        </div>
                        <div className="font-semibold text-sm" style={{ color: "#D4B4FF" }}>SEU NOME</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-bold uppercase" style={{ color: "rgba(212,180,255,0.7)" }}>
                          BLACK
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating cashback badge */}
                <div
                  className="absolute -bottom-4 -right-4 px-4 py-2 rounded-2xl text-center shadow-2xl"
                  style={{
                    background: "linear-gradient(135deg, #820AD1, #D4B4FF)",
                    color: "white",
                  }}
                >
                  <div className="text-lg font-black">1%</div>
                  <div className="text-xs">cashback</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "#820AD1" }}>
              Benefícios exclusivos
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Tudo que o Ultravioleta oferece
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((perk, i) => (
              <div
                key={perk.title}
                className="card-hover rounded-2xl p-6 relative overflow-hidden"
                style={{
                  background: i === 0
                    ? "linear-gradient(135deg, #820AD1, #5F0A9A)"
                    : "white",
                  border: i !== 0 ? "1px solid #E8C6FF" : "none",
                }}
              >
                {i === 0 && (
                  <div
                    className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-20 blur-2xl"
                    style={{ background: "#D4B4FF" }}
                  />
                )}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: i === 0 ? "rgba(255,255,255,0.15)" : "#F5E6FF",
                  }}
                >
                  <perk.icon size={22} style={{ color: i === 0 ? "white" : "#820AD1" }} />
                </div>
                <h3 className={`font-bold mb-2 ${i === 0 ? "text-white" : "text-gray-900"}`}>
                  {perk.title}
                </h3>
                <p className={`text-sm leading-relaxed ${i === 0 ? "text-purple-200" : "text-gray-500"}`}>
                  {perk.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24" id="comparar" style={{ background: "#F8F5FA" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Standard vs Ultravioleta
            </h2>
            <p className="text-gray-500">Compare e escolha o melhor para você</p>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            {/* Header */}
            <div className="grid grid-cols-3 border-b border-gray-100">
              <div className="p-4 font-semibold text-gray-500 text-sm">Recurso</div>
              <div className="p-4 text-center border-l border-gray-100">
                <div className="font-bold text-gray-900">Standard</div>
                <div className="text-sm text-gray-500">Grátis</div>
              </div>
              <div
                className="p-4 text-center border-l"
                style={{ borderColor: "#E8C6FF", background: "linear-gradient(135deg, #F5E6FF, white)" }}
              >
                <div className="font-bold" style={{ color: "#820AD1" }}>Ultravioleta</div>
                <div className="text-sm" style={{ color: "#820AD1" }}>R$ 49/mês</div>
              </div>
            </div>

            {comparison.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 border-b border-gray-50 ${i % 2 === 0 ? "bg-gray-50/30" : ""}`}
              >
                <div className="p-4 text-sm text-gray-700 font-medium">{row.feature}</div>
                <div className="p-4 text-center border-l border-gray-100 text-sm text-gray-600">
                  {row.standard === "Sim" ? (
                    <Check size={16} className="mx-auto" style={{ color: "#820AD1" }} />
                  ) : row.standard === "Não incluso" ? (
                    <span className="text-gray-300">—</span>
                  ) : (
                    row.standard
                  )}
                </div>
                <div className="p-4 text-center border-l text-sm font-semibold" style={{ borderColor: "#E8C6FF", color: "#820AD1" }}>
                  {row.ultravioleta === "Sim" || row.ultravioleta === "Ilimitado" ? (
                    <span className="flex items-center justify-center gap-1">
                      <Check size={16} />
                      {row.ultravioleta !== "Sim" && row.ultravioleta}
                    </span>
                  ) : (
                    row.ultravioleta
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="#pedir"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white transition-all hover:scale-105"
              style={{ background: "linear-gradient(135deg, #820AD1, #5F0A9A)" }}
            >
              Quero o Ultravioleta <ArrowRight size={18} />
            </Link>
            <p className="text-sm text-gray-400 mt-3">
              O cashback de 1% pode recuperar até R$ 58 por mês em compras de R$ 5.800.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
