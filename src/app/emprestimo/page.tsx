import Link from "next/link";
import { ArrowRight, Check, DollarSign, Zap, Clock, Shield } from "lucide-react";

export default function EmprestimoPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #1a0a00 0%, #3d1a00 40%, #FF6F00 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
                style={{ background: "rgba(255,255,255,0.1)", color: "white", border: "1px solid rgba(255,255,255,0.2)" }}
              >
                <Zap size={12} /> Aprovação em minutos
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                Empréstimo pessoal{" "}
                <span style={{ color: "#FFD180" }}>sem enrolação</span>
              </h1>
              <p className="text-lg mb-8 leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                Crédito aprovado em minutos, direto no app. Taxas transparentes, parcelas fixas e sem surpresas.
              </p>
              <Link
                href="#simular"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold"
                style={{ background: "white", color: "#FF6F00" }}
              >
                Simular meu empréstimo <ArrowRight size={18} />
              </Link>
            </div>

            {/* Simulator visual */}
            <div
              className="rounded-2xl p-6 shadow-2xl"
              style={{
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <div className="text-white/70 text-sm mb-4">Simulação de empréstimo</div>

              <div className="mb-4">
                <div className="text-white/60 text-xs mb-1">Valor desejado</div>
                <div className="text-3xl font-bold text-white">R$ 10.000</div>
              </div>

              <div className="h-2 rounded-full mb-6" style={{ background: "rgba(255,255,255,0.1)" }}>
                <div className="h-2 rounded-full w-3/5" style={{ background: "#FFD180" }} />
              </div>

              <div className="space-y-3 mb-4">
                {[
                  { label: "Parcelas", value: "24x de R$ 512,50" },
                  { label: "Taxa mensal", value: "1,75% a.m." },
                  { label: "Total a pagar", value: "R$ 12.300,00" },
                  { label: "CET anual", value: "23,1%*" },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between text-sm">
                    <span style={{ color: "rgba(255,255,255,0.6)" }}>{item.label}</span>
                    <span className="text-white font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                *Simulação. Taxa final sujeita à análise de crédito.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Como solicitar o empréstimo
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: Zap, step: "01", title: "Simule no app", desc: "Escolha o valor e o prazo. Veja as condições em tempo real." },
              { icon: Check, step: "02", title: "Análise rápida", desc: "Nossa IA analisa seu perfil e aprova em minutos." },
              { icon: DollarSign, step: "03", title: "Dinheiro na conta", desc: "Aprovado, o dinheiro cai na sua conta Nubank na hora." },
              { icon: Clock, step: "04", title: "Pague com facilidade", desc: "Parcelas debitadas automaticamente. Acompanhe pelo app." },
            ].map((item, i) => (
              <div key={item.title} className="text-center">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 relative"
                  style={{
                    background: i === 0 ? "linear-gradient(135deg, #820AD1, #5F0A9A)" : "white",
                    border: i !== 0 ? "2px solid #E8C6FF" : "none",
                  }}
                >
                  <item.icon size={24} style={{ color: i === 0 ? "white" : "#820AD1" }} />
                  <span
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center text-white"
                    style={{ background: "#820AD1" }}
                  >
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24" style={{ background: "#F8F5FA" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
                Empréstimo transparente, do jeito que deveria ser
              </h2>
              <div className="space-y-4">
                {[
                  { title: "Sem IOF surpresa", desc: "Mostramos todos os custos antes da contratação." },
                  { title: "Taxa competitiva", desc: "Taxas menores que cartão de crédito e cheque especial." },
                  { title: "Parcelas fixas", desc: "Você sabe exatamente quanto vai pagar todo mês." },
                  { title: "Sem consulta abusiva", desc: "Análise cuidadosa e humanizada do seu perfil." },
                  { title: "Pagamento antecipado", desc: "Quite antes do prazo e economize nos juros." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: "#820AD1" }}
                    >
                      <Check size={12} color="white" />
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">{item.title}</span>
                      <span className="text-gray-500 text-sm"> — {item.desc}</span>
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
              <h3 className="text-2xl font-bold mb-3">Simule agora, sem compromisso</h3>
              <p className="text-purple-200 mb-6">
                A simulação é gratuita e não afeta seu score de crédito. Veja as condições e decida com calma.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-purple-300">Valor mínimo</span>
                  <span className="text-white font-bold">R$ 500</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-purple-300">Valor máximo</span>
                  <span className="text-white font-bold">R$ 50.000</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-purple-300">Prazo máximo</span>
                  <span className="text-white font-bold">48 meses</span>
                </div>
              </div>
              <Link
                href="#simular"
                className="block text-center px-6 py-3 rounded-full font-semibold transition-all hover:scale-105"
                style={{ background: "white", color: "#820AD1" }}
              >
                Simular empréstimo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
