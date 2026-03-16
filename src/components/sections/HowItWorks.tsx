import AnimatedSection from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Baixe o app",
    description: "Disponível gratuitamente para iOS e Android. Rápido, leve e seguro.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <circle cx="12" cy="17" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Crie sua conta",
    description: "Preencha seus dados em minutos. Sem burocracia, sem papelada, sem filas.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Peça seu cartão",
    description: "Solicite o cartão sem anuidade e receba em casa gratuitamente.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="1" y="4" width="22" height="16" rx="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Aproveite tudo",
    description: "Use, controle, invista e proteja na palma da sua mão.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round" />
        <polyline points="22,4 12,14.01 9,11.01" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 overflow-hidden section-purple-gradient lazy-section" aria-labelledby="how-title">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <span className="section-label justify-center mb-4">Como funciona</span>
          <h2 id="how-title" className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mt-3">
            Simples <span className="text-gradient">assim</span>
          </h2>
        </AnimatedSection>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
          {/* Connector */}
          <div
            className="absolute top-10 left-1/4 right-1/4 h-0.5 hidden lg:block"
            style={{ background: "linear-gradient(90deg, transparent, #820AD1, #A020D0, transparent)" }}
            aria-hidden="true"
          />

          {steps.map((step, i) => (
            <AnimatedSection key={step.number} animation="fade-up" delay={i * 100}>
              <div className="flex flex-col items-center text-center">
                {/* Icon box */}
                <div
                  className="relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center mb-5 shadow-lg transition-transform hover:scale-105"
                  style={{
                    background: i === 0
                      ? "linear-gradient(135deg, #820AD1, #5F0A9A)"
                      : "white",
                    color: i === 0 ? "white" : "#820AD1",
                    border: i === 0 ? "none" : "2px solid #E8C6FF",
                  }}
                >
                  {step.icon}
                  {/* Step badge */}
                  <span
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full text-[10px] font-black flex items-center justify-center text-white shadow-md"
                    style={{ background: "#820AD1" }}
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                </div>

                <h3 className="text-base font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection animation="fade-up" delay={400} className="text-center mt-14">
          <Link
            href="/cartao"
            className="btn-shimmer inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base text-white"
          >
            Começar agora — é grátis <ArrowRight size={18} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
