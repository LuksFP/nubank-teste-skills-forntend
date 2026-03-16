import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Users, Globe, Heart, Zap, TrendingUp, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre o Nubank - Nossa missão e história",
  description: "Conheça a história do Nubank, nossa missão de simplificar a vida financeira das pessoas e os valores que guiam nosso trabalho.",
};

const values = [
  {
    icon: Heart,
    title: "Foco no cliente",
    desc: "Cada decisão começa com uma pergunta: isso é bom para o cliente? Trabalhamos incansavelmente para criar experiências que as pessoas amam.",
  },
  {
    icon: Zap,
    title: "Execução inteligente",
    desc: "Acreditamos em fazer mais com menos. Somos uma empresa de tecnologia com cultura de eficiência e resolução de problemas complexos.",
  },
  {
    icon: Globe,
    title: "Diversidade e inclusão",
    desc: "Construímos uma empresa onde todos se sentem pertencentes. Diversidade de pensamentos e experiências nos torna melhores.",
  },
  {
    icon: Award,
    title: "Integridade",
    desc: "Fazemos o que é certo, mesmo quando é difícil. Somos transparentes com nossos clientes, parceiros e entre nós mesmos.",
  },
];

const milestones = [
  { year: "2013", event: "Fundado em São Paulo por David Vélez, Cristina Junqueira e Edward Wible." },
  { year: "2014", event: "Lançamento do cartão de crédito sem anuidade. Mais de 1 milhão de pedidos na lista de espera." },
  { year: "2017", event: "Chegamos a 5 milhões de clientes e lançamos a conta digital." },
  { year: "2019", event: "10 milhões de clientes. Expansão para México e Argentina." },
  { year: "2021", event: "IPO na NYSE. Nubank se torna a maior fintech da América Latina." },
  { year: "2022", event: "50 milhões de clientes. Chegamos à Colômbia." },
  { year: "2024", event: "Mais de 100 milhões de clientes em todo o mundo." },
];

const leadership = [
  { name: "David Vélez", role: "CEO e Co-fundador", initial: "D" },
  { name: "Cristina Junqueira", role: "Co-fundadora", initial: "C" },
  { name: "Edward Wible", role: "CTO e Co-fundador", initial: "E" },
  { name: "Jorg Friedemann", role: "CFO", initial: "J" },
];

export default function SobrePage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #1C0032 0%, #3B0066 40%, #820AD1 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-15 blur-3xl"
            style={{ background: "#A020D0" }}
          />
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-purple-300 mb-4">
            Quem somos
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Lutamos contra a{" "}
            <span style={{ color: "#D4B4FF" }}>complexidade financeira</span>
          </h1>
          <p className="text-xl text-purple-200 leading-relaxed max-w-2xl mx-auto">
            Nossa missão é lutar contra a complexidade para devolver às pessoas o controle sobre a sua vida financeira.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: "#820AD1" }}>
                Nossa história
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Nascemos para simplificar
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  O Nubank foi fundado em 2013 com uma ideia simples: o sistema bancário brasileiro era excessivamente complexo, caro e excludente. Queríamos mudar isso.
                </p>
                <p>
                  Com cartão de crédito sem anuidade e um app que colocava o controle nas mãos dos clientes, revolucionamos o mercado. A lista de espera chegou a 1 milhão de pessoas antes mesmo de lançarmos oficialmente.
                </p>
                <p>
                  Hoje, com mais de 100 milhões de clientes em Brasil, México, Colômbia e Argentina, somos a maior fintech da América Latina e uma das maiores do mundo — sem nunca perder de vista nossa missão original.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Users, value: "100M+", label: "clientes", color: "#820AD1" },
                { icon: Globe, value: "4", label: "países", color: "#00BFA5" },
                { icon: TrendingUp, value: "NYSE", label: "listada na bolsa", color: "#FF9800" },
                { icon: Award, value: "#1", label: "fintech LatAm", color: "#4CAF50" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="card-hover rounded-2xl p-6 text-center border bg-white"
                  style={{ borderColor: "#E8C6FF" }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                    style={{ background: `${stat.color}15` }}
                  >
                    <stat.icon size={22} style={{ color: stat.color }} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24" style={{ background: "#F8F5FA" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "#820AD1" }}>
              Nossos valores
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              O que nos guia todo dia
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <div
                key={value.title}
                className="card-hover rounded-2xl p-8"
                style={{
                  background: i % 2 === 0
                    ? "linear-gradient(135deg, #820AD1, #5F0A9A)"
                    : "white",
                  border: i % 2 !== 0 ? "1px solid #E8C6FF" : "none",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: i % 2 === 0 ? "rgba(255,255,255,0.15)" : "#F5E6FF" }}
                >
                  <value.icon size={22} style={{ color: i % 2 === 0 ? "white" : "#820AD1" }} />
                </div>
                <h3 className={`text-xl font-bold mb-3 ${i % 2 === 0 ? "text-white" : "text-gray-900"}`}>
                  {value.title}
                </h3>
                <p className={`leading-relaxed ${i % 2 === 0 ? "text-purple-200" : "text-gray-500"}`}>
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "#820AD1" }}>
              Nossa trajetória
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              11 anos de história
            </h2>
          </div>

          <div className="relative">
            {/* Line */}
            <div
              className="absolute left-16 top-0 bottom-0 w-0.5 hidden sm:block"
              style={{ background: "linear-gradient(to bottom, #820AD1, transparent)" }}
            />

            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={m.year} className="flex gap-6 sm:gap-10">
                  {/* Year */}
                  <div className="flex-shrink-0 w-16 sm:w-24 text-right">
                    <div
                      className="inline-block px-2 py-1 rounded-lg text-sm font-bold"
                      style={{ background: "#F5E6FF", color: "#820AD1" }}
                    >
                      {m.year}
                    </div>
                  </div>

                  {/* Dot (desktop) */}
                  <div className="relative hidden sm:block">
                    <div
                      className="w-4 h-4 rounded-full border-2 border-white shadow-md mt-1"
                      style={{ background: i === milestones.length - 1 ? "#820AD1" : "#D4B4FF" }}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-2">
                    <p className="text-gray-700 leading-relaxed">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24" style={{ background: "#F8F5FA" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "#820AD1" }}>
              Liderança
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Quem lidera o Nubank
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {leadership.map((person) => (
              <div key={person.name} className="text-center card-hover">
                <div
                  className="w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl font-black text-white"
                  style={{ background: "linear-gradient(135deg, #820AD1, #5F0A9A)" }}
                >
                  {person.initial}
                </div>
                <div className="font-bold text-gray-900">{person.name}</div>
                <div className="text-sm text-gray-500 mt-1">{person.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA careers */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #820AD1, #5F0A9A, #1C0032)" }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Quer fazer parte dessa história?
          </h2>
          <p className="text-purple-200 text-lg mb-8">
            Estamos sempre em busca de pessoas talentosas que querem mudar o sistema financeiro.
          </p>
          <Link
            href="/carreiras"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all hover:scale-105"
            style={{ background: "white", color: "#820AD1" }}
          >
            Ver vagas abertas <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
