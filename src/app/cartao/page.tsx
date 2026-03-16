import Link from "next/link";
import { ArrowRight, Check, Star, CreditCard, Smartphone, Shield, Zap } from "lucide-react";

const benefits = [
  { icon: Check, title: "Sem anuidade para sempre", desc: "Não existe taxa, não existe asterisco, não existe mensalidade escondida." },
  { icon: Zap, title: "Limite inteligente", desc: "Seu limite evolui conforme seu uso responsável. Sem burocracia." },
  { icon: Shield, title: "Segurança total", desc: "Bloqueie e desbloqueie pelo app. Notificação de cada compra em tempo real." },
  { icon: Smartphone, title: "Controle pelo app", desc: "Veja a fatura, parcele compras e altere o limite diretamente pelo celular." },
  { icon: CreditCard, title: "Cartão virtual", desc: "Para compras online com segurança máxima. Número diferente do físico." },
  { icon: Star, title: "Programa de pontos", desc: "Acumule pontos em cada compra e troque por passagens, produtos e mais." },
];

const plans = [
  {
    name: "Standard",
    price: "Grátis",
    subtitle: "Para começar",
    features: [
      "Sem anuidade",
      "Cartão físico e virtual",
      "App de controle completo",
      "Pix integrado",
      "Suporte 24/7",
    ],
    cta: "Pedir agora",
    highlighted: false,
  },
  {
    name: "Ultravioleta",
    price: "R$ 49/mês",
    subtitle: "Para quem quer mais",
    features: [
      "Tudo do Standard +",
      "Cashback de 1% em tudo",
      "Acesso a salas VIP",
      "Seguro de viagem incluso",
      "Atendimento prioritário",
      "Benefícios exclusivos Mastercard",
    ],
    cta: "Quero Ultravioleta",
    highlighted: true,
  },
];

export default function CartaoPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #1C0032 0%, #3B0066 40%, #820AD1 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl"
            style={{ background: "#A020D0" }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
                style={{ background: "rgba(255,255,255,0.1)", color: "white", border: "1px solid rgba(255,255,255,0.2)" }}
              >
                <Star size={12} fill="currentColor" /> Sem anuidade · Sem complicação
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                Cartão de crédito{" "}
                <span style={{ color: "#D4B4FF" }}>sem anuidade,</span>
                <br />
                para sempre.
              </h1>
              <p className="text-lg text-purple-200 mb-8 leading-relaxed">
                O cartão que não te cobra para existir. Controle tudo pelo app, com segurança total e benefícios reais.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#pedircartao"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-semibold"
                  style={{ background: "white", color: "#820AD1" }}
                >
                  Pedir meu cartão grátis <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Card visual */}
            <div className="flex justify-center">
              <div className="relative w-72">
                <div className="absolute inset-0 rounded-3xl blur-3xl opacity-40" style={{ background: "#820AD1" }} />
                <div
                  className="relative rounded-2xl p-6 animate-float"
                  style={{
                    background: "linear-gradient(135deg, #1C0032 0%, #3B0066 50%, #5F0A9A 100%)",
                    boxShadow: "0 25px 60px rgba(130,10,209,0.5)",
                    minHeight: "180px",
                  }}
                >
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-white/50 font-bold text-sm">nubank</span>
                    <div className="text-white/60">
                      <svg width="48" height="30" viewBox="0 0 48 30">
                        <circle cx="18" cy="15" r="14" fill="rgba(255,0,0,0.5)" />
                        <circle cx="30" cy="15" r="14" fill="rgba(255,165,0,0.5)" />
                      </svg>
                    </div>
                  </div>
                  <div className="w-10 h-8 rounded bg-gradient-to-br from-yellow-300 to-yellow-500 opacity-80 mb-6" />
                  <div className="text-white font-mono text-base tracking-widest mb-4 opacity-80">
                    •••• •••• •••• 1234
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-white/40 text-xs uppercase">Titular</div>
                      <div className="text-white text-sm font-medium">SEU NOME</div>
                    </div>
                    <div className="text-right">
                      <div className="text-white/40 text-xs uppercase">Validade</div>
                      <div className="text-white text-sm">12/30</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Por que o Nubank é diferente?
            </h2>
            <p className="text-lg text-gray-500">Benefícios reais, sem letras miúdas.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="card-hover bg-white rounded-2xl p-6 border"
                style={{ borderColor: "#E8C6FF" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "#F5E6FF" }}
                >
                  <benefit.icon size={22} style={{ color: "#820AD1" }} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-24" style={{ background: "#F8F5FA" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Escolha seu cartão
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="rounded-2xl p-8 relative overflow-hidden"
                style={{
                  background: plan.highlighted
                    ? "linear-gradient(135deg, #820AD1, #1C0032)"
                    : "white",
                  border: plan.highlighted ? "none" : "2px solid #E8C6FF",
                }}
              >
                {plan.highlighted && (
                  <div
                    className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold"
                    style={{ background: "rgba(255,255,255,0.2)", color: "white" }}
                  >
                    Recomendado
                  </div>
                )}

                <h3 className={`text-xl font-bold mb-1 ${plan.highlighted ? "text-white" : "text-gray-900"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${plan.highlighted ? "text-purple-300" : "text-gray-500"}`}>
                  {plan.subtitle}
                </p>
                <div className={`text-3xl font-bold mb-6 ${plan.highlighted ? "text-white" : "text-gray-900"}`}>
                  {plan.price}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <Check
                        size={16}
                        className="flex-shrink-0"
                        style={{ color: plan.highlighted ? "#D4B4FF" : "#820AD1" }}
                      />
                      <span className={plan.highlighted ? "text-purple-100" : "text-gray-700"}>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="#pedircartao"
                  className="block text-center px-6 py-3 rounded-full font-semibold text-sm transition-all hover:scale-105"
                  style={
                    plan.highlighted
                      ? { background: "white", color: "#820AD1" }
                      : { background: "#820AD1", color: "white" }
                  }
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
