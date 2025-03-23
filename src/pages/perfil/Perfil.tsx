import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { AuthContext } from '../../contexts/AuthContext'
import { ToastAlerta } from '../../utils/ToastAlerta'
import { Camera, Mail, MapPin, Calendar, Briefcase, Edit, LogOut } from 'lucide-react';

function Perfil() {
    const navigate = useNavigate()
    const { usuario, handleLogout } = useContext(AuthContext)

    useEffect(() => {
        if (usuario.token === "") {
            ToastAlerta("Você precisa estar logado", "info")
            navigate("/")
        }
    }, [navigate, usuario.token])

    function logout() {
        handleLogout()
        ToastAlerta("Usuário deslogado com sucesso!", "info")
        navigate("/")
    }

    return (
        <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] 
        bg-cover bg-center bg-fixed py-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden">
              {/* Cover Image */}
              <div className="relative h-64">
                <img 
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  alt="Cover"
                />
                <div className="absolute inset-0 bg-yellow-800/30"></div>
                <div className="absolute bottom-4 left-8">
                  <h1 className="text-4xl font-bold text-white drop-shadow-lg">Meu Perfil</h1>
                </div>
              </div>
      
              {/* Profile Section */}
              <div className="relative px-8 -mt-20 pb-8">
                {/* Profile Picture */}
                <div className="relative">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    className="w-40 h-40 rounded-full mx-auto border-4 border-white shadow-lg object-cover"
                    src={"https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?t=st=1738682425~exp=1738686025~hmac=b483192b2a83c01e619afd1e38699e8e62e77e09593fa4b6372d71b8a98181c0&w=826"}
                    alt={`Foto de perfil de ${usuario.nome}`}
                  />
                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute bottom-2 right-1/2 translate-x-16 bg-yellow-800 p-2 rounded-full text-white hover:bg-yellow-700 transition-colors shadow-md"
                  >
                    <Camera size={20} />
                  </motion.button>
                </div>
        
                {/* User Info */}
                <div className="text-center mt-6">
                  <h1 className="text-3xl font-bold text-gray-900">{usuario.nome}</h1>
                  <p className="text-yellow-800 font-medium mt-1">Desenvolvedor Full Stack</p>
                </div>

                {/* Detailed Info */}
                <div className="mt-8 grid md:grid-cols-2 gap-6">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="bg-gray-50 p-5 rounded-lg shadow-sm"
                  >
                    <h3 className="text-lg font-semibold mb-4 text-gray-800 border-b border-gray-200 pb-2">Informações de Contato</h3>
                    <div className="flex items-center text-gray-700 mb-4">
                      <Mail className="w-5 h-5 text-yellow-800 mr-3" />
                      <span>{usuario.usuario}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <MapPin className="w-5 h-5 text-yellow-800 mr-3" />
                      <span>Rio de Janeiro, Brasil</span>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="bg-gray-50 p-5 rounded-lg shadow-sm"
                  >
                    <h3 className="text-lg font-semibold mb-4 text-gray-800 border-b border-gray-200 pb-2">Informações Profissionais</h3>
                    <div className="flex items-center text-gray-700 mb-4">
                      <Briefcase className="w-5 h-5 text-yellow-800 mr-3" />
                      <span>Forneria 77</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Calendar className="w-5 h-5 text-yellow-800 mr-3" />
                      <span>Membro desde 2025</span>
                    </div>
                  </motion.div>
                </div>
        
                {/* Action Buttons */}
                <div className="mt-8 flex flex-wrap gap-4 justify-center">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2.5 bg-yellow-800 text-white rounded-lg hover:bg-yellow-700 transition-colors flex items-center gap-2 shadow-md"
                  >
                    <Edit size={18} />
                    Editar Perfil
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={logout}
                    className="px-6 py-2.5 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors flex items-center gap-2 shadow-md"
                  >
                    <LogOut size={18} />
                    Sair
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
    );
}

    export default Perfil;
