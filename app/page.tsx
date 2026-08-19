import EasterEgg from "../components/EasterEgg";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Navbar from "../components/Navbar";
import ProductShowcase from "../components/ProductShowcase";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-zinc-950 dark:bg-black dark:text-zinc-50">
      <div id="top" />
      <Navbar />

      <main className="flex flex-1 flex-col">
        <Hero />
        <ProductShowcase />
        <HowItWorks />
        <Footer />
      </main>

      <EasterEgg />
    </div>
  );
}
