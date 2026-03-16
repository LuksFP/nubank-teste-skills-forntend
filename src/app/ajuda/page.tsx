import type { Metadata } from "next";
import Link from "next/link";
import { Search, MessageCircle, Phone, Mail, ChevronRight, CreditCard, Wallet, Shield, DollarSign, TrendingUp, Settings } from "lucide-react";

export const metadata: Metadata = {
  title: "Central de Ajuda Nubank - Suporte e atendimento",
  description: "Encontre respostas para suas dúvidas sobre cartão, conta, investimentos e muito mais na central de ajuda do Nubank.",
};

const categories = [
  { icon: CreditCard, title: "Cartão de crédito", articles: 42, color: "#820AD1" },
  { icon: Wallet, title: "Conta digital", articles: 35, color: "#00BFA5" },
  { icon: TrendingUp, title: "Investimentos", articles: 28, color: "#4CAF50" },
  { icon: DollarSign, title: "Empréstimo", articles: 19, color: "#FF9800" },
  { icon: Shield, title: "Seguros", articles: 24, color: "#E91E63" },
  { icon: Settings, title: "Conta e segurança", articles: 31, color: "#2196F3" },
];

const popular = [
  "Como aumentar meu limite do cartão?",
  "Como fazer um Pix?",
  "Como contestar uma cobrança?",
  "Como bloquear meu cartão?",
  "Como gerar um boleto?",
  "Como acessar minha fatura?",
  "Como ativar o cartão físico?",
  "Como mudar a senha do app?",
];

export default function AjudaPage() {
  return (
    <div className="pt-20">
      {/* Hero with search */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #1C0032 0%, #3B0066 40%, #820AD1 100%)" }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-purple-300 mb-4">Central de Ajuda</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Como podemos <span style={{ color: "#D4B4FF" }}>ajudar?</span>
          </h1>
          <p className="text-purple-200 mb-8">
            Busque sua dúvida ou explore as categorias abaixo
          </p>

          {/* Search bar */}
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Ex: como contestar uma cobrança..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl text-gray-900 text-base shadow-xl focus:outline-none focus:ring-2"
              style={{ '--tw-ring-color': '#820AD1' } as React.CSSProperties}
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Explorar por categoria</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.title}
                href="#"
                className="card-hover rounded-2xl p-5 text-center border bg-white group block"
                style={{ borderColor: "#E8C6FF" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{ background: `${cat.color}15` }}
                >
                  <cat.icon size={22} style={{ color: cat.color }} />
                </div>
                <div className="text-sm font-semibold text-gray-900 group-hover:text-[#820AD1] transition-colors mb-1">
                  {cat.title}
                </div>
                <div className="text-xs text-gray-400">{cat.articles} artigos</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular articles */}
      <section className="py-16" style={{ background: "#F8F5FA" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Perguntas mais populares</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {popular.map((question) => (
              <Link
                key={question}
                href="#"
                className="bg-white rounded-xl px-5 py-4 flex items-center justify-between border group card-hover"
                style={{ borderColor: "#E8C6FF" }}
              >
                <span className="text-sm font-medium text-gray-700 group-hover:text-[#820AD1] transition-colors">
                  {question}
                </span>
                <ChevronRight size={16} className="text-gray-300 group-hover:text-[#820AD1] flex-shrink-0 ml-2 transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact channels */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Não encontrou o que precisava?</h2>
            <p className="text-gray-500">Nossa equipe está disponível 24 horas, 7 dias por semana.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                icon: MessageCircle,
                title: "Chat no app",
                desc: "A forma mais rápida. Atendimento humano direto no app Nubank.",
                cta: "Abrir chat",
                primary: true,
              },
              {
                icon: Phone,
                title: "Telefone",
                desc: "0800 591 2117 (gratuito, 24h/7d)",
                cta: "Ligar agora",
                primary: false,
              },
              {
                icon: Mail,
                title: "E-mail",
                desc: "meajuda@nubank.com.br — Resposta em até 24h.",
                cta: "Enviar e-mail",
                primary: false,
              },
            ].map((channel) => (
              <div
                key={channel.title}
                className="rounded-2xl p-6 text-center"
                style={{
                  background: channel.primary ? "linear-gradient(135deg, #820AD1, #5F0A9A)" : "white",
                  border: channel.primary ? "none" : "1px solid #E8C6FF",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: channel.primary ? "rgba(255,255,255,0.15)" : "#F5E6FF" }}
                >
                  <channel.icon size={22} style={{ color: channel.primary ? "white" : "#820AD1" }} />
                </div>
                <h3 className={`font-bold mb-2 ${channel.primary ? "text-white" : "text-gray-900"}`}>
                  {channel.title}
                </h3>
                <p className={`text-sm mb-4 ${channel.primary ? "text-purple-200" : "text-gray-500"}`}>
                  {channel.desc}
                </p>
                <button
                  className="px-5 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105"
                  style={
                    channel.primary
                      ? { background: "white", color: "#820AD1" }
                      : { background: "#820AD1", color: "white" }
                  }
                >
                  {channel.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
