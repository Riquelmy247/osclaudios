import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import BottomNav from "./components/BottomNav";
import Hero from "./sections/Hero";
import Marquee from "./sections/Marquee";
import About from "./sections/About";
import Highlights from "./sections/Highlights";
import Instagram from "./sections/Instagram";
import ContactCTA from "./sections/ContactCTA";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Marquee />
        <About />
        <Highlights />
        <Instagram />
        <ContactCTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <BottomNav />
      <div className="grain" aria-hidden="true" />
    </>
  );
}
