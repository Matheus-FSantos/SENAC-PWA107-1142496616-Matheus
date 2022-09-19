import {useState} from 'react';
import {Link} from 'react-router-dom';
function Movimentacao(){
    const [entradaNome, setNome] = useState('');
    const [entradaCPF, setCPF] = useState('');
    const [entradaDeposito, setDeposito] = useState('');
    const [entradaSaque, setSaque] = useState('');
    const [entradaSaldo, setSaldo] = useState('');

    const [dadosUsuarios, setUsuarios] = useState(
        {saldoDados:'0,00', depositoDados:'0,00', saqueDados:'0,00'}
    );

    function atualizarValores(dados){
        dados.preventDefault();
        var depositoValor;
        var saqueValor;
        var saldoValor;
        var total; 

        if(entradaDeposito === ''){
            depositoValor = 0;
        } else {
            depositoValor = parseInt(entradaDeposito);
        }
        

        if(entradaSaque === ''){
            saqueValor = 0;
        } else {
            saqueValor = parseInt(entradaSaque);
        }
        

        if(entradaSaldo === ''){
            saldoValor = 0;
        } else {
            saldoValor = parseInt(entradaSaldo);
        }

        total = 0;


        total = saldoValor - saqueValor + depositoValor;
        
        setUsuarios(
            {saldoDados:total, depositoDados:depositoValor, saqueDados:saqueValor}
        );
        
        setNome('');
        setCPF('');
        setDeposito('');
        setSaque('');
        setSaldo('');

    }

    return (
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
                <h1>Movimentacao C/C</h1>
            </div>

            <hr/>

            <div>
                <form onSubmit={atualizarValores}>
                    <label>Nome:&nbsp;</label>
                    <input type="text" placeholder="Informe um nome..." value={entradaNome} onChange={(evento) => setNome(evento.target.value)}/>

                    <br/><br/>
                    <label>CPF:&nbsp;</label>
                    <input type="text" placeholder="Informe o seu CPF..." value={entradaCPF} onChange={(evento) => setCPF(evento.target.value)}/>

                    <br/><br/>
                    <label>Saldo:&nbsp;</label>
                    <input type="text" placeholder="Informe o seu saldo..." value={entradaSaldo} onChange={(evento) => setSaldo(evento.target.value)}/>

                    <br/><br/>
                    <label>Deposito:&nbsp;</label>
                    <input type="text" placeholder="Quantia a depositar..." value={entradaDeposito} onChange={(evento) => setDeposito(evento.target.value)}/>

                    <br/><br/>
                    <label>Sacar:&nbsp;</label>
                    <input type="text" placeholder="Quantia a sacar..." value={entradaSaque} onChange={(evento) => setSaque(evento.target.value)}/>

                    <br/><br/>
                    <div align="center">
                        <button type="submit">Atualizar</button>
                    </div>
                </form>
            </div>

            <hr/>

            <div>
                <h3 align="center">Total:</h3> 
                <p>Saldo:&nbsp;R$&nbsp;{dadosUsuarios.saldoDados}</p>
                <p>Valor Depositado:&nbsp;+R$&nbsp;{dadosUsuarios.depositoDados}</p>
                <p>Valor Saque:&nbsp;-R$&nbsp;{dadosUsuarios.saqueDados}</p>
            </div>
        </div>
    );
}

export default Movimentacao;