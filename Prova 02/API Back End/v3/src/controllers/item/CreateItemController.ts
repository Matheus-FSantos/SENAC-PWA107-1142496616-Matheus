import {Request, Response} from 'express';
import {CreateItemService} from '../../services/item/CreateItemService';


class CreateItemController{
    async post(requisicao: Request, resposta: Response){
        const {idComanda, idProduto, quantidade} = requisicao.body;
        const createItemService = new CreateItemService();
        const item = await createItemService.post({idComanda, idProduto, quantidade});

        return resposta.json(item);
    }

    async get(requisicao: Request, resposta: Response){
        const createItemService = new CreateItemService();
        const itens = await createItemService.get();

        return resposta.json(itens);
    }

    async getUnique(requisicao: Request, resposta: Response){
        const {id} = requisicao.params;
        const createItemService = new CreateItemService();
        const item = await createItemService.getUnique({id});

        return resposta.json(item);
    }

    async put(requisicao: Request, resposta: Response){
        const {id} = requisicao.params;
        const {idComanda, idProduto, quantidade} = requisicao.body;
        const createItemService = new CreateItemService();
        const item = await createItemService.put({id, idComanda, idProduto, quantidade});

        return resposta.json(item);
    }

    async delete(requisicao: Request, resposta: Response){
        const {id} = requisicao.params;
        const createItemService = new CreateItemService();
        const status = await createItemService.delete({id});

        return resposta.json(status);
    }
}

export {CreateItemController};