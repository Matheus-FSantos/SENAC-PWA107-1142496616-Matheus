import prismaClient from "../../prisma";

interface PostItem {
    idComanda: number; 
    idProduto: number; 
    quantidade: number;
}

interface GetUnique{
    id: string;
}

interface PutItem{
    id: string;
    idComanda: number;
    idProduto: number;
    quantidade: number;
}

class CreateItemService{
    async post({idComanda, idProduto, quantidade}: PostItem){
        if(!idComanda){
            throw new Error("É necessário informar o ID da comanda");
        } else if (!idProduto){
            throw new Error("É necessário informar o ID do produto");
        } else if (!quantidade){
            throw new Error("É necessário informar uma quantidade");
        }

        const comanda = await prismaClient.comanda.findUnique({
            where: {
                idComanda: idComanda
            }
        });

        const produto = await prismaClient.produto.findUnique({
            where: {
                idProduto: idProduto
            }
        });

        if(!comanda && !produto){
            throw new Error("A comanda e o produto não existem");
        } else if (!comanda){
            throw new Error("A comanda informada não existe");
        } else if (!produto){
            throw new Error("O produto informado não exite");
        }

        const item = await prismaClient.item.create({
            data: {
                idComanda: idComanda,
                idProduto: idProduto,
                quantidade: quantidade
            }
        });

        return item;
    }

    async get(){
        const itens = await prismaClient.item.findMany();
        return itens;
    }

    async getUnique({id}: GetUnique){
        const item = await prismaClient.item.findUnique({
            where: {
                idItem: parseInt(id)
            }
        });

        if(!item){
            throw new Error("O ID informado não corresponde a nenhum item");
        } else {
            return item;
        }
    }

    async put({id, idComanda, idProduto, quantidade}: PutItem){
        if(!idComanda){
            throw new Error("É necessário informar o ID da comanda");
        } else if (!idProduto){
            throw new Error("É necessário informar o ID do produto");
        } else if (!quantidade){
            throw new Error("É necessário informar uma quantidade");
        }

        let item = await prismaClient.item.findUnique({
            where: {
                idItem: parseInt(id)
            }
        });

        if(!item){
            throw new Error("O ID informado não corresponde a nenhum item");
        }

        const comanda = await prismaClient.comanda.findUnique({
            where: {
                idComanda: idComanda
            }
        });

        if(!comanda){
            throw new Error("O ID informado não corresponde a nenhuma comanda");
        }

        const produto = await prismaClient.produto.findUnique({
            where: {
                idProduto: idProduto
            }
        });

        if(!produto){
            throw new Error("O ID informado não corresponde a nenhum produto");
        }

        item = await prismaClient.item.update({
            where:{
                idItem: parseInt(id)
            },
            data: {
                idComanda: idComanda,
                idProduto: idProduto,
                quantidade: quantidade
            }
        });

        return item;
    }

    async delete({id}: GetUnique){
        const item = await prismaClient.item.findUnique({
            where: {
                idItem: parseInt(id)
            }
        });

        if(!item){
            throw new Error("O ID informado não corresponde a nenhum item");
        } else {
            await prismaClient.item.delete({
                where: {
                    idItem: parseInt(id)
                }
            });

            return {"Item": "Deletado com sucesso!"};
        }
    }
}

export {CreateItemService};