import { BrowserRouter, Routes, Route } from 'react-router-dom';

import IMC from './Paginas/Imc/imc.js';

export default function RotasApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<IMC/>}/>
            </Routes>
        </BrowserRouter>
    );
}