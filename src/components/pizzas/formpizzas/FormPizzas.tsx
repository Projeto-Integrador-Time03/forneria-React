import { useState, useContext, useEffect, ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Pizza from "../../../models/Pizza";
import Tipo from "../../../models/Tipo";
import { buscar, atualizar, cadastrar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { Pizza as PizzaIcon, Save, ArrowLeft, DollarSign, Utensils, FileText, ChefHat } from "lucide-react";

function FormPizza() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [tipos, setTipos] = useState<Tipo[]>([])

    const [tipo, setTipo] = useState<Tipo>({ id: 0, nome: '', })
    const [pizza, setPizza] = useState<Pizza>({} as Pizza)

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPizzaPorId(id: string) {
        try {
            await buscar(`/pizzas/${id}`, setPizza, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }
        }
    }

    async function buscarTipoPorId(id: string) {
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

    async function buscarTipos() {
        try {
            await buscar('/tipos', setTipos, {
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
            ToastAlerta("Você precisa estar logado", "info");
            navigate('/');
        }
    }, [token])

    useEffect(() => {
        buscarTipos()

        if (id !== undefined) {
            buscarPizzaPorId(id)
        }
    }, [id])

    useEffect(() => {
        setPizza({
            ...pizza,
            tipo: tipo,
        })
    }, [tipo])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
        setPizza({
            ...pizza,
            [e.target.name]: e.target.value,
            tipo: tipo,
            usuario: usuario,
        });
    }

    function retornar() {
        navigate('/cardapio');
    }

    async function gerarNovaPizza(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/pizzas`, pizza, setPizza, {
                    headers: {
                        Authorization: token,
                    },
                });

                ToastAlerta("Pizza atualizada com sucesso", "sucesso")

            } catch (error: any) {
                if (error.toString().includes('403')) {
                    handleLogout()
                } else {
                    ToastAlerta("Erro ao atualizar a Pizza", "erro")
                }
            }

        } else {
            try {
                await cadastrar(`/pizzas`, pizza, setPizza, {
                    headers: {
                        Authorization: token,
                    },
                })

                ToastAlerta("Pizza cadastrada com sucesso", "sucesso");

            } catch (error: any) {
                if (error.toString().includes('403')) {
                    handleLogout()
                } else {
                    ToastAlerta("Erro ao cadastrar Pizza", "erro");
                }
            }
        }

        setIsLoading(false)
        retornar()
    }

    const carregandoTipo = tipo.nome === '';

    return (
        <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] 
            bg-cover bg-center bg-fixed py-20">
            <div className="max-w-3xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
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
                                        <PizzaIcon className="h-6 w-6 text-white" />
                                    </div>
                                    <h1 className="text-2xl font-serif font-bold text-white tracking-wide">
                                        {id !== undefined ? 'Editar Pizza' : 'Nova Pizza'}
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
                        <form className="space-y-6" onSubmit={gerarNovaPizza}>
                            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                                {/* Sabor */}
                                <div className="col-span-2 sm:col-span-1">
                                    <label htmlFor="sabor" className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                                        <ChefHat className="h-4 w-4 text-yellow-600" />
                                        Sabor da Pizza
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="sabor"
                                            required
                                            placeholder="Ex: Margherita"
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 
                                                focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600 transition-all duration-200"
                                            value={pizza.sabor || ''}
                                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                                        />
                                    </div>
                                </div>

                                {/* Valor */}
                                <div className="col-span-2 sm:col-span-1">
                                    <label htmlFor="valor" className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                                        <DollarSign className="h-4 w-4 text-yellow-600" />
                                        Valor da Pizza
                                    </label>
                                    <div className="mt-1 relative rounded-lg shadow-sm">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <span className="text-gray-500 sm:text-sm">R$</span>
                                        </div>
                                        <input
                                            type="number"
                                            name="valor"
                                            required
                                            placeholder="0.00"
                                            step="0.01"
                                            min="0"
                                            className="pl-12 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 
                                                focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600 transition-all duration-200"
                                            value={pizza.valor || ''}
                                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                                        />
                                    </div>
                                </div>

                                {/* Descrição */}
                                <div className="col-span-2">
                                    <label htmlFor="descricao" className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                                        <FileText className="h-4 w-4 text-yellow-600" />
                                        Descrição da Pizza
                                    </label>
                                    <div className="mt-1">
                                        <textarea
                                            name="descricao"
                                            rows={3}
                                            required
                                            placeholder="Descreva os ingredientes e características especiais"
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 
                                                focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600 transition-all duration-200"
                                            value={pizza.descricao || ''}
                                            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => atualizarEstado(e)}
                                        />
                                    </div>
                                </div>

                                {/* Tamanho */}
                                <div className="col-span-2 sm:col-span-1">
                                    <label htmlFor="tamanho" className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                                        <Utensils className="h-4 w-4 text-yellow-600" />
                                        Tamanho da Pizza
                                    </label>
                                    <div className="mt-1">
                                        <select
                                            name="tamanho"
                                            required
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm 
                                                focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600 transition-all duration-200"
                                            value={pizza.tamanho || ''}
                                            onChange={(e: ChangeEvent<HTMLSelectElement>) => atualizarEstado(e)}
                                        >
                                            <option value="" disabled>Selecione um tamanho</option>
                                            <option value="P">Pequena (4 fatias)</option>
                                            <option value="M">Média (6 fatias)</option>
                                            <option value="G">Grande (8 fatias)</option>
                                            <option value="GG">Família (12 fatias)</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Tipo */}
                                <div className="col-span-2 sm:col-span-1">
                                    <label htmlFor="tipo" className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                                        <PizzaIcon className="h-4 w-4 text-yellow-600" />
                                        Tipo da Pizza
                                    </label>
                                    <div className="mt-1">
                                        <select
                                            name="tipo"
                                            required
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm 
                                                focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600 transition-all duration-200"
                                            onChange={(e) => buscarTipoPorId(e.currentTarget.value)}
                                            value={tipo.id || ''}
                                        >
                                            <option value="" disabled>Selecione um tipo</option>
                                            {tipos.map((tipo) => (
                                                <option key={tipo.id} value={tipo.id}>{tipo.nome}</option>
                                            ))}
                                        </select>
                                    </div>
                                    {tipos.length === 0 && (
                                        <p className="mt-1 text-xs text-amber-600">
                                            Nenhum tipo de pizza cadastrado. <a href="/tipos" className="underline">Cadastre um tipo</a> primeiro.
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="pt-6 flex gap-3">
                                <button
                                    type="button"
                                    onClick={retornar}
                                    className="flex-1 py-3 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 
                                        bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-600 
                                        transition-all duration-200 flex items-center justify-center gap-2"
                                >
                                    <ArrowLeft className="w-4 h-4" />
                                    <span>Cancelar</span>
                                </button>
                                
                                <button
                                    type="submit"
                                    disabled={carregandoTipo || isLoading}
                                    className="flex-1 py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white 
                                        bg-gradient-to-r from-yellow-600 to-yellow-800 hover:from-yellow-700 hover:to-yellow-900 
                                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-600 
                                        disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200
                                        flex items-center justify-center gap-2"
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
                                            <Save className="w-4 h-4" />
                                            <span>{id !== undefined ? 'Atualizar Pizza' : 'Cadastrar Pizza'}</span>
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

export default FormPizza;
