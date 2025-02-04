import { useState, useEffect, useContext, ReactNode } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { ToastAlerta } from "../../utils/ToastAlerta";
import { AuthContext } from "../../contexts/AuthContext";

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

  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {

    handleLogout()
    ToastAlerta('O Usuário foi desconectado com sucesso!', 'info')
    navigate('/')
}

let component: ReactNode

if (usuario.token !== "") { 

  component = (
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
              src="https://i.imgur.com/NpHYkwe.png"
              alt="Logo"
              className="w-12 h-12 text-md text-white hover:text-yellow-800 transition"
            />
            Forneria 77
          </Link>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
            
                <Link to="/home" className="text-white hover:text-yellow-800 px-3 py-2 rounded-md text-xl font-medium transition-transform transform hover:scale-105">
                Início
                </Link>
          
              <a
                href="#sobre-nos"
                className="text-white hover:text-yellow-800 px-3 py-2 rounded-md text-xl font-medium transition-transform transform hover:scale-105"
              >
                Sobre Nós
              </a>

              <Link to="/cardapio" className="text-white hover:text-yellow-800 px-3 py-2 rounded-md text-xl font-medium transition-transform transform hover:scale-105">
                Cardápio
              </Link>

              <Link to="/cadastrarpizza" className="text-white hover:text-yellow-800 px-3 py-2 rounded-md text-xl font-medium transition-transform transform hover:scale-105">
                Cadastrar Pizzas
              </Link>

              <Link to="/tipos" className="text-white hover:text-yellow-800 px-3 py-2 rounded-md text-xl font-medium transition-transform transform hover:scale-105">
                Tipos
              </Link>

              <Link to="/cadastrartipos" className="text-white hover:text-yellow-800 px-3 py-2 rounded-md text-xl font-medium transition-transform transform hover:scale-105">
                Cadastrar Tipo
              </Link>

               <Link to="/perfil" className="text-white hover:text-yellow-800 px-3 py-2 rounded-md text-xl font-medium transition-transform transform hover:scale-105">
                Perfil
              </Link>

              <Link to='' onClick={logout} className="text-white hover:text-yellow-800 px-3 py-2 rounded-md text-xl font-medium transition-transform transform hover:scale-105">Sair</Link>

            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-yellow-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X size={32} className="transition-transform transform hover:scale-110" />
              ) : (
                <Menu size={32} className="transition-transform transform hover:scale-110" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? "max-h-screen opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black/75 backdrop-blur-sm rounded-b-lg">
           
           <Link to="/home" className="text-white hover:text-yellow-800 px-3 py-2 rounded-md text-xl font-medium transition-transform transform hover:scale-105">
                Início
                </Link>
          
              <a
                href="#sobre-nos"
                className="text-white hover:text-yellow-800 px-3 py-2 rounded-md text-xl font-medium transition-transform transform hover:scale-105"
              >
                Sobre Nós
              </a>

              <Link to="/cardapio" className="text-white hover:text-yellow-800 px-3 py-2 rounded-md text-xl font-medium transition-transform transform hover:scale-105">
                Cardápio
              </Link>

              <Link to="/cadastrarpizza" className="text-white hover:text-yellow-800 px-3 py-2 rounded-md text-xl font-medium transition-transform transform hover:scale-105">
                Cadastrar Pizzas
              </Link>

              <Link to="/tipos" className="text-white hover:text-yellow-800 px-3 py-2 rounded-md text-xl font-medium transition-transform transform hover:scale-105">
                Tipos
              </Link>

              <Link to="/cadastrartipos" className="text-white hover:text-yellow-800 px-3 py-2 rounded-md text-xl font-medium transition-transform transform hover:scale-105">
                Cadastrar Tipo
              </Link>

               <Link to="/perfil" className="text-white hover:text-yellow-800 px-3 py-2 rounded-md text-xl font-medium transition-transform transform hover:scale-105">
                Perfil
              </Link>

              <Link to='' onClick={logout} className="text-white hover:text-yellow-800 px-3 py-2 rounded-md text-xl font-medium transition-transform transform hover:scale-105">Sair</Link>
              
          </div>
        </div>
      </div>
    </nav>
  );
};

 return (
        <>
            { component }
        </>
    )
}

export default Navbar
