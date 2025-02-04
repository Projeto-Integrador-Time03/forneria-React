import { useNavigate } from "react-router-dom";
import CardPizzas from "../cardpizzas/CardPizzas";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import Pizza from "../../../models/Pizza";
import { buscar } from "../../../services/Service";
import { TailSpin } from "react-loader-spinner";
import { ToastAlerta } from "../../../utils/ToastAlerta";

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
            ToastAlerta("Você precisa estar logado", "info")
            navigate('/');
        }
    }, [token])

    useEffect(() => {
        buscarPizzas()
    }, [pizzas.length])

    return (
        <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] 
            bg-cover bg-center bg-fixed py-8">
            <div className="bg-black/50 min-h-screen fixed inset-0"></div>
            
            {pizzas.length === 0 && (
                <TailSpin
                    visible={true}
                    height={80}
                    width={80}
                    color="#ffffff"
                    ariaLabel="tail-spin-loading"
                    wrapperClass="mx-auto relative z-10"
                />
            )}
            
            <div className='container mx-auto my-4 
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4
                relative z-10 px-4'>
                {pizzas.map((pizza) => (
                    <CardPizzas key={pizza.id} pizza={pizza} />
                ))}
            </div>
        </div>
    );
    }
    
    export default ListaPizzas;