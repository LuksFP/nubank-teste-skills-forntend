export default function AppDownload() {
  return (
    <section className="py-24 bg-white" id="app">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="rounded-3xl p-8 lg:p-16 overflow-hidden relative"
          style={{ background: "linear-gradient(135deg, #F5E6FF 0%, #E8C6FF 100%)" }}
        >
          {/* Background circles */}
          <div
            className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-30 blur-3xl pointer-events-none"
            style={{ background: "#820AD1", transform: "translate(30%, -30%)" }}
          />

          <div className="grid lg:grid-cols-2 gap-12 items-center relative">
            {/* Text */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: "#820AD1" }}>
                Baixe o app
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                Controle tudo na palma da sua mão
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Acesse sua conta, pague faturas, faça transferências, invista e muito mais.
                Disponível para iOS e Android, gratuitamente.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#"
                  className="flex items-center gap-3 px-5 py-3.5 rounded-xl font-medium transition-all hover:scale-105"
                  style={{ background: "#1C0032", color: "white" }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div>
                    <div className="text-xs opacity-70">Baixar na</div>
                    <div className="text-sm font-bold">App Store</div>
                  </div>
                </a>

                <a
                  href="#"
                  className="flex items-center gap-3 px-5 py-3.5 rounded-xl font-medium transition-all hover:scale-105"
                  style={{ background: "#1C0032", color: "white" }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.18 23.76c.28.15.6.19.93.09l12.43-7.17-2.63-2.63-10.73 9.71zM.25 2.27C.09 2.57 0 2.92 0 3.31v17.38c0 .39.09.74.25 1.04l.09.09 9.74-9.74v-.22L.34 2.18l-.09.09zM20.74 10.46l-2.63-1.52-2.94 2.94 2.94 2.94 2.65-1.53c.76-.44.76-1.38-.02-1.83zM3.18.24L15.61 7.41l-2.63 2.63L2.25.33A.97.97 0 013.18.24z" />
                  </svg>
                  <div>
                    <div className="text-xs opacity-70">Disponível no</div>
                    <div className="text-sm font-bold">Google Play</div>
                  </div>
                </a>
              </div>

              <div className="mt-6 flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#820AD1" }} />
                  Mais de 100M de downloads
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#820AD1" }} />
                  Nota 4.9 nas lojas
                </div>
              </div>
            </div>

            {/* Phone mockup */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-64">
                {/* Phone body */}
                <div
                  className="w-64 h-[500px] rounded-[40px] relative overflow-hidden shadow-2xl"
                  style={{ background: "#1C0032", border: "4px solid #3B0066" }}
                >
                  {/* Screen */}
                  <div className="absolute inset-2 rounded-[36px] overflow-hidden" style={{ background: "#2A0050" }}>
                    {/* Status bar */}
                    <div className="flex justify-between items-center px-4 pt-3 pb-2">
                      <span className="text-white text-xs">9:41</span>
                      <div className="flex gap-1">
                        <div className="w-4 h-2 rounded-sm border border-white/50 relative">
                          <div className="absolute inset-0.5 bg-white/80 rounded-sm" style={{ width: "70%" }} />
                        </div>
                      </div>
                    </div>

                    {/* App header */}
                    <div className="px-4 py-3" style={{ background: "#820AD1" }}>
                      <div className="text-white/70 text-xs mb-1">Olá, Pessoa!</div>
                      <div className="text-white font-bold text-xl">R$ 5.840,00</div>
                      <div className="text-purple-200 text-xs">Saldo da conta</div>
                    </div>

                    {/* Quick actions */}
                    <div className="px-4 py-4 grid grid-cols-4 gap-2">
                      {["Pix", "Pagar", "Cobrar", "Mais"].map((action) => (
                        <div key={action} className="flex flex-col items-center gap-1">
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center"
                            style={{ background: "rgba(130,10,209,0.15)" }}
                          >
                            <div className="w-4 h-4 rounded-sm" style={{ background: "#820AD1" }} />
                          </div>
                          <span className="text-white text-[9px]">{action}</span>
                        </div>
                      ))}
                    </div>

                    {/* Card section */}
                    <div className="px-4">
                      <div className="text-white/60 text-xs mb-2">Meu Cartão</div>
                      <div
                        className="rounded-xl p-3"
                        style={{ background: "linear-gradient(135deg, #820AD1, #1C0032)" }}
                      >
                        <div className="text-white/50 text-xs mb-2">nubank</div>
                        <div className="text-white font-mono text-sm tracking-wider">•••• 1234</div>
                        <div className="flex justify-between mt-2">
                          <div className="text-white/50 text-xs">Fatura atual</div>
                          <div className="text-white text-xs font-bold">R$ 1.250</div>
                        </div>
                      </div>
                    </div>

                    {/* Transaction list */}
                    <div className="px-4 pt-4">
                      <div className="text-white/60 text-xs mb-2">Últimas transações</div>
                      {[
                        { name: "iFood", amount: "-R$ 45,90", time: "Hoje" },
                        { name: "Salário", amount: "+R$ 5.000", time: "Ontem", positive: true },
                      ].map((tx) => (
                        <div key={tx.name} className="flex justify-between items-center py-2">
                          <div>
                            <div className="text-white text-xs font-medium">{tx.name}</div>
                            <div className="text-white/40 text-xs">{tx.time}</div>
                          </div>
                          <div
                            className="text-xs font-bold"
                            style={{ color: tx.positive ? "#4CAF50" : "white" }}
                          >
                            {tx.amount}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Home indicator */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full bg-white/30" />
                </div>

                {/* Notification popup */}
                <div
                  className="absolute -right-4 top-24 w-48 rounded-2xl p-3 shadow-xl animate-float"
                  style={{
                    background: "white",
                    animationDelay: "1s",
                  }}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "#820AD1" }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path d="M12 2v20M2 12h20" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-900">Pix recebido</div>
                      <div className="text-xs text-green-600 font-semibold">+ R$ 500,00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
