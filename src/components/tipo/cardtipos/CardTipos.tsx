import { Link } from 'react-router-dom';
import Tipo from '../../../models/Tipo';
import { Star, ChefHat, Utensils } from 'lucide-react';

interface CardTiposProps {
    tipo: Tipo;
}

function CardTipos({ tipo }: CardTiposProps) {
    return (
        <div className="min-h-32 flex items-center justify-center p-20">
            <div className="max-w-sm w-full bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                    <img 
                        src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80"
                        alt="Pizzas"
                        className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-semibold text-gray-700 shadow-md">
                        Tipo
                    </div>
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
                            <p className="text-sm">Descrição: {tipo.descricao}</p>
                        </div>
                    </div>

                    <div className="mt-6 flex gap-2">
                        <Link 
                            to={`/editartipo/${tipo.id}`}
                            className="flex-1 bg-yellow-800 text-white py-2 px-4 rounded-lg font-medium hover:bg-yellow-900 transition-colors duration-200"
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