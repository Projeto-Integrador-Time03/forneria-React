import { Link } from 'react-router-dom';
import Tipo from '../../../models/Tipo';

interface CardTiposProps {
    tipo: Tipo;
}

function CardTipos({ tipo }: CardTiposProps) {
    return (
        <div className="min-h-screen bg-transparent flex items-center justify-center p-6">
            <div className="max-w-sm w-full bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <header className="py-4 px-6 bg-stone-800 text-white font-bold text-2xl text-center">
                    Tipo
                </header>
                
                <div className="p-6">
                    <p className="text-3xl bg-slate-200 p-6 rounded-lg text-center">
                        {tipo.nome}
                    </p>
                </div>

                <div className="flex gap-2 p-6">
                    <Link 
                        to={`/editartipo/${tipo.id}`}
                        className="flex-1 bg-indigo-400 text-white py-2 px-4 rounded-lg font-medium hover:bg-indigo-800 transition-colors duration-200 text-center"
                    >
                        Editar
                    </Link>
                    <Link 
                        to={`/deletartipo/${tipo.id}`}
                        className="flex-1 bg-red-400 text-white py-2 px-4 rounded-lg font-medium hover:bg-red-700 transition-colors duration-200 text-center"
                    >
                        Deletar
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CardTipos;