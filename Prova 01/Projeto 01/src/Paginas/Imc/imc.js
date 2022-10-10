import { useState } from 'react';
import './imc.css';

export default function IMC(){
    const[input, setInput] = useState('');
    const[mensagem, setMensagem] = useState('');

    function verificacao(dados){
        dados.preventDefault();

        if(input < 18.5){
            setMensagem('Abaixo do peso');
        } else if(input > 18.5 && input < 24.9){
            setMensagem('Normal');
        } else if(input > 24.9 && input < 29.9){
            setMensagem('Sobre o peso');
        } else if(input > 29.9 && input < 34.9){
            setMensagem('Obesidade grau 1');
        } else if(input > 34.9 && input < 39.9){
            setMensagem('Obesidade grau 2');
        } else {
            setMensagem('Obesidade grau 3');
        }
    }

    return(
        <div className='conteiner'>
            <div className='cabecalho'>
                <h1 className='titulo'>Análise de IMC</h1>
            </div>
            
            <br/>

            <section>
                <div className='formulario'>
                    <form onSubmit={verificacao} align='center'>
                        <span><h3>Informe o seu IMC&nbsp;</h3></span>
                        <input className='input' type='number' min='1' max='600' step='.01' placeholder='Informe o imc' required value={input} onChange={(evento) => setInput(evento.target.value)}/><br/>
                        <button className='botao' type='submit'>Análise</button>
                    </form>
                </div>

            <br/><hr/>

                <div className='resultado' align='center'>    
                    <p>Resultado: <br/>{mensagem}</p>
                </div>
            </section>
        </div>
    );
}