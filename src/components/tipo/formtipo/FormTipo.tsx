import { ChangeEvent, useContext, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import Tipo from "../../../models/Tipo";
import { ToastAlerta } from "../../../utils/ToastAlerta";

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
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">
                {id === undefined ? 'Cadastrar Tipo' : 'Editar Tipo'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovoTipo}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="nome">Nome do Tipo de Pizza</label>
                    <input
                        type="text"
                        placeholder="Descreva aqui o Tipo de Pizza"
                        name='descricao'
                        className="border-2 border-slate-700 rounded p-2"
                        value={tipo.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <button
                    className="rounded text-slate-100 bg-indigo-400 
                               hover:bg-indigo-800 w-1/2 py-2 mx-auto flex justify-center"
                    type="submit">
                    {isLoading ?
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                        <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>

                    }
                </button>
            </form>
        </div>
    );
}

export default FormTipo;