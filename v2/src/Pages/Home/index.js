import './index.css';

function Home(){
    return(
        <div>
            <div class="cabecalhoHome">
                <h1 class="tituloCabecalhoHome">Home page</h1>
            </div>

            <div>
                <hr/>
                <p class="textoPrincipalHome">
                    Clique em algum campo da barra de menu acima para ser redirecionado a outra página
                </p>
            </div>

            <div class="conteinerElemento">
                <div class="elemento"></div>
            </div> 
        </div>
    );
}

export default Home;