const express = require('express');
const server = express();
server.use(express.json());

const usuarios = [
    {
        nome: "Matheus",
        senha: "d94ed3838"
    },
    {
        nome: "Antonio",
        senha: "antonio"
    },
    {
        nome: "kilian",
        senha: "12345"
    },
    {
        nome: "Joao",
        senha: "joao"
    },
    {
        nome: "LUCAS",
        senha: "12321312"
    },
    {
        nome: "senha",
        senha: "SENHA123"
    },
]

server.get('/usuarios/logins', (requisicao, resposta) => {
    return resposta.json(
        usuarios.map(
            function(texto){
                return texto.nome;
            }
        )
    );
});

server.get('/usuarios/senhas', (requisicao, resposta) => {
    return resposta.json(
        usuarios.map(
            function(texto){
                return texto.senha;
            }
        )
    );
});

server.get('/usuarios/listar', (requisicao, resposta) => {
    const index = requisicao.query.id;
    let nome = usuarios[index - 1].nome;
    let senha = usuarios[index - 1].senha;


    return resposta.json({
        Nome: nome,
        Senha: senha
    });
});

server.get('/usuarios', (requisicao, resposta) => {
    const { verificaUsuario } = requisicao.body;
    const { verificaSenha } = requisicao.body;
    let usuario = false;
    let senha = false;

    usuarios.forEach((texto) => {
        if(texto.nome == verificaUsuario){
            usuario = true;
        }

        if (texto.senha == verificaSenha){
            senha = true;
        }
    });

    if(senha == true && usuario == true){
        return resposta.json('Usuario liberado');
    } else if(senha == false && usuario == false){
        return resposta.json('Não registrado');
    } else if (usuario == false){
        return resposta.json('Usuario incorreto');
    } else {
        return resposta.json('Senha incorreta');
    }
});

server.post('/usuarios', (requisicao, resposta) => {
    let { novoUsuario } = requisicao.body;
    let { novaSenha } = requisicao.body;

    usuarios.push({
        nome: novoUsuario,
        senha: novaSenha
    });

    return resposta.json(usuarios);
});

server.delete('/usuarios/:index', (requisicao, resposta) => {
    const { index } = requisicao.params;
    usuarios.splice((index - 1),1);

    return resposta.json('Usuário ' + index + ' deletado com sucesso');
});

server.listen(3000);