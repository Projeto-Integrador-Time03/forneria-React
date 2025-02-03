import { useContext, useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Tipo from "../../../models/Tipo";
import CardTipos from "../cardtipos/CardTipos";
import { buscar } from "../../../services/Service";

function ListaTipos() {

    const navigate = useNavigate();

    const [tipos, setTipos] = useState<Tipo[]>([])

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

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
            alert('Você precisa estar logado!')
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        buscarTipos()    
    }, [tipos.length])
    
    return (
        <>
        {tipos.length === 0 && (
            <DNA
            visible={true}
            height="200"
            width="200"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper mx-auto"
        />
        )}
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                       {tipos.map((tipo) => (
                            <CardTipos key={tipo.id} tipo={tipo} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListaTipos;