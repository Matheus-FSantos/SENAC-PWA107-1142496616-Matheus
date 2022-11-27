import {Request, Response} from 'express';
import {CreateComandaService} from '../../services/comanda/CreateComandaService';

class CreateComandaController {
    async post(requisicao: Request, resposta: Response){
        const {numeroMesa, status, rascunho, idUser} = requisicao.body;
        const createComandaService = new CreateComandaService();
        const comanda = await createComandaService.post({numeroMesa, status, rascunho, idUser});
        
        return resposta.json(comanda);
    }
}

export {CreateComandaController};