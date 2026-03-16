import Link from "next/link";
import { CreditCard, Wallet, Shield, TrendingUp, DollarSign, ArrowRight } from "lucide-react";

const products = [
  {
    icon: CreditCard,
    title: "Cartão de Crédito",
    description: "Sem anuidade para sempre. Controle tudo pelo app com limite inteligente.",
    features: ["Sem anuidade", "Cashback exclusivo", "Parcelamento sem juros"],
    href: "/cartao",
    color: "#820AD1",
    bg: "from-purple-50 to-white",
  },
  {
    icon: Wallet,
    title: "Conta Digital",
    description: "Conta gratuita com rendimento de 100% do CDI. Transferências sem custo.",
    features: ["Sem taxa mensal", "Rende 100% CDI", "Pix grátis e ilimitado"],
    href: "/conta",
    color: "#00BFA5",
    bg: "from-teal-50 to-white",
  },
  {
    icon: Shield,
    title: "Seguros",
    description: "Proteção completa para você, sua família e seus bens. Simples e sem papelada.",
    features: ["Vida, auto, residência", "Contratação 100% digital", "Suporte 24/7"],
    href: "/seguros",
    color: "#F44336",
    bg: "from-red-50 to-white",
  },
  {
    icon: DollarSign,
    title: "Empréstimo Pessoal",
    description: "Crédito na hora que você precisa, com taxas justas e condições transparentes.",
    features: ["Aprovação rápida", "Taxas competitivas", "Parcelas fixas"],
    href: "/emprestimo",
    color: "#FF9800",
    bg: "from-orange-50 to-white",
  },
  {
    icon: TrendingUp,
    title: "Investimentos",
    description: "Invista com simplicidade. RDB, fundos, ações e muito mais na palma da mão.",
    features: ["A partir de R$ 1", "Sem taxa de administração", "Diversidade de produtos"],
    href: "/investimentos",
    color: "#4CAF50",
    bg: "from-green-50 to-white",
  },
];

export default function Products() {
  return (
    <section className="py-24 bg-white" id="produtos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "#820AD1" }}>
            Nossos produtos
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Tudo que você precisa,{" "}
            <span style={{ color: "#820AD1" }}>num só lugar</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Do cartão de crédito aos investimentos, temos soluções financeiras completas
            para cada momento da sua vida.
          </p>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Link
              key={product.title}
              href={product.href}
              className={`card-hover bg-gradient-to-br ${product.bg} rounded-2xl p-6 border border-gray-100 group block`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${product.color}15` }}
              >
                <product.icon size={24} style={{ color: product.color }} />
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#820AD1] transition-colors">
                {product.title}
              </h3>
              <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                {product.description}
              </p>

              <ul className="space-y-1.5 mb-5">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-xs text-gray-600">
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: product.color }}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <div
                className="flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all"
                style={{ color: product.color }}
              >
                Saiba mais
                <ArrowRight size={14} />
              </div>
            </Link>
          ))}

          {/* Ultravioleta card */}
          <div
            className="card-hover rounded-2xl p-6 text-white md:col-span-2 lg:col-span-1 relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #1C0032 0%, #5F0A9A 100%)" }}
          >
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10 blur-2xl"
              style={{ background: "#A020D0", transform: "translate(20%, -20%)" }} />
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 border"
              style={{ background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)" }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div
              className="text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-full inline-block mb-3"
              style={{ background: "rgba(255,255,255,0.15)", color: "#D4B4FF" }}
            >
              Premium
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Ultravioleta</h3>
            <p className="text-sm text-purple-200 mb-4 leading-relaxed">
              Nosso cartão premium com benefícios exclusivos, cashback de 1% em tudo e atendimento prioritário.
            </p>
            <Link
              href="/ultravioleta"
              className="flex items-center gap-1 text-sm font-semibold text-purple-300 hover:text-white transition-colors"
            >
              Conhecer
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
