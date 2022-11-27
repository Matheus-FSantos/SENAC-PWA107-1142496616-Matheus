import {Request, Response} from 'express';
import {CreateComandaService} from '../../services/comanda/CreateComandaService';

class CreateComandaController {
    async post(requisicao: Request, resposta: Response){
        const {numeroMesa, status, rascunho, idUser} = requisicao.body;
        const createComandaService = new CreateComandaService();
        const comanda = await createComandaService.post({numeroMesa, status, rascunho, idUser});
        
        return resposta.json(comanda);
    }

    async get(requisicao: Request, resposta: Response){
        const createComandaService = new CreateComandaService();
        const comandas = await createComandaService.get();

        return resposta.json(comandas);
    }

    async getUnique(requisicao: Request, resposta: Response){
        const {id} = requisicao.params;
        const createComandaService = new CreateComandaService();
        const comanda = await createComandaService.getUnique({id});

        return resposta.json(comanda);
    }

    async put(requisicao: Request, resposta: Response){
        const {id} = requisicao.params;
        const {numeroMesa, status, rascunho} = requisicao.body;
        const createComandaService = new CreateComandaService();
        const comanda = await createComandaService.put({numeroMesa, status, rascunho, id});

        return resposta.json(comanda);
    }

    async delete(requisicao: Request, resposta: Response){
        const {id} = requisicao.params;
        const createComandaService = new CreateComandaService();
        const status = await createComandaService.delete({id});
        
        return resposta.json(status);
    }
}

export {CreateComandaController};