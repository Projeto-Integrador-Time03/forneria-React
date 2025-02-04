import { Link } from 'react-router-dom';
import Tipo from '../../../models/Tipo';
import { Star, ChefHat } from 'lucide-react';

interface CardTiposProps {
    tipo: Tipo;
}

function CardTipos({ tipo }: CardTiposProps) {
    return (
        <div className="min-h-24 bg-transparent flex items-center justify-center p-24">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-sm">
                <div className="bg-yellow-900 text-white p-4">
                    <h2 className="text-xl font-semibold">Tipo da Pizza</h2>
                </div>
                
                <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-xl font-bold text-gray-800">{tipo.nome}</p>
                        <div className="flex items-center text-yellow-400">
                            <Star className="w-5 h-5 fill-current" />
                            <span className="ml-1 text-sm font-medium">4.8</span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center text-gray-600">
                            <ChefHat className="w-5 h-5 mr-2" />
                            <p className="text-sm">Descrição: {tipo.nome}</p>
                        </div>
                    </div>

                    <div className="mt-6 flex gap-2">
                        <Link 
                            to={`/editartipo/${tipo.id}`}
                            className="flex-1 bg-yellow-900 text-white py-2 px-4 rounded-lg font-medium hover:bg-yellow-800 transition-colors duration-200"
                        >
                            Editar
                        </Link>
                        <Link 
                            to={`/deletartipo/${tipo.id}`}
                            className="flex-1 bg-red-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-red-600 transition-colors duration-200"
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