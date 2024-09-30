import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HaagisedSection from "./components/HaagisedSection";
import TraktoridSection from "./components/TraktoridSection";
import MuuSection from "./components/MuuSection";
import ContactSection from "./components/ContactSection";
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 60, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 w-screen overflow-x-hidden">
      <Navbar
        scrollToTop={scrollToTop}
        handleSmoothScroll={handleSmoothScroll}
        isOpen={isOpen}
        toggleMenu={toggleMenu}
      />
      <main className="flex-grow">
        <HaagisedSection />
        <TraktoridSection />
        <MuuSection />
        <ContactSection />        
        
      </main>
      <Footer />
    </div>
  );
}

export default App;
