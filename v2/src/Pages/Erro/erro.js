import './erro.css';

function Erro(){
    return(
        <div>
            <div>
                <header>
                    <h1 class="tituloErro">Erro 404</h1>
                </header>
            </div>
            
            <div>
                <p class="mensagemErro">Página não encontrada, clique em alguma opção acima para ser redirecionado para uma pagina existente</p> 
            </div>
        </div>
    );
}

export default Erro;