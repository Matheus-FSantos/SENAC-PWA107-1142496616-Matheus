import {Link} from 'react-router-dom';
import './header.css';

function Header(){
    return(
        <div>
            <div class="cabecalho">
                <h1 class="cabecalhoTitulo">SistemX</h1>
                <div class="navegacaoCabecalho">
                    <Link class="linkCabecalho" to="/">Home</Link>
                    <Link class="linkCabecalho" to="/cadastro">Cadastro</Link>
                    <Link class="linkCabecalho" to="/financiamento">Financiamento</Link>
                    <Link class="linkCabecalho" to="/movimentacaoConta">Movimentação C/C</Link>
                    <Link class="linkCabecalho" to='/sobre'>Sobre Nos</Link> 
                </div>
            </div>
        </div>
    );
}

export default Header;