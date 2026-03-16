import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Nubank - O banco digital que simplifica sua vida financeira",
  description:
    "Cartão de crédito sem anuidade, conta digital com rendimento, investimentos e muito mais. Tudo no seu celular, sem burocracia.",
  keywords: ["nubank", "banco digital", "cartão de crédito", "sem anuidade", "conta digital", "pix", "investimentos"],
  openGraph: {
    title: "Nubank - O banco digital que simplifica sua vida financeira",
    description: "Cartão de crédito sem anuidade, conta digital com rendimento. Mais de 100 milhões de clientes.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link
          href="https://fonts.bunny.net/css?family=inter:300,400,500,600,700,800,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
