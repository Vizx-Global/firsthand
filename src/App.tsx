import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Trust } from "@/components/sections/Trust";
import { WhyUs } from "@/components/sections/WhyUs";
import Contact  from "@/components/sections/Contact";
import CTASection from "./components/sections/CTASection";
function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Process />
        <Trust />
        <WhyUs />
        <Contact />
        <CTASection/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
