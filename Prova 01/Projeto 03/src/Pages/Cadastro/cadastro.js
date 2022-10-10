import {useState} from 'react';

export default function Cadastro(){
    const [entradaNome, setEntradaNome] = useState('');
    const [entradaCPF, setEntradaCPF] = useState('');

    const [dadosUsuarios, setDadosUsuarios] = useState(
        { nomeDados:"Privado", razaoDados:"Super Express", CPFDados:"Privado"}
    );

    function novoRegistro(dados){
        dados.preventDefault(); 

        if(!entradaNome || !entradaCPF){
            alert('Informe seus dados');
            setDadosUsuarios(
                {nomeDados:"Privado", razaoDados:"Super Express", CPFDados:"Privado"}
            );
        } else {
            setDadosUsuarios(
                {nomeDados:entradaNome, CPFDados:entradaCPF}
            )

            setEntradaNome('');
            setEntradaCPF('');
        }
    }

    return(
        <div class='principalHome'>
            <div>
                <h1 class="titulo">Cadastro</h1>
                <hr/>
            </div>
            
            <div>
                <form class='formulario' onSubmit={novoRegistro}>
                    <label class='mensagem'>Nome</label>
                    <input class='inputs' type="text" placeholder="Informe seu nome..." value={entradaNome} onChange={(evento) => setEntradaNome(evento.target.value)}></input>

                    <br/><br/>
                    <label class='mensagem'>CPF</label>
                    <input class='inputs' type="text" placeholder="Informe seu CPF" value={entradaCPF} onChange={(evento) => setEntradaCPF(evento.target.value)}></input>

                    <br/><br/>
                    <div align="center">
                        <button class='botao' type="submit">Cadastrar</button>
                    </div>
                </form>
            </div>            

            <hr/>

            <div>
                <h3 align='center' class='subtitulo'>Dados Informados</h3>
                <p class='mensagem'>Nome:&nbsp;{dadosUsuarios.nomeDados} </p>
                <p class='mensagem'>Razão Social:&nbsp;{dadosUsuarios.razaoDados}</p>
                <p class='mensagem'>CPF:&nbsp;{dadosUsuarios.CPFDados}</p>
            </div>
        </div>
    );
}