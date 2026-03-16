import Link from "next/link";
import { ArrowRight, Shield, Heart, Car, Home, Check } from "lucide-react";

const insurances = [
  {
    icon: Heart,
    name: "Seguro de Vida",
    desc: "Proteção financeira para você e para quem você ama. Cobertura em caso de morte ou invalidez.",
    from: "A partir de R$ 7/mês",
    color: "#E91E63",
    coverages: ["Morte natural e acidental", "Invalidez permanente", "Doenças graves", "Assistência funeral"],
  },
  {
    icon: Car,
    name: "Seguro Auto",
    desc: "Seu carro protegido contra roubo, furto, colisão e muito mais. Sem burocracia.",
    from: "A partir de R$ 89/mês",
    color: "#2196F3",
    coverages: ["Roubo e furto", "Colisão", "Incêndio", "Danos a terceiros"],
  },
  {
    icon: Home,
    name: "Seguro Residencial",
    desc: "Proteção completa para sua casa ou apartamento, próprio ou alugado.",
    from: "A partir de R$ 19/mês",
    color: "#4CAF50",
    coverages: ["Incêndio e explosão", "Roubo de bens", "Danos elétricos", "Responsabilidade civil"],
  },
  {
    icon: Shield,
    name: "Seguro de Celular",
    desc: "Proteja seu smartphone contra roubo, furto e danos acidentais.",
    from: "A partir de R$ 12/mês",
    color: "#FF9800",
    coverages: ["Roubo e furto qualificado", "Danos acidentais", "Quebra de tela", "Reparo ou substituição"],
  },
];

export default function SegurosPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #1a0020 0%, #3d0050 40%, #820AD1 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
            style={{ background: "rgba(255,255,255,0.1)", color: "white", border: "1px solid rgba(255,255,255,0.2)" }}
          >
            <Shield size={12} /> Proteção completa
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight max-w-3xl mx-auto">
            Proteção para você e para quem{" "}
            <span style={{ color: "#D4B4FF" }}>você ama</span>
          </h1>
          <p className="text-lg text-purple-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Seguros sem burocracia, contratados pelo app em minutos. Proteção real para o que importa para você.
          </p>
          <Link
            href="#cotacao"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold"
            style={{ background: "white", color: "#820AD1" }}
          >
            Fazer minha cotação <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Insurance products */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Seguros disponíveis
            </h2>
            <p className="text-lg text-gray-500">Proteção para cada momento da sua vida</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {insurances.map((ins) => (
              <div
                key={ins.name}
                className="card-hover rounded-2xl p-6 border bg-white"
                style={{ borderColor: "#E8C6FF" }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${ins.color}15` }}
                  >
                    <ins.icon size={22} style={{ color: ins.color }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{ins.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">{ins.desc}</p>
                  </div>
                </div>

                <div className="space-y-2 mb-5">
                  {ins.coverages.map((cov) => (
                    <div key={cov} className="flex items-center gap-2 text-sm text-gray-700">
                      <Check size={14} style={{ color: ins.color }} className="flex-shrink-0" />
                      {cov}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="font-bold text-gray-900">{ins.from}</span>
                  <Link
                    href="#cotacao"
                    className="text-sm font-semibold px-4 py-2 rounded-full transition-all hover:scale-105"
                    style={{ background: "#820AD1", color: "white" }}
                  >
                    Fazer cotação
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Nubank insurance */}
      <section className="py-24" style={{ background: "#F8F5FA" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Por que escolher o seguro Nubank?
              </h2>
              <div className="space-y-5">
                {[
                  { title: "Contratação 100% digital", desc: "Faça tudo pelo app, sem papelada, sem fila, sem ligações." },
                  { title: "Preço justo e transparente", desc: "Você sabe exatamente o que está pagando, sem surpresas na hora H." },
                  { title: "Sinistro simples", desc: "Em caso de sinistro, acione pelo app e acompanhe tudo em tempo real." },
                  { title: "Suporte 24/7", desc: "Nossa equipe especializada disponível a qualquer hora, inclusive emergências." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: "#820AD1" }}
                    >
                      <Check size={12} color="white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{item.title}</div>
                      <div className="text-sm text-gray-500">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="rounded-2xl p-8"
              style={{ background: "linear-gradient(135deg, #820AD1, #5F0A9A)", color: "white" }}
            >
              <Shield size={40} className="mb-4" style={{ color: "#D4B4FF" }} />
              <h3 className="text-2xl font-bold mb-4">Faça sua cotação agora</h3>
              <p className="text-purple-200 mb-6">
                Em menos de 2 minutos você descobre o melhor seguro para o seu perfil com o melhor preço.
              </p>
              <Link
                href="#cotacao"
                className="block text-center px-6 py-3 rounded-full font-semibold transition-all hover:scale-105"
                style={{ background: "white", color: "#820AD1" }}
              >
                Calcular meu seguro
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
