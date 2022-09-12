import {Link} from 'react-router-dom'
function Home(){
    return(
        <div>
            <header>
                <nav align="center">
                    <span>
                        <Link to="/">Home</Link>&nbsp;|&nbsp; 
                        <Link to="/cadastro">Cadastro</Link>&nbsp;|&nbsp;
                        <Link to="/financiamento">Financiamento</Link>&nbsp;|&nbsp;
                        <Link to="/movimentacaoConta">Movimentação C/C</Link>&nbsp;|&nbsp;
                        <Link to='/sobre'>Sobre Nos</Link> 
                    </span>
                </nav>
            </header>

            <div align="center">
                <h1>Home page</h1>
            </div>

            <div>
                <hr/>
                <p align="center">
                    Clique em algum campo da barra de menu acima para ser redirecionado a outra página
                </p>
            </div>
        </div>
    );
}

export default Home;