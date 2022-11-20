import {Request, Response} from 'express';
import {CreateUserService} from '../../services/user/CreateUserService';

class CreateUserController {
    async post(requisicao: Request, resposta: Response){
        const {nomeUser, senha, perfil} = requisicao.body;
        const createUserService = new CreateUserService(); //Cria um obj da classe
        
        const user = await createUserService.post({nomeUser, senha, perfil});
        resposta.json(user);
    }

    async get(requisicao: Request, resposta: Response){
        const createUserService = new CreateUserService();
        const users = await createUserService.get();
        resposta.json(users);
    }

    async getUnique(requisicao: Request, resposta: Response){
        const {id} = requisicao.params;
        const createUserService = new CreateUserService();
        const users = await createUserService.getUnique({id});
        resposta.json(users);
    }

    async delete(requisicao: Request, resposta: Response){
        const {id} = requisicao.params;
        const createUserService = new CreateUserService();
        const respostaUser = await createUserService.delete({id});
        resposta.json(respostaUser);
    }
}

export {CreateUserController};