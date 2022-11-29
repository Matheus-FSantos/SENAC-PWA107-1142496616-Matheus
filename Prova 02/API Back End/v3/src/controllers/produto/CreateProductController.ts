import {Request, Response} from 'express';
import {CreateProductService} from '../../services/produto/CreateProductService';

class CreateProductController{
    async post(requisicao: Request, resposta: Response){
        const {nomeProduto, precoProduto, descricaoProduto, idCategoria} = requisicao.body;
        const createProductService = new CreateProductService();
        const produto = await createProductService.post({nomeProduto, precoProduto, descricaoProduto, idCategoria});

        return resposta.json(produto);
    }

    async get(requisicao: Request, resposta: Response){
        const createProductService = new CreateProductService();
        const produtos = await createProductService.get();

        return resposta.json(produtos);
    }

    async getUnique(requisicao: Request, resposta: Response){
        const {id} = requisicao.params;
        const createProductService = new CreateProductService();
        const produto = await createProductService.getUnique({id});

        return resposta.json(produto);
    }

    async put(requisicao: Request, resposta: Response){
        const {id} = requisicao.params;
        const {nomeProduto, precoProduto, descricaoProduto, idCategoria} = requisicao.body;
        const createProductService = new CreateProductService();
        const produto = await createProductService.put({nomeProduto, precoProduto, descricaoProduto, idCategoria, id});

        return resposta.json(produto);
    }

    async delete(requisicao: Request, resposta: Response){
        const {id} = requisicao.params;
        const createProductService = new CreateProductService();
        const status = await createProductService.delete({id});

        return resposta.json(status);
    }
}

export {CreateProductController};