import Link from "next/link";
import { ArrowRight, TrendingUp, Zap, Shield, Smartphone, DollarSign, Check } from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Rendimento automático",
    desc: "100% do CDI, todos os dias úteis. Mais que a poupança, sem precisar fazer nada.",
    highlight: "100% CDI",
  },
  {
    icon: Zap,
    title: "Pix grátis e ilimitado",
    desc: "Transfira para qualquer banco a qualquer hora, sem taxa e sem limite de operações.",
    highlight: "R$ 0",
  },
  {
    icon: Shield,
    title: "Segurança garantida",
    desc: "Conta coberta pelo FGC até R$ 250.000. Seus dados protegidos com criptografia.",
    highlight: "FGC",
  },
  {
    icon: Smartphone,
    title: "100% digital",
    desc: "Abra sua conta em minutos pelo celular. Sem ir ao banco, sem papelada.",
    highlight: "5 min",
  },
  {
    icon: DollarSign,
    title: "Zero mensalidade",
    desc: "Conta gratuita para sempre. Sem taxas de manutenção, sem cobranças surpresa.",
    highlight: "Grátis",
  },
  {
    icon: Check,
    title: "Boleto e recarga",
    desc: "Pague boletos, recarregue celular e faça compras com o débito Nubank.",
    highlight: "Tudo aqui",
  },
];

export default function ContaPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #003833 0%, #005548 40%, #00BFA5 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
                style={{ background: "rgba(255,255,255,0.1)", color: "white", border: "1px solid rgba(255,255,255,0.2)" }}
              >
                100% grátis · Sem mensalidade
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                Conta digital que{" "}
                <span style={{ color: "#80FFE8" }}>rende mais</span>
                <br />
                que a poupança.
              </h1>
              <p className="text-lg mb-8 leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                Sua conta sem mensalidade, com Pix gratuito e ilimitado, e rendimento automático de 100% do CDI. Dinheiro trabalhando para você, todo dia.
              </p>
              <Link
                href="#abrir-conta"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold"
                style={{ background: "white", color: "#005548" }}
              >
                Abrir conta grátis <ArrowRight size={18} />
              </Link>
            </div>

            {/* Account balance visual */}
            <div className="flex justify-center">
              <div
                className="w-full max-w-sm rounded-2xl p-6 shadow-2xl"
                style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.2)" }}
              >
                <div className="text-white/70 text-sm mb-1">Saldo disponível</div>
                <div className="text-4xl font-bold text-white mb-1">R$ 10.582,40</div>
                <div className="flex items-center gap-1.5 text-sm mb-6" style={{ color: "#80FFE8" }}>
                  <TrendingUp size={14} />
                  +R$ 84,20 rendeu este mês
                </div>

                <div className="space-y-3">
                  {[
                    { label: "Saldo total", value: "R$ 10.582,40" },
                    { label: "Rendimento diário", value: "+R$ 2,80" },
                    { label: "Rendimento mensal", value: "+R$ 84,20" },
                    { label: "Rendimento anual", value: "+R$ 1.080,00 est." },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-center py-2 border-b" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                      <span className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>{item.label}</span>
                      <span className="text-sm font-semibold text-white">{item.value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 text-xs text-center" style={{ color: "rgba(255,255,255,0.5)" }}>
                  100% CDI · Atualizado agora
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Tudo que você precisa em uma conta
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="card-hover rounded-2xl p-6 border bg-white"
                style={{ borderColor: "#E8C6FF" }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "#F5E6FF" }}
                  >
                    <f.icon size={22} style={{ color: "#820AD1" }} />
                  </div>
                  <div>
                    <div
                      className="inline-block px-2 py-0.5 rounded text-xs font-bold mb-2"
                      style={{ background: "#F5E6FF", color: "#820AD1" }}
                    >
                      {f.highlight}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1">{f.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CDI comparison */}
      <section className="py-24" style={{ background: "#F8F5FA" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Seu dinheiro rende mais com o Nubank
            </h2>
            <p className="text-lg text-gray-500">Comparação de rendimento anual para R$ 10.000</p>
          </div>

          <div className="space-y-4">
            {[
              { name: "Nubank Conta", percent: "100%", value: "R$ 1.080", bar: 100, color: "#820AD1" },
              { name: "Poupança", percent: "70%", value: "R$ 756", bar: 70, color: "#9CA3AF" },
              { name: "Banco tradicional", percent: "50%", value: "R$ 540", bar: 50, color: "#D1D5DB" },
            ].map((item) => (
              <div key={item.name} className="bg-white rounded-2xl p-5 border border-gray-100">
                <div className="flex justify-between items-center mb-3">
                  <div>
                    <div className="font-semibold text-gray-900">{item.name}</div>
                    <div className="text-sm text-gray-500">{item.percent} do CDI</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-lg" style={{ color: item.color }}>{item.value}</div>
                    <div className="text-xs text-gray-400">por ano</div>
                  </div>
                </div>
                <div className="h-2 rounded-full bg-gray-100">
                  <div
                    className="h-2 rounded-full transition-all"
                    style={{ width: `${item.bar}%`, background: item.color }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="#abrir-conta"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all hover:scale-105"
              style={{ background: "linear-gradient(135deg, #820AD1, #5F0A9A)" }}
            >
              Abrir minha conta grátis <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
