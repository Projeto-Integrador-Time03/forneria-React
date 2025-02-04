import { ChangeEvent, useContext, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import Tipo from "../../../models/Tipo";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { motion } from "framer-motion";

function FormTipo() {
    const navigate = useNavigate();
    const [tipo, setTipo] = useState<Tipo>({} as Tipo);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;
    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/tipos/${id}`, setTipo, {
                headers: { Authorization: token }
            });
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout();
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            ToastAlerta("Você precisa estar logado!", "info");
            navigate('/');
        }
    }, [token]);

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setTipo({
            ...tipo,
            [e.target.name]: e.target.value
        });
    }

    function retornar() {
        navigate("/tipos");
    }

    async function gerarNovoTipo(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        try {
            if (id !== undefined) {
                await atualizar(`/tipos`, tipo, setTipo, {
                    headers: { 'Authorization': token }
                });
                ToastAlerta("O tipo de pizza foi atualizado com sucesso!", "sucesso");
            } else {
                await cadastrar(`/tipos`, tipo, setTipo, {
                    headers: { 'Authorization': token }
                });
                ToastAlerta("O tipo de pizza foi cadastrado com sucesso!", "sucesso");
            }
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout();
            } else {
                ToastAlerta("Erro ao processar o tipo de pizza.", "erro");
            }
        }

        setIsLoading(false);
        retornar();
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto p-20">
            <h1 className="text-4xl text-center my-8 font-bold text-gray-800">
                {id === undefined ? 'Cadastrar Tipo' : 'Editar Tipo'}
            </h1>

            <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-1/2 bg-white p-8 rounded-2xl shadow-xl border border-gray-200"
            >
                <form className="flex flex-col gap-4" onSubmit={gerarNovoTipo}>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="nome" className="text-gray-700 font-medium">Nome do Tipo de Pizza</label>
                        <input
                            type="text"
                            placeholder="Descreva aqui o Tipo de Pizza"
                            name='nome'
                            className="border-2 border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-yellow-800"
                            value={tipo.nome}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>
                    <button
                        className="rounded-lg text-white bg-yellow-800 hover:bg-yellow-900 w-1/2 py-2 mx-auto flex justify-center font-medium transition-colors"
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
            </motion.div>
        </div>
    );
}

export default FormTipo;
