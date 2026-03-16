import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Clock, Users, Heart, Zap, Globe, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Carreiras no Nubank - Trabalhe conosco",
  description: "Venha fazer parte do time que está reinventando o sistema financeiro. Veja as vagas abertas no Nubank.",
};

const benefits = [
  { icon: Heart, title: "Saúde completa", desc: "Plano de saúde e odontológico para você e seus dependentes, sem desconto." },
  { icon: Zap, title: "Stock Options", desc: "Seja sócio do Nubank com nosso programa de participação acionária." },
  { icon: Globe, title: "Trabalho remoto", desc: "Modelo híbrido e flexível. Trabalhe de onde fizer mais sentido para você." },
  { icon: Award, title: "Desenvolvimento", desc: "Budget para cursos, livros e conferências. Investimos no seu crescimento." },
  { icon: Users, title: "Diversidade", desc: "Um time incrível e diverso, com pessoas de todo o Brasil e do mundo." },
  { icon: Clock, title: "Horário flexível", desc: "Foco em resultado, não em bater ponto. Autonomia para gerenciar seu tempo." },
];

const openRoles = [
  { title: "Software Engineer - Backend (Go)", team: "Engenharia", location: "São Paulo / Remoto", type: "CLT" },
  { title: "Product Manager - Cartão de Crédito", team: "Produto", location: "São Paulo", type: "CLT" },
  { title: "Data Scientist - Risk", team: "Dados", location: "São Paulo / Remoto", type: "CLT" },
  { title: "UX Designer - Mobile", team: "Design", location: "São Paulo / Remoto", type: "CLT" },
  { title: "Software Engineer - Frontend (React)", team: "Engenharia", location: "São Paulo / Remoto", type: "CLT" },
  { title: "Machine Learning Engineer", team: "Dados", location: "São Paulo / Remoto", type: "CLT" },
  { title: "Growth Marketing Manager", team: "Marketing", location: "São Paulo", type: "CLT" },
  { title: "Compliance Analyst", team: "Jurídico", location: "São Paulo", type: "CLT" },
];

const teamColors: Record<string, string> = {
  Engenharia: "#820AD1",
  Produto: "#2196F3",
  Dados: "#4CAF50",
  Design: "#E91E63",
  Marketing: "#FF9800",
  Jurídico: "#00BFA5",
};

export default function CarreirasPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #1C0032 0%, #3B0066 40%, #820AD1 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-15 blur-3xl"
            style={{ background: "#A020D0" }} />
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-purple-300 mb-4">Carreiras</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Construa o futuro
            <br />
            <span style={{ color: "#D4B4FF" }}>financeiro</span> com a gente
          </h1>
          <p className="text-xl text-purple-200 mb-8 leading-relaxed max-w-2xl mx-auto">
            Junte-se a um time de mais de 10.000 pessoas apaixonadas por resolver problemas complexos e criar experiências que importam.
          </p>
          <a
            href="#vagas"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all hover:scale-105"
            style={{ background: "white", color: "#820AD1" }}
          >
            Ver vagas abertas <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "#820AD1" }}>
              Benefícios
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              O que oferecemos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <div
                key={benefit.title}
                className="card-hover rounded-2xl p-6"
                style={{
                  background: i === 0 ? "linear-gradient(135deg, #820AD1, #5F0A9A)" : "white",
                  border: i !== 0 ? "1px solid #E8C6FF" : "none",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: i === 0 ? "rgba(255,255,255,0.15)" : "#F5E6FF" }}
                >
                  <benefit.icon size={22} style={{ color: i === 0 ? "white" : "#820AD1" }} />
                </div>
                <h3 className={`font-bold mb-2 ${i === 0 ? "text-white" : "text-gray-900"}`}>
                  {benefit.title}
                </h3>
                <p className={`text-sm leading-relaxed ${i === 0 ? "text-purple-200" : "text-gray-500"}`}>
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="py-24" id="vagas" style={{ background: "#F8F5FA" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "#820AD1" }}>
              {openRoles.length} vagas abertas
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Vagas disponíveis
            </h2>
          </div>

          <div className="space-y-3">
            {openRoles.map((role) => (
              <Link
                key={role.title}
                href="#"
                className="card-hover bg-white rounded-2xl p-5 flex items-center justify-between gap-4 border group block"
                style={{ borderColor: "#E8C6FF" }}
              >
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-900 group-hover:text-[#820AD1] transition-colors mb-1.5 truncate">
                    {role.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
                    <span
                      className="px-2 py-0.5 rounded-full font-semibold"
                      style={{
                        background: `${teamColors[role.team] || "#820AD1"}15`,
                        color: teamColors[role.team] || "#820AD1",
                      }}
                    >
                      {role.team}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={11} /> {role.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={11} /> {role.type}
                    </span>
                  </div>
                </div>
                <ArrowRight size={18} className="text-gray-300 group-hover:text-[#820AD1] group-hover:translate-x-1 transition-all flex-shrink-0" />
              </Link>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mt-8">
            Não encontrou a vaga ideal?{" "}
            <Link href="#" className="font-semibold" style={{ color: "#820AD1" }}>
              Cadastre seu currículo
            </Link>{" "}
            e entraremos em contato quando surgir uma oportunidade.
          </p>
        </div>
      </section>

      {/* Culture */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #820AD1, #1C0032)" }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Uma cultura que inspira
          </h2>
          <p className="text-purple-200 text-lg mb-6 leading-relaxed">
            No Nubank, acreditamos que pessoas boas trabalhando em problemas importantes constroem coisas incríveis. Nossa cultura é de alta performance com muita humanidade.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Alta performance", "Diversidade", "Inovação", "Transparência", "Impacto real"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full text-sm font-medium"
                style={{ background: "rgba(255,255,255,0.1)", color: "white", border: "1px solid rgba(255,255,255,0.2)" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
