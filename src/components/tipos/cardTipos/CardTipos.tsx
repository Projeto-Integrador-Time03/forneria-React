import { Link } from "react-router-dom";
import Tipo from "../../../models/Tipo";

interface CardTiposProps {
  tipo: Tipo;
}

function CardTipos({ tipo }: CardTiposProps) {
  return (
    <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
      <header className="py-2 px-6 bg-yellow-800 text-white font-bold text-2xl">
        {tipo.nome}
      </header>
      <p className="p-8 text-3xl bg-slate-200 h-full">{tipo.descricao}</p>
      <div className="flex">
        <Link to={`/pizzas/tipo/${tipo.id}`} className="w-full text-slate-100 bg-yellow-800 hover:bg-yellow-700 flex items-center justify-center py-2">
          <button>Ver pizzas deste tipo</button>
        </Link>
      </div>
    </div>
  );
}

export default CardTipos;