import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { AuthContext } from '../../contexts/AuthContext'
import { ToastAlerta } from '../../utils/ToastAlerta'
import { Camera, Mail, MapPin, Calendar, Briefcase } from 'lucide-react';

function Perfil() {

    const navigate = useNavigate()

    const { usuario } = useContext(AuthContext)

    useEffect(() => {
        if (usuario.token === "") {
            ToastAlerta("Você precisa estar logado", "info")
            navigate("/")
        }
    }, [navigate, usuario.token])

    return (
        <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] 
        bg-cover bg-center bg-fixed py-32">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Cover Image */}
            <div className="relative h-80">
              <img 
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt="Cover"
              />
              <div className="absolute inset-0 bg-yellow-850 bg-opacity-30"></div>
            </div>
    
            {/* Profile Section */}
            <div className="relative px-6 -mt-24 pb-8">
              {/* Profile Picture */}
              <div className="relative">
                <img
                  className="w-48 h-48 rounded-full mx-auto border-4 border-white shadow-lg object-cover"
                  src={"https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?t=st=1738682425~exp=1738686025~hmac=b483192b2a83c01e619afd1e38699e8e62e77e09593fa4b6372d71b8a98181c0&w=826"}
                  alt={`Foto de perfil de ${usuario.nome}`}
                />
                <button className="absolute bottom-2 right-1/2 translate-x-16 bg-yellow-800 p-2 rounded-full text-white hover:bg-yellow-700 transition-colors">
                  <Camera size={20} />
                </button>
              </div>
    
              {/* User Info */}
              <div className="text-center mt-6">
                <h1 className="text-3xl font-bold text-gray-900">{usuario.nome}</h1>
                <p className="text-gray-600 mt-1">Desenvolvedor Full Stack</p>
              </div>

              {/* Detailed Info */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center text-gray-700">
                  <Mail className="w-5 h-5 text-yellow-800 mr-3" />
                  <span>{usuario.usuario}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <MapPin className="w-5 h-5 text-yellow-800 mr-3" />
                  <span>Rio de Janeiro, Brasil</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Briefcase className="w-5 h-5 text-yellow-800 mr-3" />
                  <span>Forneria 77</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Calendar className="w-5 h-5 text-yellow-800 mr-3" />
                  <span>Membro desde 2025</span>
                </div>
              </div>
    
              {/* Action Buttons */}
              <div className="mt-8 flex gap-4 justify-center">
                <button className="px-6 py-2 bg-yellow-800 text-white rounded-lg hover:bg-yellow-700 transition-colors">
                  Editar Perfil
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    export default Perfil;