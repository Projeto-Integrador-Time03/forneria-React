import { useNavigate } from "react-router-dom";
import CardPizzas from "../cardpizzas/CardPizzas";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import Pizza from "../../../models/Pizza";
import { buscar } from "../../../services/Service";
import { TailSpin } from "react-loader-spinner";

function ListaPizzas() {

    const navigate = useNavigate();

    const [pizzas, setPizzas] = useState<Pizza[]>([]);

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarPizzas() {
        try {
            await buscar('/pizzas', setPizzas, {
                headers: {
                    Authorization: token,
                },
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
        buscarPizzas()
    }, [pizzas.length])

    return (
        <>
            {pizzas.length === 0 && (
                <TailSpin
                    visible={true}
                    height={80}
                    width={80}
                    color="#000000"
                    ariaLabel="tail-spin-loading"
                    wrapperClass="mx-auto"
            />
            )}
            <div className='container mx-auto my-4 
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
            >
                {pizzas.map((pizza) => (
                    <CardPizzas key={pizza.id} pizza={pizza} />
                ))}

            </div>
        </>
    );
}

export default ListaPizzas;