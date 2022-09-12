import {Link} from 'react-router-dom'
import {useState} from 'react'
function Financiamento(){
    const [entradaCC, setCC] = useState('');
    const [entradaNome, setNome] = useState('');
    const [entradaValor, setValor] = useState('');
    const [entradaParcelas, setParcelas] = useState('');

    const [dadosUsuarios, setDadosUsuarios] = useState(
        {valorSolicitadoDados:'0,00', valorParcelaDados:'0,00', jurosDados:'0,00'}
    );


    function calcularValor(dados){
        dados.preventDefault();
        var totalParcelas = parseInt(entradaParcelas);
        var solicitacao = parseInt(entradaValor);
        var total = 0;
        var valorJuros = 0;

        if(solicitacao > 3000 || totalParcelas >= 11){
            valorJuros = 1.8;
            total = solicitacao * valorJuros;
            total = total /totalParcelas;
        } else {
            total = solicitacao /totalParcelas;
        }

        setDadosUsuarios(
            {valorSolicitadoDados:entradaValor, valorParcelaDados:total, jurosDados:valorJuros}
        );

        setCC('');
        setNome('');
        setValor('');
        setParcelas('');
    }

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
                <h1>Financiamento</h1> 
            </div>

            <hr/>
            
            <div>
                <form onSubmit={calcularValor}>
                    <label>C/C:&nbsp;</label>
                    <input type="text" placeholder="Digite sua Conta Corrente..." value={entradaCC} onChange={(evento) => setCC(evento.target.value)}></input>

                    <br/><br/>
                    <label>Nome:&nbsp;</label>
                    <input type="text" placeholder="Informe seu nome..." value={entradaNome} onChange={(evento) => setNome(evento.target.value)}></input>

                    <br/><br/>
                    <label>Valor Solicitado:&nbsp;</label>
                    <input  type="text" placeholder="Informe o valor solicitado..." value={entradaValor} onChange={(evento) => setValor(evento.target.value)}></input>

                    <br/><br/>
                    <label>Parcelas:&nbsp;</label>
                    <input type="text" placeholder="Parcelas desejadas..." value={entradaParcelas} onChange={(evento) => setParcelas(evento.target.value)}></input>
                    <div align="center">
                        <br/><br/>
                        <button type="submit">Calcular</button>
                    </div>
                </form>
            </div>

            <hr/>

            <div>
                <h3 align="center">Valores:</h3>
                <p>Valor solicitado:&nbsp;R$ {dadosUsuarios.valorSolicitadoDados}</p>
                <p>Valor da Parcela ≅&nbsp;R$ {dadosUsuarios.valorParcelaDados} /mês</p>
                <p>Juros:&nbsp;R$ {dadosUsuarios.jurosDados}x</p>
            </div>
        </div>
    );
}

export default Financiamento;