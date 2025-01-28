
import { useState } from "react";

import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

import Sobre from "./pages/sobre/Sobre";


function App() {
  return (
    <>

    <Navbar />
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center p-4">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-">Página de Teste</h1>
        <p className="text-">Este é um exemplo básico usando Tailwind CSS.</p>
      </header>

      {/* Links de navegação */}
      <div className="mt-8 space-x-4">
        <a
          href="https://vite.dev"
          target="_blank"
          className="text-blue-500 hover:underline"
        >
          Aprenda sobre Vite
        </a>
        <a
          href="https://react.dev"
          target="_blank"
          className="text-blue-500 hover:underline"
        >
          Aprenda sobre React
        </a>
      </div>
    </div>
    
    <Footer/>
     
      </>
);

      



}

export default App;
