import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home/index.js.js'
import Cadastro from './Pages/Cadastro/cadastro.js'
import Financiamento from './Pages/Financiamento/financiamento.js.js'
import Movimentacao from './Pages/MovimentacaoCC/movimentacao'
import Sobre from './Pages/Sobre/sobre'


function RouterApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/cadastro" element={<Cadastro/>}/>
                <Route path="/financiamento" element={<Financiamento/>}></Route>
                <Route path="/movimentacaoConta" element={<Movimentacao/>}></Route>
                <Route path="/sobre" element={<Sobre/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default RouterApp;
