import {Link} from 'react-router-dom'
import {useState} from 'react'

function Cadastro(){
    const [entradaNome, setEntradaNome] = useState('');
    const [entradaEmail, setEntradaEmail] = useState('');
    const [entradaCPF, setEntradaCPF] = useState('');

    const [dadosUsuarios, setDadosUsuarios] = useState(
        { nomeDados:"Privado", emailDados:"Privado", CPFDados:"Privado"}
    );

    function novoRegistro(dados){
        dados.preventDefault(); 

        setDadosUsuarios(
            { nomeDados:entradaNome, emailDados:entradaEmail, CPFDados:entradaCPF}
        )

        setEntradaNome('');
        setEntradaEmail('');
        setEntradaCPF('');
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
                <h1>Cadastro</h1>
                <hr/>
            </div>
            
            <div>
                <form onSubmit={novoRegistro}>
                    <label>Nome:&nbsp;</label>
                    <input type="text" placeholder="Informe seu nome..." value={entradaNome} onChange={(evento) => setEntradaNome(evento.target.value)}></input>

                    <br/><br/>
                    <label>Email:&nbsp;</label>
                    <input type="email" placeholder="Informe seu email..." value={entradaEmail} onChange={(evento) => setEntradaEmail(evento.target.value)}></input>

                    <br/><br/>
                    <label>CPF:&nbsp;</label>
                    <input type="text" placeholder="Informe seu CPF" value={entradaCPF} onChange={(evento) => setEntradaCPF(evento.target.value)}></input>

                    <br/><br/>
                    <div align="center">
                        <button type="submit">Cadastrar</button>
                    </div>
                </form>
            </div>            

            <hr/>

            <div>
                <h3 align="center">Dados Informados:</h3>
                <p>Nome:&nbsp;{dadosUsuarios.nomeDados} </p>
                <p>Email:&nbsp;{dadosUsuarios.emailDados}</p>
                <p>CPF:&nbsp;{dadosUsuarios.CPFDados}</p>
            </div>
        </div>
    );
}

export default Cadastro