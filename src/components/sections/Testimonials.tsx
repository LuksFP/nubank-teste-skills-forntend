"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

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
    product: "Empréstimo",
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
  const touchStartX = useRef<number>(0);
  const intervalRef = useRef<ReturnType<typeof setInterval>>(null);

  const next = useCallback(() =>
    setCurrent((c) => (c + 1) % testimonials.length), []);
  const prev = useCallback(() =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length), []);

  // Auto-advance every 5 seconds
  useEffect(() => {
    intervalRef.current = setInterval(next, 5000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [next]);

  const pause = () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  const resume = () => { intervalRef.current = setInterval(next, 5000); };

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) { delta > 0 ? next() : prev(); }
  };

  return (
    <section className="py-24 bg-white" id="depoimentos" aria-labelledby="testimonials-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <AnimatedSection animation="fade-up" className="text-center mb-12">
          <span className="section-label justify-center mb-4">Depoimentos</span>
          <h2 id="testimonials-title" className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mt-3 mb-4">
            O que nossos clientes dizem
          </h2>
          <div className="flex items-center justify-center gap-1.5">
            {[1,2,3,4,5].map((s) => (
              <Star key={s} size={18} fill="#FFB800" color="#FFB800" aria-hidden="true" />
            ))}
            <span className="ml-2 font-bold text-gray-900">4.9</span>
            <span className="text-gray-400 text-sm">/ 5 nas lojas</span>
          </div>
        </AnimatedSection>

        {/* Carousel */}
        <AnimatedSection animation="fade-up" delay={150}>
          <div
            className="relative"
            onMouseEnter={pause}
            onMouseLeave={resume}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            role="region"
            aria-label="Depoimentos de clientes"
          >
            {/* Cards wrapper */}
            <div className="overflow-hidden">
              <div className="flex items-stretch gap-4">
                {/* Mobile: single card. Desktop: show 3 with blur on sides */}
                <div className="hidden md:flex items-center gap-4 w-full">
                  {[-1, 0, 1].map((offset) => {
                    const idx = (current + offset + testimonials.length) % testimonials.length;
                    const t = testimonials[idx];
                    const isCenter = offset === 0;
                    return (
                      <div
                        key={`${idx}-${offset}`}
                        className="transition-all duration-500 rounded-2xl p-6 flex-shrink-0"
                        style={{
                          width: isCenter ? "calc(50% - 8px)" : "calc(25% - 8px)",
                          opacity: isCenter ? 1 : 0.45,
                          transform: isCenter ? "scale(1)" : "scale(0.94)",
                          background: isCenter ? "linear-gradient(135deg, #820AD1, #5F0A9A)" : "white",
                          border: isCenter ? "none" : "1.5px solid #E8C6FF",
                          color: isCenter ? "white" : "#1C0032",
                          filter: isCenter ? "none" : "blur(0.5px)",
                        }}
                        aria-hidden={!isCenter}
                      >
                        <div className="flex gap-0.5 mb-4">
                          {Array.from({ length: t.rating }).map((_, si) => (
                            <Star key={si} size={14} fill={isCenter ? "rgba(255,255,255,0.9)" : "#FFB800"} color="transparent" />
                          ))}
                        </div>
                        <p className={`text-sm leading-relaxed mb-5 ${isCenter ? "text-white" : "text-gray-600"}`}>
                          &ldquo;{t.text}&rdquo;
                        </p>
                        <div className="flex items-center gap-3">
                          <div
                            className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm text-white flex-shrink-0"
                            style={{ background: isCenter ? "rgba(255,255,255,0.2)" : "#820AD1" }}
                            aria-hidden="true"
                          >
                            {t.avatar}
                          </div>
                          <div>
                            <div className={`font-semibold text-sm ${isCenter ? "text-white" : "text-gray-900"}`}>
                              {t.name}
                            </div>
                            <div className={`text-xs ${isCenter ? "text-purple-200" : "text-gray-400"}`}>
                              {t.city} · {t.product}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Mobile single card */}
                <div className="md:hidden w-full">
                  {(() => {
                    const t = testimonials[current];
                    return (
                      <div
                        className="rounded-2xl p-6 text-white"
                        style={{ background: "linear-gradient(135deg, #820AD1, #5F0A9A)" }}
                      >
                        <div className="flex gap-0.5 mb-4">
                          {Array.from({ length: t.rating }).map((_, si) => (
                            <Star key={si} size={14} fill="rgba(255,255,255,0.9)" color="transparent" />
                          ))}
                        </div>
                        <p className="text-sm leading-relaxed mb-5 text-white">
                          &ldquo;{t.text}&rdquo;
                        </p>
                        <div className="flex items-center gap-3">
                          <div
                            className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm text-white flex-shrink-0"
                            style={{ background: "rgba(255,255,255,0.2)" }}
                            aria-hidden="true"
                          >
                            {t.avatar}
                          </div>
                          <div>
                            <div className="font-semibold text-sm text-white">{t.name}</div>
                            <div className="text-xs text-purple-200">{t.city} · {t.product}</div>
                          </div>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                aria-label="Depoimento anterior"
                className="w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all hover:scale-110 hover:bg-purple-50 focus-visible:ring-2 focus-visible:ring-offset-2"
                style={{ borderColor: "#820AD1", color: "#820AD1" }}
              >
                <ChevronLeft size={20} />
              </button>

              {/* Dots */}
              <div className="flex gap-2" role="tablist" aria-label="Selecionar depoimento">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setCurrent(i); pause(); }}
                    role="tab"
                    aria-selected={i === current}
                    aria-label={`Depoimento ${i + 1}`}
                    className="h-2 rounded-full transition-all focus-visible:outline-offset-2"
                    style={{
                      width: i === current ? "28px" : "8px",
                      background: i === current ? "#820AD1" : "#D4B4FF",
                    }}
                  />
                ))}
              </div>

              <button
                onClick={next}
                aria-label="Próximo depoimento"
                className="w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all hover:scale-110 hover:bg-purple-50 focus-visible:ring-2 focus-visible:ring-offset-2"
                style={{ borderColor: "#820AD1", color: "#820AD1" }}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
