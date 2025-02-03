import { Link } from 'react-router-dom'
import Tipo from '../../../models/Tipo'

interface CardTiposProps{
    tipo: Tipo
}

function CardTipos({ tipo }: CardTiposProps) {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-indigo-800 text-white font-bold text-2xl'>
            Tipo
            </header>
            <p className='p-8 text-3xl bg-slate-200 h-full'>{tipo.nome}</p>
            
            <div className="flex">
                <Link to={`/editartipo/${tipo.id}`}
	                      className='w-full text-slate-100 bg-	indigo-400 hover:bg-indigo-800 
                    flex items-center justify-center py-2'>
	                <button>Editar</button>
                </Link>

                <Link to={`/deletartipo/${tipo.id}`} 
	                     className='text-slate-100 bg-red-400 hover:bg-red-700 w-full 
		            flex items-center justify-center'>
	                <button>Deletar</button>
                </Link>
            </div>

        </div>
    )
}

export default CardTipos