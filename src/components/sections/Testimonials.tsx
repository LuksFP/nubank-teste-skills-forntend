"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Mariana S.",
    city: "São Paulo, SP",
    rating: 5,
    text: "O Nubank mudou minha vida financeira. Não pago mais anuidade, tenho controle total pelo app e o atendimento é incrível. Não abro mão!",
    product: "Cartão de Crédito",
    avatar: "M",
  },
  {
    name: "Carlos R.",
    city: "Rio de Janeiro, RJ",
    rating: 5,
    text: "Abri minha conta em 5 minutos do celular. Meu dinheiro rende mais que na poupança e transfiro sem pagar nada. Recomendo para todos!",
    product: "Conta Digital",
    avatar: "C",
  },
  {
    name: "Ana Paula T.",
    city: "Belo Horizonte, MG",
    rating: 5,
    text: "Consegui empréstimo rapidinho, com taxas bem menores que outros bancos. O processo foi todo pelo app, sem complicação nenhuma.",
    product: "Empréstimo Pessoal",
    avatar: "A",
  },
  {
    name: "Felipe M.",
    city: "Curitiba, PR",
    rating: 5,
    text: "Comecei a investir com apenas R$ 10. A interface é super intuitiva e os produtos são variados. Finalmente entendi de investimentos!",
    product: "Investimentos",
    avatar: "F",
  },
  {
    name: "Juliana K.",
    city: "Porto Alegre, RS",
    rating: 5,
    text: "O seguro de vida foi muito simples de contratar. Tudo pelo app, sem papelada. Me sinto protegida pagando bem menos que nas seguradoras tradicionais.",
    product: "Seguros",
    avatar: "J",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const getVisible = () => {
    const result = [];
    for (let i = -1; i <= 1; i++) {
      const index = (current + i + testimonials.length) % testimonials.length;
      result.push({ ...testimonials[index], offset: i });
    }
    return result;
  };

  return (
    <section className="py-24 bg-white" id="depoimentos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "#820AD1" }}>
            Depoimentos
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            O que nossos clientes dizem
          </h2>
          <div className="flex items-center justify-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} size={20} fill="#FFB800" color="#FFB800" />
            ))}
            <span className="ml-2 font-semibold text-gray-900">4.9</span>
            <span className="text-gray-500">/ 5 nas lojas</span>
          </div>
        </div>

        {/* Testimonials slider */}
        <div className="relative">
          <div className="flex items-center gap-4 overflow-hidden justify-center">
            {getVisible().map((t, i) => (
              <div
                key={`${t.name}-${i}`}
                className={`transition-all duration-500 rounded-2xl p-6 flex-shrink-0 ${
                  t.offset === 0
                    ? "w-full max-w-lg shadow-xl scale-100 opacity-100 z-10"
                    : "w-64 scale-90 opacity-40 hidden md:block"
                }`}
                style={{
                  background: t.offset === 0
                    ? "linear-gradient(135deg, #820AD1, #5F0A9A)"
                    : "white",
                  border: t.offset !== 0 ? "1px solid #E8C6FF" : "none",
                  color: t.offset === 0 ? "white" : "#1C0032",
                }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <Star
                      key={si}
                      size={16}
                      fill={t.offset === 0 ? "rgba(255,255,255,0.9)" : "#FFB800"}
                      color={t.offset === 0 ? "rgba(255,255,255,0.9)" : "#FFB800"}
                    />
                  ))}
                </div>

                <p className={`text-base leading-relaxed mb-6 ${t.offset === 0 ? "text-white" : "text-gray-600"}`}>
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
                    style={{
                      background: t.offset === 0 ? "rgba(255,255,255,0.2)" : "#820AD1",
                      color: "white",
                    }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div className={`font-semibold text-sm ${t.offset === 0 ? "text-white" : "text-gray-900"}`}>
                      {t.name}
                    </div>
                    <div className={`text-xs ${t.offset === 0 ? "text-purple-200" : "text-gray-400"}`}>
                      {t.city} · {t.product}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all hover:scale-110"
              style={{ borderColor: "#820AD1", color: "#820AD1" }}
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="h-2 rounded-full transition-all"
                  style={{
                    width: i === current ? "24px" : "8px",
                    background: i === current ? "#820AD1" : "#D4B4FF",
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all hover:scale-110"
              style={{ borderColor: "#820AD1", color: "#820AD1" }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
