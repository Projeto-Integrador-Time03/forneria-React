import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { buscar } from "../../services/Service";
import { RotatingLines } from "react-loader-spinner";
import CardPizzas from "../../components/pizzas/cardPizzas/CardPizzas";
import Tipo from "../../models/Tipo";
import Pizza from "../../models/Pizza";
import { toastAlerta } from "../../utils/ToastAlerta";

function ListaPizzasPorTipo() {
  const [pizzas, setPizzas] = useState<Pizza[]>([]);
  const [tipo, setTipo] = useState<Tipo>({} as Tipo);
  const [isLoading, setIsLoading] = useState(true);
  
  const { id } = useParams<{ id: string }>();
  
  async function buscarPizzasPorTipo() {
    try {
      await buscar(`/pizzas/tipo/${id}`, setPizzas);
      await buscar(`/tipos/${id}`, setTipo);
    } catch (error: any) {
      toastAlerta('Erro ao buscar pizzas', 'erro');
    } finally {
      setIsLoading(false);
    }
  }
  
  useEffect(() => {
    buscarPizzasPorTipo();
  }, [id]);
  
  return (
    <div className="container mx-auto my-4 grid grid-cols-1 gap-4">
      {isLoading ? (
        <div className="flex justify-center">
          <RotatingLines
            strokeColor="yellow"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        </div>
      ) : (
        <>
          <h1 className="text-4xl text-center my-8">Pizzas do tipo: {tipo.nome}</h1>
          
          {pizzas.length === 0 ? (
            <div className="text-center">
              <h2 className="text-2xl">Não há pizzas deste tipo cadastradas!</h2>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pizzas.map((pizza) => (
                <CardPizzas key={pizza.id} pizza={pizza} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default ListaPizzasPorTipo;