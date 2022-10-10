import { Link } from 'react-router-dom';
import './header.css';

export default function Header(){
    return(
        <div class='principalHeader'>
            <div class='header'>
                <h1 class='tituloHeader'>Super Express</h1>
                <Link to='/' class='loginHeader'>Login</Link>
            </div>
            <div class='navbar'>
                <ul class='navbar-lista'>
                    <Link class='navbar-item' to='/home'>Home</Link>
                    <Link class='navbar-item' to='/frete'>Frete</Link>
                    <Link class='navbar-item' to='/rotas'>Rotas</Link>
                    <Link class='navbar-item' to='/cadastro'>Cadastro</Link>
                    <Link class='navbar-item' to='/sobre'>Sobre Nós</Link>
                </ul>
            </div>
        </div>
    );
}