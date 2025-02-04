import { useState, useContext, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AuthContext } from "../../../contexts/AuthContext"
import Tipo from "../../../models/Tipo"
import { RotatingLines } from "react-loader-spinner"
import { buscar, deletar } from "../../../services/Service"
import { ToastAlerta } from "../../../utils/ToastAlerta"
import { AlertTriangle } from "lucide-react"

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
        bg-cover bg-center bg-fixed py-24 min-h-24 bg-transparent flex items-center justify-center p-24">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-sm">
                <div className="bg-yellow-900 text-white p-4">
                    <h2 className="text-xl font-semibold">Confirmar Exclusão</h2>
                </div>
                
                <div className="p-6">
                    <div className="flex items-center gap-3 mb-4 text-red-500">
                        <AlertTriangle className="w-6 h-6" />
                        <p className="font-medium">
                            Você tem certeza de que deseja apagar este tipo de pizza?
                        </p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4 mb-6">
                        <p className="text-sm text-gray-600 mb-2">Tipo a ser excluído:</p>
                        <p className="text-xl font-bold text-gray-800">{tipo.nome}</p>
                    </div>

                    <div className="flex gap-2">
                        <button 
                            onClick={retornar}
                            className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-lg font-medium hover:bg-gray-300 transition-colors duration-200"
                        >
                            Cancelar
                        </button>
                        <button 
                            onClick={deletarTipo}
                            className="flex-1 bg-red-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-red-600 transition-colors duration-200 flex items-center justify-center"
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
                                'Confirmar Exclusão'
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeletarTipo;