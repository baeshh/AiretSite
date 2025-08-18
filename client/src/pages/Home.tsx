import SEO from "@/components/SEO";
import Hero from "@/components/Hero";
import Innovation from "@/components/Innovation";
import ProductShowcase from "@/components/ProductShowcase";
import Team from "@/components/Team";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <SEO />
      <Hero />
      <Innovation />
      <ProductShowcase />
      <Team />
      <Contact />
    </>
  );
}
