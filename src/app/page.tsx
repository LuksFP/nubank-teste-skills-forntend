import Hero from "@/components/sections/Hero";
import Products from "@/components/sections/Products";
import HowItWorks from "@/components/sections/HowItWorks";
import Numbers from "@/components/sections/Numbers";
import Testimonials from "@/components/sections/Testimonials";
import AppDownload from "@/components/sections/AppDownload";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Products />
      <HowItWorks />
      <Numbers />
      <Testimonials />
      <AppDownload />
      <FAQ />
      <CTA />
    </>
  );
}
