import { useState, useContext, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AuthContext } from "../../../contexts/AuthContext"
import Tipo from "../../../models/Tipo"
import { RotatingLines } from "react-loader-spinner"
import { buscar, deletar } from "../../../services/Service"
import { ToastAlerta } from "../../../utils/ToastAlerta"
import { AlertTriangle, Pizza, ArrowLeft, Trash2 } from "lucide-react"

function DeletarTipo() {

    const navigate = useNavigate()

    const [tipo, setTipo] = useState<Tipo>({} as Tipo)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    
    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await buscar(`/tipos/${id}`, setTipo, {
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

    async function deletarTipo() {
        setIsLoading(true)

        try {
            await deletar(`/tipos/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            ToastAlerta("Tipo de pizza apagado com sucesso", "sucesso")

        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }else {
                ToastAlerta("Erro ao deletar o tipo de pizza.", "erro")
            }
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/tipos")
    }
    
    return (
        <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] 
        bg-cover bg-center bg-fixed py-20">
            <div className="max-w-md mx-auto">
                <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                    {/* Cabeçalho com imagem de fundo */}
                    <div 
                        className="h-40 bg-cover bg-center relative"
                        style={{
                            backgroundImage: "url('https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80')"
                        }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6 w-full">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className="bg-red-500 p-2 rounded-full mr-3">
                                        <Trash2 className="h-6 w-6 text-white" />
                                    </div>
                                    <h1 className="text-2xl font-serif font-bold text-white tracking-wide">
                                        Excluir Tipo de Pizza
                                    </h1>
                                </div>
                                <button
                                    onClick={retornar}
                                    className="text-white hover:text-yellow-200 transition-colors bg-yellow-800/80 p-2 rounded-full"
                                    title="Voltar"
                                >
                                    <ArrowLeft className="h-6 w-6" />
                                </button>
                            </div>
                        </div>
                    </div>
                
                    <div className="p-6 border-t-4 border-red-500">
                        <div className="flex items-center gap-3 mb-4 text-red-500 bg-red-50 p-3 rounded-lg">
                            <AlertTriangle className="w-6 h-6" />
                            <p className="font-medium">
                                Você tem certeza de que deseja apagar este tipo de pizza?
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-4 mb-6 border border-gray-200">
                            <div className="flex items-center mb-2">
                                <Pizza className="w-5 h-5 text-yellow-600 mr-2" />
                                <p className="text-sm text-gray-600">Tipo a ser excluído:</p>
                            </div>
                            <p className="text-xl font-bold text-gray-800">{tipo.nome || 'Carregando...'}</p>
                            
                            <div className="mt-3 pt-3 border-t border-gray-200">
                                <p className="text-sm text-gray-500">
                                    {tipo.nome === "Tradicional" && "Pizzas clássicas com ingredientes tradicionais italianos."}
                                    {tipo.nome === "Especial" && "Combinações exclusivas criadas pelo nosso chef."}
                                    {tipo.nome === "Doce" && "Deliciosas opções de sobremesa para adoçar seu paladar."}
                                    {tipo.nome === "Vegetariana" && "Opções saborosas sem ingredientes de origem animal."}
                                    {!["Tradicional", "Especial", "Doce", "Vegetariana"].includes(tipo.nome || '') && 
                                        `Pizzas do tipo ${tipo.nome} com sabores incríveis.`}
                                </p>
                            </div>
                        </div>

                        <div className="text-sm text-gray-500 mb-4">
                            <p>Esta ação não pode ser desfeita. Todos os dados relacionados a este tipo de pizza serão permanentemente removidos.</p>
                        </div>

                        <div className="flex gap-2">
                            <button 
                                onClick={retornar}
                                className="flex-1 bg-gray-200 text-gray-800 py-3 px-4 rounded-lg font-medium hover:bg-gray-300 transition-colors duration-200 flex items-center justify-center gap-2"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                <span>Cancelar</span>
                            </button>
                            <button 
                                onClick={deletarTipo}
                                className="flex-1 bg-gradient-to-r from-red-500 to-red-700 text-white py-3 px-4 rounded-lg font-medium hover:from-red-600 hover:to-red-800 transition-colors duration-200 flex items-center justify-center gap-2"
                            >
                                {isLoading ? (
                                    <RotatingLines
                                        strokeColor="white"
                                        strokeWidth="5"
                                        animationDuration="0.75"
                                        width="24"
                                        visible={true}
                                    />
                                ) : (
                                    <>
                                        <Trash2 className="w-4 h-4" />
                                        <span>Confirmar Exclusão</span>
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeletarTipo;
