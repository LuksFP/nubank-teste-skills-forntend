import AnimatedSection from "@/components/ui/AnimatedSection";
import Link from "next/link";

export default function AppDownload() {
  return (
    <section className="py-24 bg-white" id="app" aria-labelledby="app-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="rounded-3xl p-8 sm:p-10 lg:p-16 overflow-hidden relative"
          style={{ background: "linear-gradient(135deg, #F5E6FF 0%, #EDD5FF 50%, #E8C6FF 100%)" }}
        >
          {/* Purple accent top border */}
          <div
            className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
            style={{ background: "linear-gradient(90deg, #820AD1, #A020D0, #5F0A9A)" }}
            aria-hidden="true"
          />

          {/* Blob */}
          <div
            className="absolute top-0 right-0 w-72 h-72 opacity-40 pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(130,10,209,0.3), transparent)", filter: "blur(50px)" }}
            aria-hidden="true"
          />

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center relative">
            {/* ── Text ── */}
            <AnimatedSection animation="slide-left">
              <span className="section-label mb-4">Baixe o app</span>
              <h2 id="app-title" className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-4 leading-tight">
                Controle tudo na{" "}
                <span className="text-gradient">palma da sua mão</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Acesse sua conta, pague faturas, faça transferências, invista e muito mais — disponível para iOS e Android, gratuitamente.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                {/* App Store */}
                <a
                  href="#"
                  aria-label="Baixar na App Store"
                  className="flex items-center gap-3 px-5 py-3 rounded-2xl font-medium transition-all hover:scale-105 hover:shadow-lg focus-visible:ring-2"
                  style={{ background: "#1C0032", color: "white" }}
                >
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div>
                    <div className="text-[10px] opacity-60 leading-none mb-0.5">Baixar na</div>
                    <div className="text-sm font-bold leading-none">App Store</div>
                  </div>
                </a>

                {/* Google Play */}
                <a
                  href="#"
                  aria-label="Disponível no Google Play"
                  className="flex items-center gap-3 px-5 py-3 rounded-2xl font-medium transition-all hover:scale-105 hover:shadow-lg focus-visible:ring-2"
                  style={{ background: "#1C0032", color: "white" }}
                >
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M3.18 23.76c.28.15.6.19.93.09l12.43-7.17-2.63-2.63-10.73 9.71zM.25 2.27C.09 2.57 0 2.92 0 3.31v17.38c0 .39.09.74.25 1.04l.09.09 9.74-9.74v-.22L.34 2.18l-.09.09zM20.74 10.46l-2.63-1.52-2.94 2.94 2.94 2.94 2.65-1.53c.76-.44.76-1.38-.02-1.83zM3.18.24L15.61 7.41l-2.63 2.63L2.25.33A.97.97 0 013.18.24z" />
                  </svg>
                  <div>
                    <div className="text-[10px] opacity-60 leading-none mb-0.5">Disponível no</div>
                    <div className="text-sm font-bold leading-none">Google Play</div>
                  </div>
                </a>
              </div>

              <div className="flex flex-wrap gap-5 text-sm text-gray-500">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#820AD1" }} aria-hidden="true" />
                  +100M de downloads
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#820AD1" }} aria-hidden="true" />
                  Nota 4.9 ★
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#820AD1" }} aria-hidden="true" />
                  100% gratuito
                </span>
              </div>
            </AnimatedSection>

            {/* ── Phone mockup ── */}
            <AnimatedSection animation="slide-right" delay={100} className="flex justify-center lg:justify-end">
              <div className="relative" aria-hidden="true">
                {/* Phone */}
                <div
                  className="w-56 sm:w-64 rounded-[38px] overflow-hidden shadow-2xl"
                  style={{
                    background: "#1C0032",
                    border: "4px solid #2A1B3D",
                    minHeight: "440px",
                  }}
                >
                  {/* Screen */}
                  <div
                    className="m-1.5 rounded-[32px] overflow-hidden"
                    style={{ background: "#2A0050", minHeight: "420px" }}
                  >
                    {/* Status bar */}
                    <div className="flex justify-between items-center px-4 pt-3 pb-1.5">
                      <span className="text-white/60 text-[10px] font-medium">9:41</span>
                      <div className="w-14 h-4 rounded-full" style={{ background: "#1C0032" }} />
                      <div className="flex items-center gap-1">
                        <div className="w-3.5 h-2 rounded-sm border border-white/40 relative">
                          <div className="absolute inset-0.5 rounded-sm" style={{ background: "white", width: "75%" }} />
                        </div>
                      </div>
                    </div>

                    {/* App header */}
                    <div className="px-4 py-4" style={{ background: "#820AD1" }}>
                      <div className="text-white/60 text-[11px] mb-0.5">Olá, pessoa!</div>
                      <div className="text-white font-black text-xl leading-none">R$ 5.840,00</div>
                      <div className="text-purple-200 text-[10px] mt-0.5">Saldo da conta</div>
                    </div>

                    {/* Quick actions */}
                    <div className="px-3 py-3 grid grid-cols-4 gap-1.5">
                      {["Pix", "Pagar", "Cobrar", "Mais"].map((a) => (
                        <div key={a} className="flex flex-col items-center gap-1">
                          <div
                            className="w-9 h-9 rounded-xl flex items-center justify-center"
                            style={{ background: "rgba(130,10,209,0.2)" }}
                          >
                            <div className="w-3.5 h-3.5 rounded-sm" style={{ background: "#820AD1" }} />
                          </div>
                          <span className="text-white/60 text-[9px]">{a}</span>
                        </div>
                      ))}
                    </div>

                    {/* Card */}
                    <div className="px-3 mb-3">
                      <div className="text-white/50 text-[10px] mb-1.5">Meu cartão</div>
                      <div
                        className="rounded-xl p-3"
                        style={{ background: "linear-gradient(135deg, #820AD1, #1C0032)" }}
                      >
                        <div className="text-white/50 text-[10px] mb-1.5">nubank</div>
                        <div className="text-white font-mono text-xs tracking-widest">•••• 1234</div>
                        <div className="flex justify-between mt-2">
                          <div className="text-white/50 text-[10px]">Fatura atual</div>
                          <div className="text-white text-[10px] font-bold">R$ 1.250</div>
                        </div>
                      </div>
                    </div>

                    {/* Transactions */}
                    <div className="px-3">
                      <div className="text-white/50 text-[10px] mb-2">Últimas transações</div>
                      {[
                        { name: "iFood", amt: "-R$ 45,90", time: "Hoje", pos: false },
                        { name: "Salário", amt: "+R$ 5.000", time: "Ontem", pos: true },
                      ].map((tx) => (
                        <div key={tx.name} className="flex justify-between py-1.5 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                          <div>
                            <div className="text-white text-[11px] font-medium">{tx.name}</div>
                            <div className="text-white/40 text-[10px]">{tx.time}</div>
                          </div>
                          <div
                            className="text-[11px] font-bold self-center"
                            style={{ color: tx.pos ? "#4ADE80" : "white" }}
                          >
                            {tx.amt}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Home bar */}
                  <div className="flex justify-center py-2">
                    <div className="w-20 h-1 rounded-full bg-white/20" />
                  </div>
                </div>

                {/* Notification popup — repositioned to be visible on mobile */}
                <div
                  className="absolute -right-2 sm:-right-6 top-20 w-40 sm:w-48 rounded-2xl p-3 shadow-2xl bg-white animate-float"
                  style={{ animationDelay: "1s" }}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "#820AD1" }}
                    >
                      <span className="text-white text-base font-black">↑</span>
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-gray-900">Pix recebido</div>
                      <div className="text-[11px] font-bold" style={{ color: "#16a34a" }}>+R$ 500,00</div>
                    </div>
                  </div>
                </div>

                {/* Purple glow under phone */}
                <div
                  className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-48 h-12 rounded-full opacity-40"
                  style={{ background: "#820AD1", filter: "blur(20px)" }}
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
