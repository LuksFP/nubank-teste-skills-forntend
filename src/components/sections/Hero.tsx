"use client";

import Link from "next/link";
import { ArrowRight, Star, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden hero-gradient"
      aria-label="Seção principal"
    >
      {/* Background — single composited layer (perf) */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="purple-blob w-[500px] h-[500px] top-[-80px] right-[-60px] opacity-40"
          style={{ filter: "blur(80px)" }}
        />
        <div
          className="purple-blob w-[360px] h-[360px] bottom-[-60px] left-[-40px] opacity-25"
          style={{ filter: "blur(70px)" }}
        />
        {/* dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "44px 44px",
          }}
        />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── Left ── */}
          <div className="space-y-7 animate-slide-up">
            {/* Trust badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold glass"
              style={{ color: "#D4B4FF" }}
            >
              <Star size={12} fill="currentColor" style={{ color: "#FFD700" }} />
              O banco digital mais amado do Brasil
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.6rem] font-black text-white leading-[1.1] tracking-tight">
              Sua vida financeira,{" "}
              <span className="text-gradient-light">
                mais simples.
              </span>
            </h1>

            <p className="text-lg text-purple-200 leading-relaxed max-w-lg">
              Cartão de crédito <strong className="text-white">sem anuidade</strong>,
              conta digital <strong className="text-white">sem mensalidade</strong>,
              e muito mais — tudo no seu celular.
            </p>

            {/* Quick perks */}
            <ul className="flex flex-col gap-2">
              {[
                "Sem consulta SPC/Serasa para abrir conta",
                "Aprovação em minutos, 100% pelo app",
                "Pix grátis e ilimitado",
              ].map((perk) => (
                <li key={perk} className="flex items-center gap-2 text-sm text-purple-200">
                  <CheckCircle size={15} style={{ color: "#D4B4FF", flexShrink: 0 }} />
                  {perk}
                </li>
              ))}
            </ul>

            {/* Stats row */}
            <div className="flex flex-wrap gap-x-8 gap-y-3 pt-1">
              {[
                { value: "100M+", label: "clientes" },
                { value: "R$ 0", label: "anuidade" },
                { value: "4.9★", label: "App Store" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-black text-white">{s.value}</div>
                  <div className="text-xs text-purple-400 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <Link
                href="/cartao"
                className="btn-shimmer inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-bold text-base text-white group focus-visible:outline-white"
              >
                Pedir meu cartão grátis
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/conta"
                className="inline-flex items-center justify-center px-7 py-4 rounded-full font-semibold text-base border-2 transition-all hover:bg-white/10 focus-visible:outline-white"
                style={{ color: "white", borderColor: "rgba(255,255,255,0.35)" }}
              >
                Abrir conta digital
              </Link>
            </div>
          </div>

          {/* ── Right — card mockup ── */}
          <div
            className="relative flex items-center justify-center lg:justify-end animate-fade-in delay-300"
            aria-hidden="true"
          >
            {/* Glow */}
            <div
              className="absolute inset-0 rounded-3xl opacity-50"
              style={{
                background: "radial-gradient(ellipse at center, rgba(130,10,209,0.6), transparent 70%)",
                filter: "blur(40px)",
              }}
            />

            <div className="relative w-full max-w-xs sm:max-w-sm">
              {/* Back card */}
              <div
                className="absolute top-[-16px] right-[-12px] left-[12px] h-[190px] rounded-2xl opacity-50"
                style={{ background: "linear-gradient(135deg, #5F0A9A, #3B0066)" }}
              />

              {/* Main card */}
              <div
                className="relative rounded-2xl p-5 sm:p-6 animate-float nubank-card"
                style={{ minHeight: "190px" }}
              >
                {/* Holographic sheen */}
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none opacity-10"
                  style={{
                    background: "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.6) 50%, transparent 70%)",
                  }}
                />

                <div className="flex justify-between items-start mb-6 sm:mb-8">
                  <div className="text-white/60 font-black text-sm tracking-widest">nubank</div>
                  <svg width="48" height="28" viewBox="0 0 48 28" aria-hidden="true">
                    <circle cx="18" cy="14" r="13" fill="rgba(220,0,80,0.5)" />
                    <circle cx="30" cy="14" r="13" fill="rgba(255,140,0,0.5)" />
                  </svg>
                </div>

                {/* Chip */}
                <div
                  className="w-9 h-7 rounded-md mb-5"
                  style={{ background: "linear-gradient(135deg, #C8A800, #FFD700)", opacity: 0.85 }}
                />

                <div className="font-mono text-sm sm:text-base tracking-[0.18em] mb-5 text-white/70">
                  •••• •••• •••• 1234
                </div>

                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-white/40 text-[10px] uppercase tracking-wider mb-0.5">Titular</div>
                    <div className="text-white text-xs sm:text-sm font-semibold">SEU NOME AQUI</div>
                  </div>
                  <div className="text-right">
                    <div className="text-white/40 text-[10px] uppercase tracking-wider mb-0.5">Validade</div>
                    <div className="text-white text-xs sm:text-sm font-semibold">12/30</div>
                  </div>
                </div>
              </div>

              {/* Floating balance chip */}
              <div
                className="absolute -bottom-5 -right-3 sm:-right-6 rounded-2xl p-3 sm:p-4 shadow-2xl glass animate-float delay-300"
                style={{ minWidth: "150px" }}
              >
                <div className="text-white/50 text-[10px] mb-1">Saldo disponível</div>
                <div className="text-white font-black text-lg sm:text-xl">R$ 5.000</div>
                <div className="text-green-400 text-[10px] mt-0.5 font-medium">▲ +2.5% este mês</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg
          viewBox="0 0 1440 70"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-14 sm:h-16 lg:h-20"
        >
          <path d="M0,70 C480,0 960,60 1440,15 L1440,70 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
