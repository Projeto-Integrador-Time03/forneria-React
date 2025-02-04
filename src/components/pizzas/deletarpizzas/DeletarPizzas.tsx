import { useState, useContext, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AuthContext } from "../../../contexts/AuthContext"
import { buscar, deletar } from "../../../services/Service"
import { RotatingLines } from "react-loader-spinner"
import Pizza from "../../../models/Pizza"
import { ToastAlerta } from "../../../utils/ToastAlerta"
import { Star, ChefHat, Utensils } from 'lucide-react'

function DeletarPizzas() {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [pizzas, setPizzas] = useState<Pizza>({} as Pizza)

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPorId(id: string) {
        try {
            await buscar(`/pizzas/${id}`, setPizzas, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            ToastAlerta("Você precisa estar logado", "info")
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarPizzas() {
        setIsLoading(true)

        try {
            await deletar(`/pizzas/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            ToastAlerta("Pizza apagada com sucesso", "sucesso")

        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }else {
                ToastAlerta("Erro ao deletar a pizza.", "erro")
            }
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/pizzas")
    }
    
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-30"
        style={{
            backgroundImage: "url('https://i.pinimg.com/736x/8b/4a/a6/8b4aa6d5278e6f07e42c669d4a16d5da.jpg')",
          }}>
            <div className="max-w-sm w-full bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                    <img 
                        src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80"
                        alt="Pizzas"
                        className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-semibold text-gray-700 shadow-md">
                        R$ {pizzas.valor}
                    </div>
                </div>
                
                <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-xl font-bold text-gray-800">{pizzas.sabor}</p>
                        <div className="flex items-center text-yellow-400">
                            <Star className="w-5 h-5 fill-current" />
                            <span className="ml-1 text-sm font-medium">4.8</span>
                        </div>
                    </div>
                    
                    <div className="space-y-4">
                        <div className="flex items-center text-gray-600">
                            <ChefHat className="w-5 h-5 mr-2" />
                            <p className="text-sm">Ingredientes: {pizzas.descricao}</p>
                        </div>
                        
                        <div className="flex items-center text-gray-600">
                            <Utensils className="w-5 h-5 mr-2" />
                            <p className="text-sm">Tamanho: {pizzas.tamanho}</p>
                        </div>
                    </div>

                    <div className="mt-6 flex gap-2">
                        <button 
                            className="flex-1 bg-red-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-red-600 transition-colors duration-200"
                            onClick={retornar}>
                            Não
                        </button>
                        <button 
                            className="flex-1 bg-indigo-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-indigo-600 transition-colors duration-200 flex items-center justify-center"
                            onClick={deletarPizzas}>
                            {isLoading ?
                                <RotatingLines
                                    strokeColor="white"
                                    strokeWidth="5"
                                    animationDuration="0.75"
                                    width="24"
                                    visible={true}
                                /> :
                                <span>Sim</span>
                            }
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeletarPizzas