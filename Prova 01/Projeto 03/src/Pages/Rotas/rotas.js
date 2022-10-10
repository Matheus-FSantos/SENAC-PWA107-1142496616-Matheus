import { useState } from 'react';

export default function Rotas(){
    const[tarefa, setTarefa] = useState();
    const[array, setArray] = useState([]); 

    function registrarTarefas(dados){
        dados.preventDefault();

        setArray([...array, tarefa.toUpperCase()]);
        setTarefa('');
    }

    function limparTarefas(){
        setArray([]);
    }

    return(
        <div class='principalHome'>
            <div>
                <div>
                    <h1 className='titulo'>Rotas</h1>
                </div>
                <div>
                    <form class='formulario'onSubmit={registrarTarefas}>
                        <input class='input'placeholder='Informe uma tafera...' required value={tarefa} onChange={(evento) => setTarefa(evento.target.value)}/><br/>
                        <button type='submit' class='botaoCalcular'>Adicionar</button>
                        <button type='button' class='botaoCalcular' onClick={limparTarefas}>Deletar</button>
                    </form>
                </div>

                <br/><hr/>

                <div class='formulario'>
                    <h2 class='subtitulo' align='center'>Logradouros</h2>
                    <ul>
                        {array.map(tarefas => (<li class='mensagem' key={tarefas}>{tarefas}</li>))}
                    </ul>
                </div>
            </div>
        </div>
    );
}