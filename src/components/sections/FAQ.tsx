"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "O cartão Nubank realmente não tem anuidade?",
    answer: "Sim! O cartão de crédito Nubank não tem anuidade para sempre, sem letras miúdas. Você também não paga taxa de emissão, e o cartão é entregue na sua casa sem custo.",
  },
  {
    question: "Como abrir uma conta no Nubank?",
    answer: "É simples! Baixe o app (Android ou iOS), clique em 'Pedir conta' e preencha seus dados. O processo é 100% digital, sem precisar ir a uma agência. Geralmente a aprovação acontece em minutos.",
  },
  {
    question: "O dinheiro na conta Nubank é seguro?",
    answer: "Sim! O Nubank é um banco regulamentado pelo Banco Central do Brasil. Seus depósitos têm cobertura do FGC (Fundo Garantidor de Créditos) até R$ 250.000 por CPF.",
  },
  {
    question: "Como funciona o rendimento da conta digital?",
    answer: "Seu dinheiro rende automaticamente 100% do CDI, todos os dias úteis, inclusive em feriados. É mais que a poupança e você pode usar o dinheiro a qualquer momento sem perder o rendimento.",
  },
  {
    question: "Posso ter cartão físico e virtual?",
    answer: "Sim! O cartão físico é enviado pelo correio sem custo. Além disso, você tem um cartão virtual para compras online, com número diferente do físico, garantindo mais segurança.",
  },
  {
    question: "Como funciona o suporte ao cliente?",
    answer: "Atendimento humano 24 horas por dia, 7 dias por semana, direto pelo app. Sem ligações, sem espera. Também temos chat com inteligência artificial para resoluções rápidas.",
  },
  {
    question: "O Nubank atende negativados?",
    answer: "O Nubank analisa cada caso individualmente. Para a conta digital, não há consulta ao SPC/Serasa. Para o cartão de crédito, há análise de crédito, mas avaliamos vários fatores além do histórico.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24" style={{ background: "#F8F5FA" }} id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "#820AD1" }}>
            Dúvidas frequentes
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Perguntas e respostas
          </h2>
        </div>

        {/* FAQ items */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden border transition-all"
              style={{
                borderColor: open === i ? "#820AD1" : "#E8C6FF",
                background: "white",
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className="flex-shrink-0 transition-transform duration-300"
                  style={{
                    color: "#820AD1",
                    transform: open === i ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>

              <div
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: open === i ? "300px" : "0px",
                  opacity: open === i ? 1 : 0,
                }}
              >
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-500 mb-4">Não encontrou o que procurava?</p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all hover:scale-105 border-2"
            style={{ borderColor: "#820AD1", color: "#820AD1" }}
          >
            Falar com o suporte
          </a>
        </div>
      </div>
    </section>
  );
}
