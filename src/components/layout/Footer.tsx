"use client";

import Link from "next/link";
import { Instagram, Twitter, Linkedin, Youtube, Facebook } from "lucide-react";

const footerLinks = {
  "Produtos": [
    { name: "Cartão de Crédito", href: "/cartao" },
    { name: "Conta Digital", href: "/conta" },
    { name: "Seguros", href: "/seguros" },
    { name: "Empréstimo Pessoal", href: "/emprestimo" },
    { name: "Investimentos", href: "/investimentos" },
    { name: "Ultravioleta", href: "/ultravioleta" },
  ],
  "Empresa": [
    { name: "Sobre o Nubank", href: "/sobre" },
    { name: "Imprensa", href: "/imprensa" },
    { name: "Carreiras", href: "/carreiras" },
    { name: "Investidores", href: "/investidores" },
    { name: "Blog", href: "/blog" },
    { name: "Segurança", href: "/seguranca" },
  ],
  "Ajuda": [
    { name: "Central de Ajuda", href: "/ajuda" },
    { name: "Fale Conosco", href: "/contato" },
    { name: "Acessibilidade", href: "/acessibilidade" },
    { name: "Política de Privacidade", href: "/privacidade" },
    { name: "Termos de Uso", href: "/termos" },
    { name: "Ouvidoria", href: "/ouvidoria" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter / X" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Facebook, href: "#", label: "Facebook" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#1C0032" }} className="text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: "#820AD1" }}
              >
                <svg width="22" height="22" viewBox="0 0 18 18" fill="none">
                  <path d="M9 2C5.13 2 2 5.13 2 9s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7zm0 12.5c-3.03 0-5.5-2.47-5.5-5.5S5.97 3.5 9 3.5 14.5 5.97 14.5 9 12.03 14.5 9 14.5z" fill="white"/>
                  <circle cx="9" cy="9" r="3" fill="white"/>
                </svg>
              </div>
              <span className="text-2xl font-bold" style={{ color: "#820AD1" }}>nubank</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-6">
              Somos uma empresa de tecnologia e serviços financeiros. Nossa missão é lutar contra a complexidade para devolver às pessoas o controle sobre a sua vida financeira.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                  style={{ background: "rgba(130,10,209,0.2)" }}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-400 mb-4">
                {title}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* App stores */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors border"
                style={{ borderColor: "rgba(255,255,255,0.2)", color: "white" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                App Store
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors border"
                style={{ borderColor: "rgba(255,255,255,0.2)", color: "white" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.18 23.76c.28.15.6.19.93.09l12.43-7.17-2.63-2.63-10.73 9.71zM.25 2.27C.09 2.57 0 2.92 0 3.31v17.38c0 .39.09.74.25 1.04l.09.09 9.74-9.74v-.22L.34 2.18l-.09.09zM20.74 10.46l-2.63-1.52-2.94 2.94 2.94 2.94 2.65-1.53c.76-.44.76-1.38-.02-1.83zM3.18.24L15.61 7.41l-2.63 2.63L2.25.33A.97.97 0 013.18.24z"/>
                </svg>
                Google Play
              </a>
            </div>
            <p className="text-gray-500 text-xs text-center md:text-right">
              © {new Date().getFullYear()} Nu Pagamentos S.A. - CNPJ: 18.236.120/0001-58
              <br />
              Todos os direitos reservados. Rua Capote Valente, 39, São Paulo, SP.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
