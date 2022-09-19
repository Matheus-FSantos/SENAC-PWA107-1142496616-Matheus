import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home/index.js';
import Cadastro from './Pages/Cadastro/cadastro.js';
import Financiamento from './Pages/Financiamento/financiamento.js';
import Movimentacao from './Pages/MovimentacaoCC/movimentacao';
import Sobre from './Pages/Sobre/sobre';
import Header from './Pages/Componentes/Header/header.js';
import Erro from './Pages/Erro/erro.js';


function RouterApp(){
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/cadastro" element={<Cadastro/>}/>
                <Route path="/financiamento" element={<Financiamento/>}></Route>
                <Route path="/movimentacaoConta" element={<Movimentacao/>}></Route>
                <Route path="/sobre" element={<Sobre/>}/>
                <Route path='*' element={<Erro/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default RouterApp;
