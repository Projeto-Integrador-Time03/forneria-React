import { ChangeEvent, useContext, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import Tipo from "../../../models/Tipo";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { Pizza, Save, ArrowLeft } from "lucide-react";

function FormTipo() {

    const navigate = useNavigate();

    const [tipo, setTipo] = useState<Tipo>({} as Tipo)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/tipos/${id}`, setTipo, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            ToastAlerta("Você precisa estar logado!", "info")
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setTipo({
            ...tipo,
            [e.target.name]: e.target.value
        })
    }

    function retornar() {
        navigate("/tipos")
    }

    async function gerarNovoTipo(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/tipos`, tipo, setTipo, {
                    headers: { 'Authorization': token }
                })
                ToastAlerta("O tipo de pizza foi atualizado com sucesso!", "sucesso")
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    handleLogout();
                } else {
                    ToastAlerta("Erro ao atualizar o tipo de pizza.", "erro")
                }
            }
        } else {
            try {
                await cadastrar(`/tipos`, tipo, setTipo, {
                    headers: { 'Authorization': token }
                })
                ToastAlerta("O tipo de pizza foi cadastrado com sucesso!", "sucesso")
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    handleLogout();
                } else {
                    ToastAlerta("Erro ao cadastrar o tipo de pizza.", "erro")
                }
            }
        }

        setIsLoading(false)
        retornar()
    }

    return (
        <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] 
        bg-cover bg-center bg-fixed py-20">
            <div className="max-w-2xl mx-auto">
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
                                    <div className="bg-yellow-600 p-2 rounded-full mr-3">
                                        <Pizza className="h-6 w-6 text-white" />
                                    </div>
                                    <h1 className="text-2xl font-serif font-bold text-white tracking-wide">
                                        {id === undefined ? 'Cadastrar Tipo de Pizza' : 'Editar Tipo de Pizza'}
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

                    <div className="p-6 border-t-4 border-yellow-600">
                        <form className="space-y-6" onSubmit={gerarNovoTipo}>
                            <div className="space-y-2">
                                <label 
                                    htmlFor="nome" 
                                    className="block text-lg font-semibold text-gray-700"
                                >
                                    Nome do Tipo de Pizza
                                </label>
                                <input
                                    type="text"
                                    placeholder="Ex: Tradicional, Especial, Vegetariana, Doce..."
                                    name="nome"
                                    className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600 transition-colors"
                                    value={tipo.nome || ''}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                                />
                                <p className="text-sm text-gray-500 mt-1">
                                    Dê um nome descritivo para categorizar suas pizzas.
                                </p>
                            </div>

                            <div className="pt-4">
                                <button
                                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-gradient-to-r from-yellow-600 to-yellow-800 hover:from-yellow-700 hover:to-yellow-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-600 transition-all duration-200 gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                    type="submit"
                                    disabled={isLoading}
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
                                            <Save className="h-5 w-5" />
                                            <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormTipo;
