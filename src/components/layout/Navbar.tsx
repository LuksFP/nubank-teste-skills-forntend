"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const products = [
  { name: "Cartão de Crédito", href: "/cartao", desc: "Sem anuidade, sem complicação" },
  { name: "Ultravioleta", href: "/ultravioleta", desc: "Nosso cartão premium com cashback" },
  { name: "Conta Digital", href: "/conta", desc: "Conta gratuita com rendimento" },
  { name: "Seguros", href: "/seguros", desc: "Proteção para você e sua família" },
  { name: "Empréstimo", href: "/emprestimo", desc: "Crédito pessoal descomplicado" },
  { name: "Investimentos", href: "/investimentos", desc: "Seu dinheiro rendendo mais" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-purple-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "#820AD1" }}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 2C5.13 2 2 5.13 2 9s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7zm0 12.5c-3.03 0-5.5-2.47-5.5-5.5S5.97 3.5 9 3.5 14.5 5.97 14.5 9 12.03 14.5 9 14.5z" fill="white"/>
                <circle cx="9" cy="9" r="3" fill="white"/>
              </svg>
            </div>
            <span
              className={`text-xl font-bold tracking-tight transition-colors ${
                isScrolled ? "text-[#820AD1]" : "text-white"
              }`}
            >
              nubank
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                  isScrolled ? "text-gray-700 hover:text-[#820AD1]" : "text-white/90 hover:text-white"
                }`}
              >
                Produtos
                <ChevronDown
                  size={16}
                  className={`transition-transform ${productsOpen ? "rotate-180" : ""}`}
                />
              </button>

              {productsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 p-2 animate-fade-in">
                  {products.map((product) => (
                    <Link
                      key={product.href}
                      href={product.href}
                      className="flex flex-col px-4 py-3 rounded-xl hover:bg-purple-50 transition-colors group"
                    >
                      <span className="text-sm font-semibold text-gray-900 group-hover:text-[#820AD1]">
                        {product.name}
                      </span>
                      <span className="text-xs text-gray-500 mt-0.5">{product.desc}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/sobre"
              className={`text-sm font-medium transition-colors ${
                isScrolled ? "text-gray-700 hover:text-[#820AD1]" : "text-white/90 hover:text-white"
              }`}
            >
              Sobre
            </Link>
            <Link
              href="/blog"
              className={`text-sm font-medium transition-colors ${
                isScrolled ? "text-gray-700 hover:text-[#820AD1]" : "text-white/90 hover:text-white"
              }`}
            >
              Blog
            </Link>
            <Link
              href="/carreiras"
              className={`text-sm font-medium transition-colors ${
                isScrolled ? "text-gray-700 hover:text-[#820AD1]" : "text-white/90 hover:text-white"
              }`}
            >
              Carreiras
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="#login"
              className={`text-sm font-medium px-4 py-2 rounded-full transition-colors ${
                isScrolled
                  ? "text-[#820AD1] hover:bg-purple-50"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Entrar
            </Link>
            <Link
              href="#pedircartao"
              className="text-sm font-semibold px-5 py-2.5 rounded-full transition-all hover:scale-105 active:scale-95"
              style={{ background: "#820AD1", color: "white" }}
            >
              Pedir cartão
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? "text-gray-700" : "text-white"
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 animate-fade-in">
          <div className="px-4 py-4 space-y-1">
            {products.map((product) => (
              <Link
                key={product.href}
                href={product.href}
                onClick={() => setIsOpen(false)}
                className="flex flex-col px-4 py-3 rounded-xl hover:bg-purple-50 transition-colors"
              >
                <span className="text-sm font-semibold text-gray-900">{product.name}</span>
                <span className="text-xs text-gray-500">{product.desc}</span>
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-100 flex flex-col gap-2">
              <Link
                href="#login"
                onClick={() => setIsOpen(false)}
                className="text-center text-sm font-medium py-3 rounded-xl border border-gray-200 text-gray-700"
              >
                Entrar
              </Link>
              <Link
                href="#pedircartao"
                onClick={() => setIsOpen(false)}
                className="text-center text-sm font-semibold py-3 rounded-xl text-white"
                style={{ background: "#820AD1" }}
              >
                Pedir cartão grátis
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
