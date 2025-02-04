import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all shadow-md duration-300 ${
        isScrolled ? "bg-black/75 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-66">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/home"
            className="flex items-center gap-3 text-2xl font-bold text-white hover:text-yellow-800 transition-transform transform hover:scale-105"
          >
            <img
              src="https://i.imgur.com/G1yyd1n.jpeg"
              alt="Logo"
              className="w-12 h-12 text-md text-white rounded-full border-2 border-yellow-800 hover:text-yellow-800 transition"
            />
            Forneria 77
          </Link>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="/home"
                className="text-white hover:text-yellow-800 px-3 py-2 rounded-md text-xl font-medium transition-transform transform hover:scale-105"
              >
                Início
              </a>
              <a
                href="#sobre-nos"
                className="text-white hover:text-yellow-800 px-3 py-2 rounded-md text-xl font-medium transition-transform transform hover:scale-105"
              >
                Sobre Nós
              </a>
              <Link
                to="/cardapio"
                className="text-white hover:text-yellow-800 px-3 py-2 rounded-md text-xl font-medium transition-transform transform hover:scale-105"
              >
                Cardápio
              </Link>
              <a
                href="/login"
                className="text-white hover:text-yellow-800 px-3 py-2 rounded-md text-xl font-medium transition-transform transform hover:scale-105"
              >
                Login
              </a>
              <a
                href="/perfil"
                className="text-white hover:text-yellow-800 px-3 py-2 rounded-md text-xl font-medium transition-transform transform hover:scale-105"
              >
                Perfil
              </a>
              <Link
                to="/cadastrartipos"
                className="text-white hover:text-yellow-800 px-3 py-2 rounded-md text-xl font-medium transition-transform transform hover:scale-105"
              >
                Cadastrar Tipo
              </Link>
              <Link
                to="/cadastrarpizza"
                className="text-white hover:text-yellow-800 px-3 py-2 rounded-md text-xl font-medium transition-transform transform hover:scale-105"
              >
                Cadastrar Pizzas
              </Link>
              <Link
                to="/tipos"
                className="text-white hover:text-yellow-800 px-3 py-2 rounded-md text-xl font-medium transition-transform transform hover:scale-105"
              >
                Tipos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
