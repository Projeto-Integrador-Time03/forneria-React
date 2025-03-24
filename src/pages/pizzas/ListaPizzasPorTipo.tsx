import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { buscar } from "../../services/Service";
import { TailSpin } from "react-loader-spinner";
import CardPizzas from "../../components/pizzas/cardpizzas/CardPizzas";
import Tipo from "../../models/Tipo";
import Pizza from "../../models/Pizza";
import { ToastAlerta } from "../../utils/ToastAlerta";

function ListaPizzasPorTipo() {
  const [pizzas, setPizzas] = useState<Pizza[]>([]);
  const [tipo, setTipo] = useState<Tipo>({} as Tipo);
  const [isLoading, setIsLoading] = useState(true);
  
  const { id } = useParams<{ id: string }>();
  
  async function buscarPizzasPorTipo() {
    try {
      await buscar(`/pizzas/tipo/${id}`, setPizzas, {});
      await buscar(`/tipos/${id}`, setTipo, {});
    } catch (error: any) {
      ToastAlerta('Erro ao buscar pizzas', 'erro');
    } finally {
      setIsLoading(false);
    }
  }
  
  useEffect(() => {
    buscarPizzasPorTipo();
  }, [id]);
  
  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] 
        bg-cover bg-center bg-fixed py-8">
      <div className="bg-black/50 min-h-screen fixed inset-0"></div>
      
      {isLoading ? (
        <TailSpin
          visible={true}
          height={80}
          width={80}
          color="#ffffff"
          ariaLabel="tail-spin-loading"
          wrapperClass="mx-auto relative z-10"
        />
      ) : (
        <div className="container mx-auto my-4 relative z-10 px-4">
          <h1 className="text-4xl text-center my-8 text-white">Pizzas do tipo: {tipo.nome}</h1>
          
          {pizzas.length === 0 ? (
            <div className="text-center text-white">
              <h2 className="text-2xl">Não há pizzas deste tipo cadastradas!</h2>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pizzas.map((pizza) => (
                <CardPizzas key={pizza.id} pizza={pizza} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ListaPizzasPorTipo;