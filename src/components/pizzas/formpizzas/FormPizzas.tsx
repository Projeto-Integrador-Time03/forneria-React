import { useState, useContext, useEffect, ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Pizza from "../../../models/Pizza";
import Tipo from "../../../models/Tipo";
import { buscar, atualizar, cadastrar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";

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
            alert('Você precisa estar logado');
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
        navigate('/pizzas');
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

                alert('Pizza atualizada com sucesso')

            } catch (error: any) {
                if (error.toString().includes('403')) {
                    handleLogout()
                } else {
                    alert('Erro ao atualizar a Pizza')
                }
            }

        } else {
            try {
                await cadastrar(`/pizzas`, pizza, setPizza, {
                    headers: {
                        Authorization: token,
                    },
                })

                alert('Pizza cadastrada com sucesso');

            } catch (error: any) {
                if (error.toString().includes('403')) {
                    handleLogout()
                } else {
                    alert('Erro ao cadastrar Pizza');
                }
            }
        }

        setIsLoading(false)
        retornar()
    }

    const carregandoTipo = tipo.nome === '';

    return (
        <div className="container flex flex-col mx-auto items-center">
            <h1 className="text-4xl text-center my-8">
                {id !== undefined ? 'Editar Pizza' : 'Cadastrar Pizza'}
            </h1>

            <form className="flex flex-col w-1/2 gap-4" onSubmit={gerarNovaPizza}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="sabor">Sabor da Pizza</label>
                    <input
                        type="text"
                        placeholder="Sabor"
                        name="sabor"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                        value={pizza.sabor}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="valor">Valor da Pizza</label>
                    <input
                        type=""
                        placeholder="Valor"
                        name="valor"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                        value={pizza.valor}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="Descrição">Descrição da Pizza</label>
                    <input
                        type=""
                        placeholder="Descrição"
                        name="descrição"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                        value={pizza.descricao}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="tamanho">Tamanho da Pizza</label>
                    <input
                        type=""
                        placeholder="Tamanho"
                        name="tamanho"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                        value={pizza.tamanho}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <p>Tipo da Pizza</p>
                    <select name="tipo" id="tipo" className='border p-2 border-slate-800 rounded'
                        onChange={(e) => buscarTipoPorId(e.currentTarget.value)}
                    >
                        <option value="" selected disabled>Selecione um Tipo</option>

                        {tipos.map((tipo) => (
                            <>
                                <option value={tipo.id} >{tipo.nome}</option>
                            </>
                        ))}

                    </select>
                </div>
                <button
                    type='submit'
                    className='rounded disabled:bg-slate-200 bg-indigo-400 hover:bg-indigo-800
                               text-white font-bold w-1/2 mx-auto py-2 flex justify-center'
                    disabled={carregandoTipo}
                >
                    {isLoading ?
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                        <span>{id !== undefined ? 'Atualizar' : 'Cadastrar'}</span>
                    }
                </button>
            </form>
        </div>
    );
}

export default FormPizza;