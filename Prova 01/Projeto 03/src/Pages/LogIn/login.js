/* eslint-disable react/jsx-no-undef */
import { useState } from 'react';
import './login.css';

export default function LogIn(){
    var usuarios = ['MATHEUS', 'LUCAS', 'ADMIN', 'ADMIN123', 'MATHEUSFERREIRA', 'LUCASRYU'];
    const[usuario, setUsuario] = useState('');
    const[senha, setSenha] = useState('');
    const[parametro, setParametro] = useState(false);

    function verificarUsuário(dados){
        dados.preventDefault();
        setParametro(false);

        usuarios.forEach((texto) => {
                if(texto === usuario.toUpperCase() && senha === '1234'){
                    setParametro(true);
                    setUsuario('');
                    setSenha('');
                }
            }
        );
    }

    return(
        <div class='principalLogin'>
            <div class='tituloLogin'>
                <h1 class='titulo'>Login</h1>
            </div>

            <div>
                <form class='inputsDiv' onSubmit={verificarUsuário}>
                    <label class='subtitulo'>Username:</label>
                    <input class='inputs' type='text' placeholder='Informe o username...' required value={usuario} onChange={(evento) => setUsuario(evento.target.value)}/>
                    <label class='subtitulo'>Senha:</label>
                    <input class='inputs' type='password' placeholder='Informe a senha...' required value={senha} onChange={(evento) => setSenha(evento.target.value)}/>

                    <div class='botaoDiv'>
                        <button class='botao' type='submit'>Login</button>
                    </div>
                </form>
            </div>

            <hr/>

            <div>
                {parametro === true ? (
                        <div class='mensagemDiv'>
                            <p class='mensagem'>Olá, Bem Vindo</p>
                        </div>
                    ):(
                        <div class='mensagemDiv'>
                            <p class='mensagem'>Realize seu login</p> 
                        </div>
                    )
                }
            </div>
        </div>
    );
}