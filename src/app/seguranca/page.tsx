import type { Metadata } from "next";
import { Shield, Lock, Eye, Smartphone, AlertTriangle, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Segurança Nubank - Protegendo seu dinheiro e seus dados",
  description: "Saiba como o Nubank protege seu dinheiro e seus dados com tecnologia de ponta e práticas de segurança avançadas.",
};

const features = [
  {
    icon: Lock,
    title: "Criptografia de ponta a ponta",
    desc: "Todas as suas transações e dados são protegidos com criptografia AES-256, o mesmo padrão usado por governos e militares.",
  },
  {
    icon: Eye,
    title: "Monitoramento 24/7",
    desc: "Nossa equipe de segurança monitora continuamente para detectar qualquer atividade suspeita na sua conta.",
  },
  {
    icon: Smartphone,
    title: "Autenticação biométrica",
    desc: "Acesse o app com sua digital ou reconhecimento facial. Mais segurança sem abrir mão da praticidade.",
  },
  {
    icon: AlertTriangle,
    title: "Alertas em tempo real",
    desc: "Você recebe notificação push em cada transação. Identificou algo suspeito? Bloqueie o cartão em segundos pelo app.",
  },
  {
    icon: Shield,
    title: "FGC e regulamentação",
    desc: "Regulamentado pelo Banco Central. Depósitos cobertos pelo FGC até R$ 250.000 por CPF por instituição.",
  },
  {
    icon: CheckCircle,
    title: "Zero responsabilidade",
    desc: "Em caso de fraude, você não paga. Contestação simples pelo app e estorno rápido garantido.",
  },
];

const fraudTips = [
  {
    title: "Nunca compartilhe sua senha",
    desc: "O Nubank JAMAIS vai pedir sua senha, código de verificação ou dados do cartão por ligação, SMS ou e-mail.",
    type: "danger",
  },
  {
    title: "Desconfie de ligações suspeitas",
    desc: "Golpistas se passam por funcionários de bancos. Se receber uma ligação pedindo dados, desligue e entre em contato pelo app.",
    type: "danger",
  },
  {
    title: "Use a biometria",
    desc: "Ative o reconhecimento facial ou digital para mais uma camada de proteção no seu acesso.",
    type: "tip",
  },
  {
    title: "Atualize o app sempre",
    desc: "As atualizações do app incluem correções de segurança importantes. Mantenha sempre a versão mais recente.",
    type: "tip",
  },
  {
    title: "Cuidado com Wi-Fi público",
    desc: "Evite acessar sua conta em redes Wi-Fi públicas e não seguras.",
    type: "tip",
  },
  {
    title: "Ative as notificações",
    desc: "Com as notificações ativadas, você saberá imediatamente de qualquer movimentação na sua conta.",
    type: "tip",
  },
];

export default function SegurancaPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #1C0032 0%, #3B0066 40%, #820AD1 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 mx-auto"
            style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}
          >
            <Shield size={32} style={{ color: "#D4B4FF" }} />
          </div>
          <p className="text-sm font-semibold uppercase tracking-wider text-purple-300 mb-4">Segurança</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Seu dinheiro protegido,{" "}
            <span style={{ color: "#D4B4FF" }}>sempre</span>
          </h1>
          <p className="text-xl text-purple-200 leading-relaxed max-w-2xl mx-auto">
            Usamos tecnologia de ponta para proteger seus dados e seu dinheiro. Porque segurança não é opcional — é nossa obrigação.
          </p>
        </div>
      </section>

      {/* Security features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Como protegemos você
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div
                key={f.title}
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
                  <f.icon size={22} style={{ color: i === 0 ? "white" : "#820AD1" }} />
                </div>
                <h3 className={`font-bold mb-2 ${i === 0 ? "text-white" : "text-gray-900"}`}>
                  {f.title}
                </h3>
                <p className={`text-sm leading-relaxed ${i === 0 ? "text-purple-200" : "text-gray-500"}`}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fraud prevention */}
      <section className="py-24" style={{ background: "#F8F5FA" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "#820AD1" }}>
              Prevenção a fraudes
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Como se proteger de golpes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {fraudTips.map((tip) => (
              <div
                key={tip.title}
                className="rounded-2xl p-5 border"
                style={{
                  background: "white",
                  borderColor: tip.type === "danger" ? "#FFCDD2" : "#E8C6FF",
                  borderLeftWidth: "4px",
                  borderLeftColor: tip.type === "danger" ? "#F44336" : "#820AD1",
                }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: tip.type === "danger" ? "#FFCDD2" : "#F5E6FF" }}
                  >
                    {tip.type === "danger"
                      ? <AlertTriangle size={12} style={{ color: "#F44336" }} />
                      : <CheckCircle size={12} style={{ color: "#820AD1" }} />
                    }
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{tip.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{tip.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Report */}
          <div
            className="mt-10 rounded-2xl p-6 text-center"
            style={{ background: "linear-gradient(135deg, #820AD1, #5F0A9A)", color: "white" }}
          >
            <AlertTriangle size={28} className="mx-auto mb-3" style={{ color: "#D4B4FF" }} />
            <h3 className="font-bold text-xl mb-2">Identificou uma fraude?</h3>
            <p className="text-purple-200 text-sm mb-4">
              Bloqueie seu cartão imediatamente no app e entre em contato conosco. Nossa equipe age rapidamente para proteger sua conta.
            </p>
            <button
              className="px-6 py-2.5 rounded-full font-semibold text-sm transition-all hover:scale-105"
              style={{ background: "white", color: "#820AD1" }}
            >
              Reportar fraude no app
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
