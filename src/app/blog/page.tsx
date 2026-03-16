import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog do Nubank - Dicas de finanças e educação financeira",
  description: "Aprenda sobre finanças pessoais, investimentos, crédito e muito mais com os conteúdos do blog do Nubank.",
};

const featured = {
  category: "Investimentos",
  title: "Como o CDI funciona e por que ele importa para você",
  excerpt: "O CDI é uma das taxas mais importantes do sistema financeiro brasileiro. Entenda o que é, como funciona e por que o rendimento da sua conta digital está atrelado a ele.",
  readTime: "5 min",
  date: "14 mar 2026",
  color: "#820AD1",
};

const articles = [
  {
    category: "Cartão de crédito",
    title: "Score de crédito: como funciona e como melhorar o seu",
    excerpt: "Entenda o que é o score de crédito, como ele é calculado e veja dicas práticas para melhorar a sua pontuação.",
    readTime: "7 min",
    date: "12 mar 2026",
    color: "#E91E63",
  },
  {
    category: "Orçamento",
    title: "Regra 50-30-20: como organizar suas finanças de forma simples",
    excerpt: "Um método testado e comprovado para equilibrar gastos essenciais, desejos e investimentos.",
    readTime: "4 min",
    date: "10 mar 2026",
    color: "#FF9800",
  },
  {
    category: "Pix",
    title: "Tudo sobre o Pix: como usar com segurança e evitar golpes",
    excerpt: "O Pix revolucionou as transferências no Brasil. Saiba como usar com segurança e proteger seu dinheiro.",
    readTime: "6 min",
    date: "8 mar 2026",
    color: "#00BFA5",
  },
  {
    category: "Investimentos",
    title: "Tesouro Direto explicado para quem está começando",
    excerpt: "O Tesouro Direto é uma das formas mais seguras de investir. Veja como funciona e como começar com pouco.",
    readTime: "8 min",
    date: "6 mar 2026",
    color: "#4CAF50",
  },
  {
    category: "Educação financeira",
    title: "Reserva de emergência: quanto guardar e onde investir",
    excerpt: "A reserva de emergência é o primeiro passo para uma vida financeira saudável. Descubra quanto você precisa.",
    readTime: "5 min",
    date: "4 mar 2026",
    color: "#2196F3",
  },
  {
    category: "Crédito",
    title: "Parcelamento sem juros: quando vale a pena e quando evitar",
    excerpt: "O parcelamento pode ser aliado ou vilão. Entenda a diferença e aprenda a usar de forma inteligente.",
    readTime: "4 min",
    date: "2 mar 2026",
    color: "#820AD1",
  },
];

const categories = ["Todos", "Investimentos", "Cartão de crédito", "Orçamento", "Educação financeira", "Pix", "Crédito"];

export default function BlogPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #1C0032 0%, #3B0066 40%, #820AD1 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-purple-300 mb-4">Blog</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Aprenda sobre <span style={{ color: "#D4B4FF" }}>finanças</span>
          </h1>
          <p className="text-purple-200 text-lg">
            Conteúdo gratuito para você ter mais controle do seu dinheiro.
          </p>
        </div>
      </section>

      {/* Categories */}
      <div className="bg-white border-b border-gray-100 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className="flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-all"
                style={
                  i === 0
                    ? { background: "#820AD1", color: "white" }
                    : { background: "#F5E6FF", color: "#820AD1" }
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured article */}
        <div
          className="card-hover rounded-2xl p-8 lg:p-12 mb-12 relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #820AD1, #5F0A9A)" }}
        >
          <div
            className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-20 blur-3xl pointer-events-none"
            style={{ background: "#D4B4FF" }}
          />

          <div className="relative max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="px-3 py-1 rounded-full text-xs font-bold text-white"
                style={{ background: "rgba(255,255,255,0.2)" }}
              >
                Em destaque
              </span>
              <span
                className="px-3 py-1 rounded-full text-xs font-bold"
                style={{ background: "rgba(255,255,255,0.15)", color: "white" }}
              >
                <Tag size={10} className="inline mr-1" />
                {featured.category}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
              {featured.title}
            </h2>
            <p className="text-purple-200 mb-6 leading-relaxed">{featured.excerpt}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-purple-300 text-sm">
                <span className="flex items-center gap-1"><Clock size={13} /> {featured.readTime} de leitura</span>
                <span>{featured.date}</span>
              </div>
              <Link
                href="#"
                className="flex items-center gap-1 text-sm font-semibold text-white hover:gap-2 transition-all"
              >
                Ler artigo <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Articles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link
              key={article.title}
              href="#"
              className="card-hover bg-white rounded-2xl border overflow-hidden group block"
              style={{ borderColor: "#E8C6FF" }}
            >
              {/* Color bar */}
              <div className="h-1.5 w-full" style={{ background: article.color }} />

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="px-2.5 py-1 rounded-full text-xs font-semibold"
                    style={{ background: `${article.color}15`, color: article.color }}
                  >
                    {article.category}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#820AD1] transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4 leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> {article.readTime}
                  </span>
                  <span>{article.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load more */}
        <div className="text-center mt-12">
          <button
            className="px-8 py-3 rounded-full font-semibold text-sm border-2 transition-all hover:scale-105"
            style={{ borderColor: "#820AD1", color: "#820AD1" }}
          >
            Carregar mais artigos
          </button>
        </div>
      </div>
    </div>
  );
}
