import { Link } from 'react-router-dom'
import Pizza from '../../../models/Pizza'

interface CardPizzasProps {
    pizza: Pizza
}

function CardPizza({ pizza }: CardPizzasProps) {
    return (
        <div className='border-slate-900 border 
            flex flex-col rounded overflow-hidden justify-between'>
                
            <div>
                <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">
                    <img
                        src={pizza.usuario?.foto}
                        className='h-12 rounded-full'
                        alt={pizza.usuario?.nome} />
                    <h3 className='text-lg font-bold text-center uppercase'>
                        {pizza.usuario?.nome}
                    </h3>
                </div>
                <div className='p-4 '>
                    <h4 className='text-lg font-semibold uppercase'>{pizza.sabor}</h4>
                    <p>{pizza.valor}</p>
                    <p>Tipo: {pizza.tipo?.nome}</p>
                    <p>{pizza.descricao}</p>
                    <p>{pizza.tamanho}</p>
                </div>
            </div>
            <div className="flex">
                    <Link to={`/editarpizza/${pizza.id}`}
	                className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 
                    flex items-center justify-center py-2'>
	                <button>Editar</button>
                </Link>
                <Link to={`/deletarpizza/${pizza.id}`} 
	            className='text-white bg-red-400 
	            hover:bg-red-700 w-full flex items-center justify-center'>
	            <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardPizza