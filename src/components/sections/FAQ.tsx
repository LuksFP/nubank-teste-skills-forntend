"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Link from "next/link";

const faqs = [
  {
    q: "O cartão Nubank realmente não tem anuidade?",
    a: "Sim! O cartão de crédito Nubank não tem anuidade para sempre, sem letras miúdas. Você também não paga taxa de emissão, e o cartão é entregue na sua casa sem custo.",
  },
  {
    q: "Como abrir uma conta no Nubank?",
    a: "É simples! Baixe o app (Android ou iOS), clique em 'Pedir conta' e preencha seus dados. O processo é 100% digital, sem precisar ir a uma agência. Geralmente a aprovação acontece em minutos.",
  },
  {
    q: "O dinheiro na conta Nubank é seguro?",
    a: "Sim! O Nubank é um banco regulamentado pelo Banco Central do Brasil. Seus depósitos têm cobertura do FGC (Fundo Garantidor de Créditos) até R$ 250.000 por CPF.",
  },
  {
    q: "Como funciona o rendimento da conta digital?",
    a: "Seu dinheiro rende automaticamente 100% do CDI, todos os dias úteis. É mais que a poupança e você pode usar o dinheiro a qualquer momento sem perder o rendimento.",
  },
  {
    q: "Posso ter cartão físico e virtual?",
    a: "Sim! O cartão físico é enviado pelo correio sem custo. Além disso, você tem um cartão virtual para compras online, com número diferente do físico, garantindo mais segurança.",
  },
  {
    q: "Como funciona o suporte ao cliente?",
    a: "Atendimento humano 24 horas por dia, 7 dias por semana, direto pelo app. Sem ligações, sem espera.",
  },
  {
    q: "O Nubank atende negativados?",
    a: "Para a conta digital, não há consulta ao SPC/Serasa. Para o cartão de crédito, há análise de crédito individual — avaliamos vários fatores além do histórico.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 lazy-section" style={{ background: "#F8F5FA" }} id="faq" aria-labelledby="faq-title">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up" className="text-center mb-12">
          <span className="section-label justify-center mb-4">Dúvidas frequentes</span>
          <h2 id="faq-title" className="text-3xl sm:text-4xl font-black text-gray-900 mt-3">
            Perguntas e respostas
          </h2>
        </AnimatedSection>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <AnimatedSection key={i} animation="fade-up" delay={i * 50}>
              <div
                className="rounded-2xl overflow-hidden transition-shadow"
                style={{
                  border: `1.5px solid ${open === i ? "#820AD1" : "#E8C6FF"}`,
                  background: "white",
                  boxShadow: open === i ? "0 4px 20px rgba(130,10,209,0.1)" : "none",
                }}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 sm:px-6 py-4 sm:py-5 text-left focus-visible:ring-inset"
                  aria-expanded={open === i}
                >
                  <span className="font-semibold text-sm sm:text-base text-gray-900 pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className="flex-shrink-0 transition-transform duration-300"
                    style={{
                      color: "#820AD1",
                      transform: open === i ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                    aria-hidden="true"
                  />
                </button>

                <div
                  className="overflow-hidden transition-all duration-300 ease-out"
                  style={{
                    maxHeight: open === i ? "300px" : "0px",
                    opacity: open === i ? 1 : 0,
                  }}
                >
                  <p className="px-5 sm:px-6 pb-5 text-sm text-gray-600 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-up" delay={400} className="text-center mt-10">
          <p className="text-gray-500 text-sm mb-4">Não encontrou o que procurava?</p>
          <Link
            href="/ajuda"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm border-2 transition-all hover:bg-purple-50 focus-visible:ring-2"
            style={{ borderColor: "#820AD1", color: "#820AD1" }}
          >
            Ir para a central de ajuda
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
