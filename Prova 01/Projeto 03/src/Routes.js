import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LogIn from './Pages/LogIn/login.js';

import Home from './Pages/Home/home.js'
import Sobre from './Pages/SobreNos/sobre.js';
import Header from './Pages/Header/header.js';
import Frete from './Pages/Frete/frete.js';
import Rotas from './Pages/Rotas/rotas.js';
import Cadastro from './Pages/Cadastro/cadastro.js';
import Erro from './Pages/404/error.js';

export default function RouterApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<LogIn/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/sobre' element={<Sobre/>}/>
                <Route path='/frete' element={<Frete/>}/>
                <Route path='/rotas' element={<Rotas/>}/>
                <Route path='/cadastro' element={<Cadastro/>}/>
                <Route path='*' element={<Erro/>}/>
            </Routes>
        </BrowserRouter>
    );
}