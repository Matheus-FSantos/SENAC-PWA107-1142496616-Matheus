import {Request, Response} from 'express';
import {CreateCategoryService} from '../../services/categoria/CreateCategoryService';

class CreateCategoryController{
    async post(requisicao: Request, resposta: Response){
        const {nomeCategoria} = requisicao.body;
        const createCategoryService = new CreateCategoryService();
        const categoria = await createCategoryService.post({nomeCategoria});

        return resposta.json(categoria);
    }

    async get(requisicao: Request, resposta: Response){
        const createCategoryService = new CreateCategoryService();
        const categorias = await createCategoryService.get();

        return resposta.json(categorias);
    }

    async getUnique(requisicao: Request, resposta: Response){
        const {id} = requisicao.params;
        const createCategoryService = new CreateCategoryService();
        const categoria = await createCategoryService.getUnique({id});

        return resposta.json(categoria); 
    }

    async put(requisicao: Request, resposta: Response){
        const {id} = requisicao.params;
        const {nomeCategoria} = requisicao.body;
        const createCategoryService = new CreateCategoryService();
        const categoria = await createCategoryService.put({id, nomeCategoria});

        return resposta.json(categoria);
    }

    async delete(requisicao: Request, resposta: Response){
        const {id} = requisicao.params;
        const createCategoryService = new CreateCategoryService();
        const categoria = await createCategoryService.delete({id});

        return resposta.json(categoria);
    }
}

export {CreateCategoryController};