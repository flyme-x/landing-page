import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Features1 } from "@/components/features-1";
import { Cta } from "@/components/cta";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Features1 />
      <Cta />
      <Faq />
      <Footer />
    </>
  );
}
