import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #1C0032 0%, #3B0066 40%, #820AD1 100%)" }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-20 right-10 w-80 h-80 rounded-full opacity-20 blur-3xl"
          style={{ background: "#A020D0" }}
        />
        <div
          className="absolute bottom-20 left-10 w-60 h-60 rounded-full opacity-15 blur-3xl"
          style={{ background: "#D4B4FF" }}
        />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative text-center px-4 max-w-lg mx-auto">
        {/* 404 number */}
        <div
          className="text-[160px] sm:text-[200px] font-black leading-none mb-2 select-none"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(212,180,255,0.3))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          404
        </div>

        {/* Nubank logo */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ background: "#820AD1" }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 2C5.13 2 2 5.13 2 9s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7zm0 12.5c-3.03 0-5.5-2.47-5.5-5.5S5.97 3.5 9 3.5 14.5 5.97 14.5 9 12.03 14.5 9 14.5z" fill="white"/>
              <circle cx="9" cy="9" r="3" fill="white"/>
            </svg>
          </div>
          <span className="text-xl font-bold" style={{ color: "#D4B4FF" }}>nubank</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          Página não encontrada
        </h1>
        <p className="text-purple-300 mb-10 leading-relaxed">
          Parece que essa página não existe ou foi movida. Que tal voltar para o início e explorar tudo que o Nubank tem a oferecer?
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-base group transition-all hover:scale-105"
            style={{ background: "white", color: "#820AD1" }}
          >
            <Home size={18} />
            Voltar para o início
          </Link>
          <Link
            href="/cartao"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-base border transition-all hover:bg-white/10"
            style={{ color: "white", borderColor: "rgba(255,255,255,0.3)" }}
          >
            Ver produtos
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Quick links */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {[
            { label: "Cartão", href: "/cartao" },
            { label: "Conta", href: "/conta" },
            { label: "Seguros", href: "/seguros" },
            { label: "Investimentos", href: "/investimentos" },
            { label: "Sobre", href: "/sobre" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 rounded-full text-sm transition-colors"
              style={{ color: "#D4B4FF", background: "rgba(212,180,255,0.1)", border: "1px solid rgba(212,180,255,0.2)" }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
