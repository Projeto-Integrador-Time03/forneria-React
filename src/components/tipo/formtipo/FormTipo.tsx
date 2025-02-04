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
                ToastAlerta("O tipo de pizza foi atualizada com sucesso!", "sucesso")
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
        bg-cover bg-center bg-fixed py-56">
            <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="px-8 py-6 bg-yellow-800">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-bold text-white flex items-center gap-2">
                            <Pizza className="h-6 w-6" />
                            {id === undefined ? 'Cadastrar Tipo de Pizza' : 'Editar Tipo de Pizza'}
                        </h1>
                        <button
                            onClick={retornar}
                            className="text-white hover:text-indigo-100 transition-colors"
                            title="Voltar"
                        >
                            <ArrowLeft className="h-6 w-6" />
                        </button>
                    </div>
                </div>

                <form className="px-8 py-6 space-y-6" onSubmit={gerarNovoTipo}>
                    <div className="space-y-2">
                        <label 
                            htmlFor="nome" 
                            className="block text-sm font-medium text-gray-700"
                        >
                            Nome do Tipo de Pizza
                        </label>
                        <input
                            type="text"
                            placeholder="Descreva aqui o Tipo de Pizza"
                            name='descricao'
                            className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-yellow-800 focus:border-yellow-800 transition-colors"
                            value={tipo.nome}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>

                    <div className="flex justify-end pt-4">
                        <button
                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-yellow-800 hover:bg-yellow-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200 gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
    );
}

export default FormTipo;