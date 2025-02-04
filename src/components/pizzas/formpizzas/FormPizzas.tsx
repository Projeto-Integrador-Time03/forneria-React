import { useState, useContext, useEffect, ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Pizza from "../../../models/Pizza";
import Tipo from "../../../models/Tipo";
import { buscar, atualizar, cadastrar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";
import { ToastAlerta } from "../../../utils/ToastAlerta";

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

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
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
            bg-cover bg-center bg-fixed py-42">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="px-6 py-8 sm:p-10">
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
              {id !== undefined ? 'Editar Pizza' : 'Nova Pizza'}
            </h1>

            <form className="space-y-6" onSubmit={gerarNovaPizza}>
              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                {/* Sabor */}
                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="sabor" className="block text-sm font-medium text-gray-700">
                    Sabor da Pizza
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="sabor"
                      required
                      placeholder="Ex: Margherita"
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 
                               focus:outline-none focus:ring-2 focus:ring-yellow-800 focus:border-yellow-800 transition-all duration-200"
                      value={pizza.sabor}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                  </div>
                </div>

                {/* Valor */}
                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="valor" className="block text-sm font-medium text-gray-700">
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
                      className="pl-12 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 
                               focus:outline-none focus:ring-2 focus:ring-yellow-800 focus:border-yellow-800 transition-all duration-200"
                      value={pizza.valor}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                  </div>
                </div>

                {/* Descrição */}
                <div className="col-span-2">
                  <label htmlFor="descricao" className="block text-sm font-medium text-gray-700">
                    Descrição da Pizza
                  </label>
                  <div className="mt-1">
                    <textarea
                      name="descricao"
                      rows={3}
                      required
                      placeholder="Descreva os ingredientes e características especiais"
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 
                               focus:outline-none focus:ring-2 focus:ring-yellow-800 focus:border-yellow-800 transition-all duration-200"
                      value={pizza.descricao}
                      onChange={(e: ChangeEvent<HTMLTextAreaElement>) => atualizarEstado(e)}
                    />
                  </div>
                </div>

                {/* Tamanho */}
                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="tamanho" className="block text-sm font-medium text-gray-700">
                    Tamanho da Pizza
                  </label>
                  <div className="mt-1">
                    <select
                      name="tamanho"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm 
                               focus:outline-none focus:ring-2 focus:ring-yellow-800 focus:border-yellow-800 transition-all duration-200"
                      value={pizza.tamanho}
                      onChange={(e: ChangeEvent<HTMLSelectElement>) => atualizarEstado(e)}
                    >
                      <option value="" disabled>Selecione um tamanho</option>
                      <option value="P">Pequena</option>
                      <option value="M">Média</option>
                      <option value="G">Grande</option>
                      <option value="GG">Família</option>
                    </select>
                  </div>
                </div>

                {/* Tipo */}
                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="tipo" className="block text-sm font-medium text-gray-700">
                    Tipo da Pizza
                  </label>
                  <div className="mt-1">
                    <select
                      name="tipo"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm 
                               focus:outline-none focus:ring-2 focus:ring-yellow-800 focus:border-yellow-800 transition-all duration-200"
                      onChange={(e) => buscarTipoPorId(e.currentTarget.value)}
                    >
                      <option value="" disabled selected>Selecione um tipo</option>
                      {tipos.map((tipo) => (
                        <option key={tipo.id} value={tipo.id}>{tipo.nome}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  disabled={carregandoTipo}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white 
                           bg-gradient-to-r from-yellow-700 to-yellow-800 hover:from-yellow-800 hover:to-yellow-900 
                           focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-800 
                           disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
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
                    <span>{id !== undefined ? 'Atualizar Pizza' : 'Cadastrar Pizza'}</span>
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