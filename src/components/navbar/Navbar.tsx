import { useState, useEffect, useContext, ReactNode } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { ToastAlerta } from "../../utils/ToastAlerta";
import { AuthContext } from "../../contexts/AuthContext";
import logo1 from "../../assets/logo1.jpg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    ToastAlerta("O Usuário foi desconectado com sucesso!", "info");
    navigate("/");
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all shadow-md duration-300 ${
        isScrolled ? "bg-black/75 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-66">
        <div className="flex items-center justify-between h-20">
          {/* Logo - sempre visível */}
          <Link
            to={usuario.token !== "" ? "/home" : "/"}
            className="flex items-center gap-3 text-2xl font-bold text-white hover:text-yellow-800 transition-transform transform hover:scale-105"
          >
            <div className="relative">
              {/* Moldura estilizada */}
              <div className="absolute inset-0 border-2 border-yellow-600 rounded-full transform rotate-12 scale-110"></div>
              <div className="absolute inset-0 border-2 border-yellow-800 rounded-full transform -rotate-6 scale-105"></div>
              
              {/* Logo com fundo circular */}
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-yellow-700 shadow-lg">
                <img
                  src={logo1}
                  alt="Logo"
                  className="w-full h-full object-cover transition hover:scale-110 duration-300"
                />
              </div>
            </div>
            Forneria 77
          </Link>

          {/* Links de navegação - visíveis apenas quando logado */}
          {usuario.token !== "" ? (
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/home"
                  className="text-white hover:text-yellow-800 px-3 py-2 rounded-md text-xl font-medium transition-transform transform hover:scale-105"
                >
                  Início
                </Link>

                <Link
                  to="/sobre"
                  className="text-white hover:text-yellow-800 px-3 py-2 rounded-md text-xl font-medium transition-transform transform hover:scale-105"
                >
                  Sobre Nós
                </Link>

                <Link
                  to="/cardapio"
                  className="text-white hover:text-yellow-800 px-3 py-2 rounded-md text-xl font-medium transition-transform transform hover:scale-105"
                >
                  Cardápio
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

                <Link
                  to="/cadastrartipos"
                  className="text-white hover:text-yellow-800 px-3 py-2 rounded-md text-xl font-medium transition-transform transform hover:scale-105"
                >
                  Cadastrar Tipo
                </Link>

                <Link
                  to="/perfil"
                  className="text-white hover:text-yellow-800 px-3 py-2 rounded-md text-xl font-medium transition-transform transform hover:scale-105"
                >
                  Perfil
                </Link>

                <Link
                  to=""
                  onClick={logout}
                  className="text-white hover:text-yellow-800 px-3 py-2 rounded-md text-xl font-medium transition-transform transform hover:scale-105"
                >
                  Sair
                </Link>
              </div>
            </div>
          ) : (
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/login"
                  className="text-white hover:text-yellow-800 px-3 py-2 rounded-md text-xl font-medium transition-transform transform hover:scale-105"
                >
                  Login
                </Link>
                <Link
                  to="/cadastro"
                  className="text-white hover:text-yellow-800 px-3 py-2 rounded-md text-xl font-medium transition-transform transform hover:scale-105"
                >
                  Cadastro
                </Link>
              </div>
            </div>
          )}

          {/* Mobile menu button - sempre visível */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-yellow-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X
                  size={32}
                  className="transition-transform transform hover:scale-110"
                />
              ) : (
                <Menu
                  size={32}
                  className="transition-transform transform hover:scale-110"
                />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu - conteúdo depende do estado de login */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? "max-h-screen opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black/75 backdrop-blur-sm rounded-b-lg">
            {usuario.token !== "" ? (
              <>
                <Link
                  to="/home"
                  className="text-white hover:text-yellow-800 block px-3 py-2 rounded-md text-xl font-medium transition-transform transform hover:scale-105"
                >
                  Início
                </Link>

                <Link
                  to="/sobre"
                  className="text-white hover:text-yellow-800 block px-3 py-2 rounded-md text-xl font-medium transition-transform transform hover:scale-105"
                >
                  Sobre Nós
                </Link>

                <Link
                  to="/cardapio"
                  className="text-white hover:text-yellow-800 block px-3 py-2 rounded-md text-xl font-medium transition-transform transform hover:scale-105"
                >
                  Cardápio
                </Link>

                <Link
                  to="/cadastrarpizza"
                  className="text-white hover:text-yellow-800 block px-3 py-2 rounded-md text-xl font-medium transition-transform transform hover:scale-105"
                >
                  Cadastrar Pizzas
                </Link>

                <Link
                  to="/tipos"
                  className="text-white hover:text-yellow-800 block px-3 py-2 rounded-md text-xl font-medium transition-transform transform hover:scale-105"
                >
                  Tipos
                </Link>

                <Link
                  to="/cadastrartipos"
                  className="text-white hover:text-yellow-800 block px-3 py-2 rounded-md text-xl font-medium transition-transform transform hover:scale-105"
                >
                  Cadastrar Tipo
                </Link>

                <Link
                  to="/perfil"
                  className="text-white hover:text-yellow-800 block px-3 py-2 rounded-md text-xl font-medium transition-transform transform hover:scale-105"
                >
                  Perfil
                </Link>

                <Link
                  to=""
                  onClick={logout}
                  className="text-white hover:text-yellow-800 block px-3 py-2 rounded-md text-xl font-medium transition-transform transform hover:scale-105"
                >
                  Sair
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-white hover:text-yellow-800 block px-3 py-2 rounded-md text-xl font-medium transition-transform transform hover:scale-105"
                >
                  Login
                </Link>
                <Link
                  to="/cadastro"
                  className="text-white hover:text-yellow-800 block px-3 py-2 rounded-md text-xl font-medium transition-transform transform hover:scale-105"
                >
                  Cadastro
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
