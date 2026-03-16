import Link from "next/link";
import { CreditCard, Wallet, Shield, TrendingUp, DollarSign, ArrowRight, Layers } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const products = [
  {
    icon: CreditCard,
    title: "Cartão de Crédito",
    description: "Sem anuidade para sempre. Controle tudo pelo app com limite inteligente.",
    features: ["Sem anuidade", "Cashback exclusivo", "Parcelamento sem juros"],
    href: "/cartao",
    accent: "#820AD1",
    bg: "#F5E6FF",
  },
  {
    icon: Wallet,
    title: "Conta Digital",
    description: "Conta gratuita com rendimento de 100% do CDI. Pix grátis e ilimitado.",
    features: ["Sem taxa mensal", "Rende 100% CDI", "Pix grátis ilimitado"],
    href: "/conta",
    accent: "#00BFA5",
    bg: "#E0F7F4",
  },
  {
    icon: Shield,
    title: "Seguros",
    description: "Proteção completa para você, sua família e seus bens. Simples e sem papelada.",
    features: ["Vida, auto, residência", "Contratação digital", "Suporte 24/7"],
    href: "/seguros",
    accent: "#E53935",
    bg: "#FFEBEE",
  },
  {
    icon: DollarSign,
    title: "Empréstimo Pessoal",
    description: "Crédito na hora que você precisa, com taxas justas e condições transparentes.",
    features: ["Aprovação rápida", "Taxas competitivas", "Parcelas fixas"],
    href: "/emprestimo",
    accent: "#F57C00",
    bg: "#FFF3E0",
  },
  {
    icon: TrendingUp,
    title: "Investimentos",
    description: "RDB, fundos, ações e muito mais na palma da mão, sem taxa de administração.",
    features: ["A partir de R$ 1", "Sem taxa", "Diversidade de produtos"],
    href: "/investimentos",
    accent: "#388E3C",
    bg: "#E8F5E9",
  },
];

export default function Products() {
  return (
    <section className="py-24 bg-white" id="produtos">
      {/* Purple top accent bar */}
      <div className="h-1 w-full" style={{ background: "linear-gradient(90deg, transparent, #820AD1, #A020D0, transparent)" }} aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        {/* Header */}
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <span className="section-label mb-4 justify-center">Nossos produtos</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mt-3 mb-4">
            Tudo que você precisa,{" "}
            <span className="text-gradient">num só lugar</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Do cartão de crédito aos investimentos, soluções completas para cada momento da sua vida financeira.
          </p>
        </AnimatedSection>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product, index) => (
            <AnimatedSection
              key={product.title}
              animation="fade-up"
              delay={index * 80}
            >
              <Link
                href={product.href}
                className="card-hover card-purple-border rounded-2xl p-6 group block h-full bg-white"
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                  style={{ background: product.bg }}
                >
                  <product.icon size={22} style={{ color: product.accent }} />
                </div>

                {/* Text */}
                <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-nu-purple transition-colors">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-1.5 mb-5">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-gray-600">
                      <span
                        className="inline-block w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: product.accent }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div
                  className="flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all"
                  style={{ color: product.accent }}
                >
                  Saiba mais <ArrowRight size={14} />
                </div>
              </Link>
            </AnimatedSection>
          ))}

          {/* Ultravioleta — dark card */}
          <AnimatedSection animation="fade-up" delay={products.length * 80}>
            <div
              className="card-hover rounded-2xl p-6 text-white relative overflow-hidden h-full"
              style={{ background: "linear-gradient(135deg, #1C0032 0%, #5F0A9A 100%)" }}
            >
              <div
                className="purple-blob w-48 h-48 top-[-40px] right-[-40px] opacity-30"
                style={{ filter: "blur(40px)" }}
                aria-hidden="true"
              />

              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 glass"
              >
                <Layers size={22} className="text-white" />
              </div>

              <span
                className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-3"
                style={{ background: "rgba(212,180,255,0.2)", color: "#D4B4FF" }}
              >
                Premium
              </span>

              <h3 className="text-base font-bold text-white mb-2">Ultravioleta</h3>
              <p className="text-sm text-purple-200 mb-5 leading-relaxed">
                Nosso cartão premium com cashback de 1% em tudo, acesso a salas VIP e benefícios Mastercard Black.
              </p>

              <Link
                href="/ultravioleta"
                className="flex items-center gap-1 text-sm font-semibold text-purple-300 hover:text-white transition-colors"
              >
                Conhecer <ArrowRight size={14} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
