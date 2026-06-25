import { About } from "@/components/About";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Partner } from "@/components/Partner";
import { ProductSection } from "@/components/ProductSection";
import { ResellerSection } from "@/components/ResellerSection";
import { StructuredData } from "@/components/StructuredData";
import { Testimonials } from "@/components/Testimonials";

export const dynamic = "force-static";

export default function Home() {
  return (
    <>
      <StructuredData />
      <Navbar />
      <main>
        <Hero />
        <Partner />
        <About />
        <ProductSection />
        <ResellerSection />
        <Testimonials />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
