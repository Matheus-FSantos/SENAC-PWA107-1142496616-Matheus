import prismaClient from "../../prisma/index";

interface PostComanda {
    numeroMesa: number;
    status: number;
    rascunho: string;
    idUser: number;
}

class CreateComandaService{
    async post({numeroMesa, status, rascunho, idUser}: PostComanda){
        if(!numeroMesa){
            throw new Error("É preciso informar um numero para a mesa");
        } else if (!status){
            throw new Error("É preciso atualizar o status da mesa");
        } else if (!idUser){
            throw new Error("É preciso informar um usuário para a mesa");
        }

        
        if(status > 1 || status < 0){
            throw new Error("Esse status de mesa é inválido");
        }
    }
}

export {CreateComandaService};