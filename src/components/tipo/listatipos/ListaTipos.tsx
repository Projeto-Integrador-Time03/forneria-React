import { useNavigate } from "react-router-dom";
<<<<<<< HEAD:src/components/tipo/listatipos/ListaTipos.tsx
import { AuthContext } from "../../../contexts/AuthContext";
import Tipo from "../../../models/Tipo";
import CardTipos from "../cardtipos/CardTipos";
import { buscar } from "../../../services/Service";

function ListaTipos() {

    const navigate = useNavigate();

    const [tipos, setTipos] = useState<Tipo[]>([])
=======
import CardPizzas from "../cardpizzas/CardPizzas";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import Pizza from "../../../models/Pizza";
import { buscar } from "../../../services/Service";
import { DNA } from "react-loader-spinner";

function ListaPizzas() {

    const navigate = useNavigate();

    const [pizzas, setPizzas] = useState<Pizza[]>([]);
>>>>>>> pizzas:src/components/categoria/listacategorias/ListaCategorias.tsx

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

<<<<<<< HEAD:src/components/tipo/listatipos/ListaTipos.tsx
    async function buscarTipos() {
        try {
            await buscar('/tipos', setTipos, {
                headers: { Authorization: token }
=======
    async function buscarPizzas() {
        try {
            await buscar('/pizzas', setPizzas, {
                headers: {
                    Authorization: token,
                },
>>>>>>> pizzas:src/components/categoria/listacategorias/ListaCategorias.tsx
            })

        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado')
            navigate('/');
        }
    }, [token])

    useEffect(() => {
<<<<<<< HEAD:src/components/tipo/listatipos/ListaTipos.tsx
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
=======
        buscarPizzas()
    }, [pizzas.length])

    return (
        <>
            {pizzas.length === 0 && (
                <DNA
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper mx-auto"
                />
            )}
            <div className='container mx-auto my-4 
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
            >
                {pizzas.map((pizza) => (
                    <CardPizzas key={pizza.id} pizza={pizza} />
                ))}

>>>>>>> pizzas:src/components/categoria/listacategorias/ListaCategorias.tsx
            </div>
        </>
    );
}

<<<<<<< HEAD:src/components/tipo/listatipos/ListaTipos.tsx
export default ListaTipos;
=======
export default ListaPizzas;
>>>>>>> pizzas:src/components/categoria/listacategorias/ListaCategorias.tsx
