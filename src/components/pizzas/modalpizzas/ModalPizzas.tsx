import Popup from 'reactjs-popup';
import FormPizza from '../formpizzas/FormPizzas';

import 'reactjs-popup/dist/index.css';
import './ModalPizzas.css'

function ModalPizzas() {
    return (
        <>
            <Popup
                trigger={
                    <button 
                        className='border rounded px-4 py-2 hover:bg-white hover:text-indigo-800'>
                        Nova Pizza
                    </button>
                }
                modal
            >
                <FormPizza />
            </Popup>
        </>
    );
}

export default ModalPizzas;