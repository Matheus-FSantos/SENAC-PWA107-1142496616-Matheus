import './erro.css';

function Erro(){
    return(
        <div class='principalHome'>
            <br/>
            <h1 align='center' class='titulo'>Erro 404</h1>
            <br/>
            <hr />

            <div class='conteinerImagemRobo'>
                <img class='imagemRobo' width='200px' src="https://thumbs.dreamstime.com/b/reparo-quebrado-do-rob-81326219.jpg" />
            </div>

            <br/>
            <p class='mensagem'>Essa pagina nao existe, volte para alguma dessas paginas acima</p>
        </div>
    );
}

export default Erro;