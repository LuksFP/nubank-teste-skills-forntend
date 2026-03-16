"use client";

import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(160deg, #1C0032 0%, #3B0066 40%, #820AD1 100%)" }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 right-10 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: "#A020D0" }}
        />
        <div
          className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full opacity-15 blur-3xl"
          style={{ background: "#5F0A9A" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 blur-3xl"
          style={{ background: "#820AD1" }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold"
              style={{ background: "rgba(255,255,255,0.1)", color: "white", border: "1px solid rgba(255,255,255,0.2)" }}>
              <Star size={12} fill="currentColor" />
              O banco digital mais amado do Brasil
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Sua vida financeira,{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #D97EFF, #FF94FF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  mais simples.
                </span>
              </h1>
              <p className="text-lg text-purple-200 leading-relaxed max-w-lg">
                Cartão de crédito sem anuidade, conta digital sem mensalidade, e muito mais.
                Tudo no seu celular, sem burocracia.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              {[
                { value: "100M+", label: "clientes" },
                { value: "R$ 0", label: "anuidade" },
                { value: "4.9★", label: "nas lojas" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-purple-300">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/cartao"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-semibold text-base transition-all hover:scale-105 active:scale-95 group"
                style={{ background: "white", color: "#820AD1" }}
              >
                Pedir meu cartão grátis
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/conta"
                className="inline-flex items-center justify-center px-7 py-4 rounded-full font-semibold text-base transition-all border hover:bg-white/10"
                style={{ color: "white", borderColor: "rgba(255,255,255,0.4)" }}
              >
                Abrir conta digital
              </Link>
            </div>

            {/* Trust indicator */}
            <p className="text-xs text-purple-400">
              Sem consulta ao SPC/Serasa para abrir conta · 100% digital · Sem taxa
            </p>
          </div>

          {/* Right - Credit card mockup */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Glow effect */}
              <div
                className="absolute inset-0 rounded-3xl blur-3xl opacity-40"
                style={{ background: "#820AD1" }}
              />

              {/* Card stack */}
              <div className="relative">
                {/* Back card */}
                <div
                  className="absolute -top-4 -right-4 w-full rounded-2xl h-52 opacity-60"
                  style={{ background: "linear-gradient(135deg, #5F0A9A, #3B0066)" }}
                />

                {/* Main card */}
                <div
                  className="relative w-full rounded-2xl p-6 animate-float"
                  style={{
                    background: "linear-gradient(135deg, #1C0032 0%, #3B0066 50%, #5F0A9A 100%)",
                    boxShadow: "0 25px 60px rgba(130,10,209,0.5)",
                    minHeight: "200px",
                  }}
                >
                  {/* Card chip */}
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <div className="text-white/40 text-xs mb-1">nubank</div>
                      <div className="w-10 h-8 rounded bg-gradient-to-br from-yellow-300 to-yellow-500 opacity-80" />
                    </div>
                    <div className="text-white/60">
                      <svg width="48" height="30" viewBox="0 0 48 30">
                        <circle cx="18" cy="15" r="14" fill="rgba(255,0,0,0.5)" />
                        <circle cx="30" cy="15" r="14" fill="rgba(255,165,0,0.5)" />
                      </svg>
                    </div>
                  </div>

                  {/* Card number */}
                  <div className="text-white font-mono text-lg tracking-widest mb-6 opacity-80">
                    •••• •••• •••• 1234
                  </div>

                  {/* Card info */}
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-white/40 text-xs uppercase tracking-wider mb-0.5">Titular</div>
                      <div className="text-white text-sm font-medium">SEU NOME AQUI</div>
                    </div>
                    <div className="text-right">
                      <div className="text-white/40 text-xs uppercase tracking-wider mb-0.5">Validade</div>
                      <div className="text-white text-sm font-medium">12/30</div>
                    </div>
                  </div>
                </div>

                {/* Phone mockup */}
                <div
                  className="absolute -bottom-8 -right-8 w-48 rounded-2xl p-3"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
                  }}
                >
                  <div className="text-white/50 text-xs mb-2">Saldo disponível</div>
                  <div className="text-white font-bold text-xl">R$ 5.000</div>
                  <div className="text-green-400 text-xs mt-1">+2.5% este mês</div>
                  <div className="mt-3 h-1 rounded-full" style={{ background: "rgba(255,255,255,0.1)" }}>
                    <div className="h-1 w-3/5 rounded-full" style={{ background: "#820AD1" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" className="w-full h-20">
          <path d="M0,80 C360,0 1080,80 1440,20 L1440,80 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
