import { Link } from 'react-router-dom';
import Tipo from '../../../models/Tipo';

interface CardTiposProps {
    tipo: Tipo;
}

function CardTipos({ tipo }: CardTiposProps) {
    return (
        <div className="min-h-24 bg-transparent flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-sm">
                <div className="bg-gray-900 text-white p-4">
                    <h2 className="text-xl font-semibold">Tipo da Pizza</h2>
                </div>
                
                <div className="p-4">
                <div className="bg-gray-50/80 rounded-lg py-2 px-4 mb-4">
                    <p className="text-lg text-gray-800 font-medium">{tipo.nome}</p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    <Link 
                        to={`/editartipo/${tipo.id}`}
                        className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-yellow-800 hover:bg-yellow-900 text-white font-medium transition-colors"
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
    </div>
    );
}

export default CardTipos;