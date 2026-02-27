import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Features from "@/components/Features";
import ROI from "@/components/ROI";
import DemoForm from "@/components/DemoForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problems />
        <Features />
        <ROI />
        <DemoForm />
      </main>
      <Footer />
    </>
  );
}
