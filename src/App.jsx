import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal"; // ✅ Asegúrate que esta ruta sea correcta

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // ✅ Estado para el modal

  return (
    <>
      <Header />
      <Hero onOpenModal={() => setIsModalOpen(true)} />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <About />
      <Skills />
      <Portfolio />
      <Footer />
    </>
  );
};

export default App;

