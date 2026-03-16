"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle, Users, Star, TrendingUp } from "lucide-react";
import CardScene from "@/components/ui/CardScene";
import FloatingCards from "@/components/ui/FloatingCards";

const stats = [
  { value: "100M+", label: "clientes",  icon: Users },
  { value: "R$ 0",  label: "anuidade",  icon: Star },
  { value: "4.9★",  label: "App Store", icon: TrendingUp },
];

const perks = [
  "Sem consulta SPC/Serasa para abrir conta",
  "Aprovação em minutos, 100% pelo app",
  "Pix grátis e ilimitado",
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #0d0020 0%, #1C0032 30%, #3B0066 65%, #6B0DAD 100%)",
      }}
      aria-label="Seção principal"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Top-right purple orb */}
        <div
          className="absolute rounded-full"
          style={{
            width: 640,
            height: 640,
            top: -160,
            right: -160,
            background:
              "radial-gradient(circle, rgba(160,32,208,0.35) 0%, transparent 70%)",
            filter: "blur(0px)",
          }}
        />
        {/* Bottom-left orb */}
        <div
          className="absolute rounded-full"
          style={{
            width: 400,
            height: 400,
            bottom: -80,
            left: -100,
            background:
              "radial-gradient(circle, rgba(95,10,154,0.3) 0%, transparent 70%)",
          }}
        />
        {/* Center faint glow */}
        <div
          className="absolute rounded-full"
          style={{
            width: 900,
            height: 400,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(ellipse, rgba(130,10,209,0.08) 0%, transparent 70%)",
          }}
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1.5px, transparent 0)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* Diagonal lines */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, white, white 1px, transparent 1px, transparent 60px)",
          }}
        />
      </div>

      {/* Floating cards in background */}
      <FloatingCards count={7} />

      {/* ── Content ── */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* ──── LEFT ──── */}
          <div className="space-y-8 animate-slide-up">

            {/* Tag */}
            <span className="nu-tag nu-tag-dark">
              <Star size={10} fill="currentColor" style={{ color: "#FFD700" }} />
              O banco digital mais amado do Brasil
            </span>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-[2.8rem] sm:text-[3.4rem] lg:text-[3.8rem] font-black leading-[1.05] tracking-tight text-white">
                Sua vida{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #D4B4FF 0%, #C050FF 50%, #FF94FF 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  financeira
                </span>
              </h1>
              <h1 className="text-[2.8rem] sm:text-[3.4rem] lg:text-[3.8rem] font-black leading-[1.05] tracking-tight text-white">
                mais simples.
              </h1>
            </div>

            <p className="text-base sm:text-lg text-purple-300 leading-relaxed max-w-md">
              Cartão de crédito{" "}
              <strong className="text-white font-bold">sem anuidade</strong>,
              conta digital{" "}
              <strong className="text-white font-bold">com rendimento</strong>,
              e muito mais — tudo no celular.
            </p>

            {/* Perks */}
            <ul className="space-y-2.5">
              {perks.map((p, i) => (
                <li
                  key={p}
                  className="flex items-center gap-3 text-sm text-purple-200 animate-slide-up"
                  style={{ animationDelay: `${200 + i * 80}ms` }}
                >
                  <CheckCircle
                    size={16}
                    style={{ color: "#A855F7", flexShrink: 0 }}
                  />
                  {p}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2 animate-slide-up" style={{ animationDelay: "500ms" }}>
              <Link
                href="/cartao"
                className="btn-shimmer inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-black text-base text-white group"
              >
                Pedir cartão grátis
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href="/conta"
                className="inline-flex items-center justify-center px-7 py-4 rounded-full font-bold text-base transition-all hover:bg-white/10"
                style={{
                  color: "rgba(212,180,255,0.9)",
                  border: "1.5px solid rgba(212,180,255,0.3)",
                }}
              >
                Abrir conta digital
              </Link>
            </div>

            {/* Stats */}
            <div
              className="flex flex-wrap gap-6 pt-2 border-t animate-fade-in"
              style={{
                borderColor: "rgba(212,180,255,0.15)",
                animationDelay: "600ms",
              }}
            >
              {stats.map((s) => (
                <div key={s.label} className="flex items-center gap-2.5">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: "rgba(130,10,209,0.25)" }}
                  >
                    <s.icon size={14} style={{ color: "#D4B4FF" }} />
                  </div>
                  <div>
                    <div className="text-lg font-black text-white leading-none">
                      {s.value}
                    </div>
                    <div className="text-[10px] text-purple-400 mt-0.5">
                      {s.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ──── RIGHT — Card Scene ──── */}
          <div
            className="animate-fade-in"
            style={{ animationDelay: "200ms" }}
          >
            <CardScene />
          </div>
        </div>
      </div>

      {/* ── Wave divider ── */}
      <div className="wave-divider" aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path
            d="M0,80 C360,10 720,70 1080,20 C1260,0 1380,40 1440,30 L1440,80 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
