import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const benefits = [
  "Sem anuidade para sempre",
  "Conta digital grátis",
  "Aprovação 100% digital",
  "Suporte humano 24/7",
];

export default function CTA() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="rounded-3xl p-8 lg:p-16 text-center relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #820AD1 0%, #5F0A9A 50%, #1C0032 100%)" }}
        >
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div
              className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-20 blur-3xl"
              style={{ background: "#A020D0" }}
            />
            <div
              className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full opacity-20 blur-3xl"
              style={{ background: "#D4B4FF" }}
            />
          </div>

          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-wider text-purple-300 mb-4">
              Pronto para começar?
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-2xl mx-auto leading-tight">
              Junte-se a mais de 100 milhões de clientes
            </h2>
            <p className="text-lg text-purple-200 mb-10 max-w-xl mx-auto">
              O banco que simplifica sua vida financeira. Sem burocracia, sem complicação, sem taxa.
            </p>

            {/* Benefits */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {benefits.map((b) => (
                <div key={b} className="flex items-center gap-2 text-sm text-white">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(255,255,255,0.2)" }}
                  >
                    <Check size={12} />
                  </div>
                  {b}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/cartao"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all hover:scale-105 active:scale-95 group"
                style={{ background: "white", color: "#820AD1" }}
              >
                Pedir cartão grátis
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/conta"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all border-2 hover:bg-white/10"
                style={{ color: "white", borderColor: "rgba(255,255,255,0.4)" }}
              >
                Abrir conta digital
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
