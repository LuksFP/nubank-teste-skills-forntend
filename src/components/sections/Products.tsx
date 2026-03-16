"use client";

import Link from "next/link";
import { CreditCard, Wallet, Shield, TrendingUp, DollarSign, ArrowRight, Layers } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const products = [
  {
    icon: CreditCard,
    title: "Cartão de Crédito",
    description: "Sem anuidade para sempre. Limite inteligente, controle total pelo app.",
    features: ["Sem anuidade", "Cashback exclusivo", "Parcelamento sem juros"],
    href: "/cartao",
    accent: "#820AD1",
    tag: "Mais popular",
  },
  {
    icon: Wallet,
    title: "Conta Digital",
    description: "Rendimento automático de 100% do CDI. Pix grátis e ilimitado.",
    features: ["Grátis para sempre", "100% CDI", "Pix ilimitado"],
    href: "/conta",
    accent: "#00BFA5",
    tag: null,
  },
  {
    icon: Shield,
    title: "Seguros",
    description: "Vida, auto e residência contratados pelo app em minutos.",
    features: ["Vários tipos", "100% digital", "Suporte 24/7"],
    href: "/seguros",
    accent: "#E53935",
    tag: null,
  },
  {
    icon: DollarSign,
    title: "Empréstimo",
    description: "Crédito aprovado em minutos com taxas transparentes e parcelas fixas.",
    features: ["Aprovação rápida", "Taxas justas", "Sem surpresas"],
    href: "/emprestimo",
    accent: "#F57C00",
    tag: null,
  },
  {
    icon: TrendingUp,
    title: "Investimentos",
    description: "Invista a partir de R$ 1 em RDB, fundos, ações e criptomoedas.",
    features: ["A partir de R$ 1", "Sem taxa", "Diversidade"],
    href: "/investimentos",
    accent: "#388E3C",
    tag: "Novo",
  },
];

export default function Products() {
  return (
    <section className="relative py-28 bg-white overflow-hidden" id="produtos">
      {/* Top purple stripe */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: "linear-gradient(90deg, transparent 0%, #820AD1 30%, #C050FF 70%, transparent 100%)" }}
        aria-hidden="true"
      />

      {/* Faint background pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #820AD1 1px, transparent 0)",
          backgroundSize: "36px 36px",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <AnimatedSection animation="fade-up" className="max-w-2xl mx-auto text-center mb-16">
          <span className="section-label justify-center mb-5">Nossos produtos</span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight mt-2 mb-4">
            Tudo que você precisa,{" "}
            <br className="hidden sm:block" />
            <span className="text-gradient">num só lugar</span>
          </h2>
          <p className="text-lg text-gray-500">
            Soluções financeiras completas para cada momento da sua vida.
          </p>
        </AnimatedSection>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((p, i) => (
            <AnimatedSection key={p.title} animation="fade-up" delay={i * 70}>
              <Link
                href={p.href}
                className="group block h-full rounded-3xl bg-white p-6 relative overflow-hidden transition-all duration-300 hover:-translate-y-2"
                style={{
                  border: "1.5px solid #EDE4F8",
                  boxShadow: "0 2px 12px rgba(130,10,209,0.06)",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = p.accent + "55";
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 40px ${p.accent}20`;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#EDE4F8";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(130,10,209,0.06)";
                }}
              >
                {/* Tag */}
                {p.tag && (
                  <div
                    className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider text-white"
                    style={{ background: p.accent }}
                  >
                    {p.tag}
                  </div>
                )}

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: p.accent + "18" }}
                >
                  <p.icon size={22} style={{ color: p.accent }} />
                </div>

                <h3
                  className="text-base font-black text-gray-900 mb-2 transition-colors"
                  style={{ lineHeight: 1.3 }}
                >
                  {p.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  {p.description}
                </p>

                {/* Features */}
                <ul className="space-y-1.5 mb-6">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-gray-600">
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: p.accent }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Footer CTA */}
                <div
                  className="flex items-center gap-1 text-sm font-bold group-hover:gap-2 transition-all"
                  style={{ color: p.accent }}
                >
                  Conhecer <ArrowRight size={14} />
                </div>

                {/* Bottom accent bar on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-3xl"
                  style={{ background: `linear-gradient(90deg, ${p.accent}, transparent)` }}
                />
              </Link>
            </AnimatedSection>
          ))}

          {/* Ultravioleta dark card */}
          <AnimatedSection animation="fade-up" delay={products.length * 70}>
            <div
              className="group block h-full rounded-3xl p-6 relative overflow-hidden transition-all duration-300 hover:-translate-y-2"
              style={{
                background: "linear-gradient(135deg, #0d0020 0%, #1C0032 40%, #3B0066 75%, #5F0A9A 100%)",
                boxShadow: "0 8px 32px rgba(130,10,209,0.3)",
              }}
            >
              {/* Sheen */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"
                style={{
                  background: "linear-gradient(135deg, rgba(212,180,255,0.08), transparent 60%)",
                }}
              />

              <div
                className="absolute -top-8 -right-8 w-36 h-36 rounded-full opacity-20"
                style={{ background: "radial-gradient(circle, #A020D0, transparent)" }}
                aria-hidden="true"
              />

              <div className="relative">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 glass">
                  <Layers size={22} className="text-white" />
                </div>

                <span className="nu-tag nu-tag-dark text-[10px] mb-3 inline-flex">
                  Premium · Mastercard Black
                </span>

                <h3 className="text-base font-black text-white mt-3 mb-2">
                  Ultravioleta
                </h3>
                <p className="text-sm text-purple-300 leading-relaxed mb-5">
                  Cashback de 1% em tudo, acesso a salas VIP e benefícios exclusivos.
                </p>

                <ul className="space-y-1.5 mb-6">
                  {["1% cashback em tudo", "Salas VIP em aeroportos", "Mastercard Black"].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-purple-300">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-purple-400" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/ultravioleta"
                  className="flex items-center gap-1 text-sm font-bold text-purple-300 hover:text-white hover:gap-2 transition-all"
                >
                  Conhecer <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
