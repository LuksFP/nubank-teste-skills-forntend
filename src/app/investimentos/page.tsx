import Link from "next/link";
import { ArrowRight, TrendingUp, Check, DollarSign, Shield } from "lucide-react";

const products = [
  { name: "RDB Nubank", return: "100% CDI", risk: "Baixo", min: "R$ 1", tag: "Mais popular", tagColor: "#820AD1" },
  { name: "Fundos de Renda Fixa", return: "Até 110% CDI", risk: "Baixo", min: "R$ 100", tag: null, tagColor: null },
  { name: "Tesouro Direto", return: "IPCA+", risk: "Baixo", min: "R$ 30", tag: "Seguro", tagColor: "#4CAF50" },
  { name: "Fundos de Ações", return: "Variável", risk: "Alto", min: "R$ 100", tag: "Alto potencial", tagColor: "#FF9800" },
  { name: "ETFs", return: "Variável", risk: "Médio", min: "R$ 1", tag: null, tagColor: null },
  { name: "Criptomoedas", return: "Variável", risk: "Muito alto", min: "R$ 1", tag: "Novo", tagColor: "#E91E63" },
];

export default function InvestimentosPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #0a2012 0%, #1a4a2a 40%, #2e7d32 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
                style={{ background: "rgba(255,255,255,0.1)", color: "white", border: "1px solid rgba(255,255,255,0.2)" }}
              >
                <TrendingUp size={12} /> A partir de R$ 1
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                Invista seu dinheiro{" "}
                <span style={{ color: "#80FF80" }}>de forma simples</span>
              </h1>
              <p className="text-lg mb-8 leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                RDB, fundos de investimento, Tesouro Direto, ações, ETFs e criptomoedas. Tudo na palma da sua mão, com as menores taxas do mercado.
              </p>
              <Link
                href="#investir"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold"
                style={{ background: "white", color: "#2e7d32" }}
              >
                Começar a investir <ArrowRight size={18} />
              </Link>
            </div>

            {/* Portfolio visual */}
            <div
              className="rounded-2xl p-6 shadow-2xl"
              style={{
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <div className="text-white/70 text-sm mb-1">Minha carteira</div>
              <div className="text-3xl font-bold text-white mb-1">R$ 25.840,00</div>
              <div className="text-sm mb-6" style={{ color: "#80FF80" }}>+R$ 1.420,00 (+5,8%) este ano</div>

              <div className="space-y-3">
                {[
                  { name: "RDB Nubank", percent: 60, value: "R$ 15.504", color: "#4CAF50" },
                  { name: "Fundos de Ações", percent: 25, value: "R$ 6.460", color: "#2196F3" },
                  { name: "Cripto", percent: 15, value: "R$ 3.876", color: "#FF9800" },
                ].map((item) => (
                  <div key={item.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-white/80">{item.name}</span>
                      <span className="text-white font-medium">{item.value}</span>
                    </div>
                    <div className="h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.1)" }}>
                      <div
                        className="h-1.5 rounded-full"
                        style={{ width: `${item.percent}%`, background: item.color }}
                      />
                    </div>
                    <div className="text-right text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>
                      {item.percent}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Produtos de investimento
            </h2>
            <p className="text-lg text-gray-500">Para todos os perfis, do conservador ao arrojado</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <div
                key={product.name}
                className="card-hover rounded-2xl p-5 border bg-white relative overflow-hidden"
                style={{ borderColor: "#E8C6FF" }}
              >
                {product.tag && (
                  <div
                    className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-xs font-bold text-white"
                    style={{ background: product.tagColor! }}
                  >
                    {product.tag}
                  </div>
                )}
                <h3 className="font-bold text-gray-900 mb-3">{product.name}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Rendimento</span>
                    <span className="font-semibold text-gray-900">{product.return}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Risco</span>
                    <span className="font-semibold text-gray-900">{product.risk}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Mínimo</span>
                    <span className="font-semibold" style={{ color: "#820AD1" }}>{product.min}</span>
                  </div>
                </div>
                <Link
                  href="#investir"
                  className="block text-center text-sm font-semibold py-2 rounded-xl transition-all hover:scale-105"
                  style={{ background: "#F5E6FF", color: "#820AD1" }}
                >
                  Investir agora
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why invest with Nubank */}
      <section className="py-24" style={{ background: "#F8F5FA" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
            Por que investir pelo Nubank?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: DollarSign,
                title: "Sem taxas escondidas",
                desc: "Sem taxa de administração em vários produtos. Você fica com muito mais no final.",
              },
              {
                icon: Shield,
                title: "Segurança e regulamentação",
                desc: "Regulamentado pelo Banco Central e CVM. Seu patrimônio protegido e segregado.",
              },
              {
                icon: TrendingUp,
                title: "Diversificação fácil",
                desc: "Distribua seus investimentos em diferentes produtos com poucos cliques.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="card-hover rounded-2xl p-6 bg-white border"
                style={{ borderColor: "#E8C6FF" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "#F5E6FF" }}
                >
                  <item.icon size={22} style={{ color: "#820AD1" }} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
