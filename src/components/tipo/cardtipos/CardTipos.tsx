import { Link } from 'react-router-dom';
import Tipo from '../../../models/Tipo';
import { Pizza, Edit, Trash2, ChevronRight } from 'lucide-react';

interface CardTiposProps {
    tipo: Tipo;
}

function CardTipos({ tipo }: CardTiposProps) {
    // Função para obter descrição baseada no tipo
    const getDescricao = (nome: string): string => {
        const descricoes: Record<string, string> = {
            "Tradicional": "Pizzas clássicas com ingredientes tradicionais italianos.",
            "Especial": "Combinações exclusivas criadas pelo nosso chef.",
            "Doce": "Deliciosas opções de sobremesa para adoçar seu paladar.",
            "Vegetariana": "Opções saborosas sem ingredientes de origem animal."
        };
        return descricoes[nome] || `Pizzas do tipo ${nome} com sabores incríveis.`;
    };

    // Função para obter cor baseada no tipo (usando yellow-800 como no CardPizza)
    const getTipoColor = (nome: string): string => {
        const cores: Record<string, string> = {
            "Tradicional": "bg-yellow-800",
            "Especial": "bg-yellow-900",
            "Doce": "bg-yellow-700",
            "Vegetariana": "bg-yellow-800"
        };
        return cores[nome] || "bg-yellow-800";
    };

    // Função para obter cor de texto baseada no tipo
    const getTipoTextColor = (nome: string): string => {
        return "text-yellow-800";
    };

    return (
        <div className="p-4">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                {/* Cabeçalho com imagem de fundo */}
                <div 
                    className="h-32 bg-cover bg-center relative"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80')"
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4 w-full">
                        <div className="flex items-center">
                            <div className={`${getTipoColor(tipo.nome)} p-2 rounded-full mr-3`}>
                                <Pizza className="h-6 w-6 text-white" />
                            </div>
                            <h2 className="text-2xl font-serif font-bold text-white tracking-wide">
                                {tipo.nome}
                            </h2>
                        </div>
                    </div>
                </div>
                
                {/* Conteúdo do card */}
                <div className="p-5 border-t-4 bg-white border-yellow-800">
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold text-gray-700 mb-1">Descrição</h3>
                        <p className="text-gray-600">
                            {getDescricao(tipo.nome)}
                        </p>
                    </div>
                    
                    {/* Detalhes adicionais */}
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                            <span className={`inline-block px-3 py-1 bg-yellow-100 ${getTipoTextColor(tipo.nome)} rounded-full text-xs font-medium`}>
                                {tipo.nome}
                            </span>
                        </div>
                        <div className="text-sm text-gray-500">
                            Código: #{tipo.id}
                        </div>
                    </div>
                    
                    {/* Botões de ação */}
                    <div className="flex gap-2 pt-2 border-t border-gray-100">
                        <Link 
                            to={`/editartipo/${tipo.id}`}
                            className="flex-1 bg-yellow-800 text-white py-2 px-4 rounded-lg font-medium hover:bg-yellow-900 transition-colors duration-200 flex items-center justify-center gap-2"
                        >
                            <Edit className="w-4 h-4" />
                            <span>Editar</span>
                        </Link>
                        <Link 
                            to={`/deletartipo/${tipo.id}`}
                            className="flex-1 bg-red-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-red-600 transition-colors duration-200 flex items-center justify-center gap-2"
                        >
                            <Trash2 className="w-4 h-4" />
                            <span>Deletar</span>
                        </Link>
                    </div>
                    
                    {/* Link para ver pizzas deste tipo */}
                    <Link 
                        to={`/cardapio?tipo=${tipo.id}`}
                        className="mt-3 flex items-center justify-center w-full py-2 px-4 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 gap-1"
                    >
                        <span className="text-sm font-medium">Ver pizzas deste tipo</span>
                        <ChevronRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CardTipos;
