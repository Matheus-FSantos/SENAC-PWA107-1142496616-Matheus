const express = require('express');
const server = express();
server.use(express.json());

const usuarios = [];
const senhas = [];

server.get('/usuarios/logins', (requisicao, resposta) => {
    return resposta.json(usuarios);
});

server.get('/usuarios/senhas', (requisicao, resposta) => {
    return resposta.json(senhas);
});

server.get('/usuarios/listar', (requisicao, resposta) => {
    const index = requisicao.query.id;

    return resposta.json({
        Nome: usuarios[index - 1],
        Senha: senhas[index - 1]
    });
});

server.get('/usuarios', (requisicao, resposta) => {
    const { verificaUsuario } = requisicao.body;
    const { verificaSenha } = requisicao.body;
    let usuario = false;
    let senha = false;

    usuarios.forEach((texto) => {
        if(texto == verificaUsuario){
            usuario = true;
        }
    });

    senhas.forEach((texto) => {
        if(texto == verificaSenha){
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

    usuarios.push(novoUsuario);
    senhas.push(novaSenha);

    return resposta.json(usuarios);
});

server.delete('/usuarios/:index', (requisicao, resposta) => {
    const { index } = requisicao.params;

    usuarios.splice((index - 1),1);
    senhas.splice((index - 1),1);

    return resposta.json('Usuário ' + index + ' deletado com sucesso');
});

server.listen(3000);