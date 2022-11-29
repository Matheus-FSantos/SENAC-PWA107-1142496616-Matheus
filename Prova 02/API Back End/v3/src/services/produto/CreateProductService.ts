import prismaClient from '../../prisma/index';

interface PostProduct{
    nomeProduto: string;
    precoProduto: number;
    descricaoProduto: string;
    idCategoria: number;
}

interface GetUnique{
    id: string;
}

interface PutProduct{
    nomeProduto: string;
    precoProduto: number;
    descricaoProduto: string;
    idCategoria: number; 
    id: string;
}

class CreateProductService {
    async post({nomeProduto, precoProduto, descricaoProduto, idCategoria}: PostProduct){
        if(!nomeProduto){
            throw new Error("É preciso informar um nome para o produto");
        } else if (!precoProduto){
            throw new Error("É preciso informar um preço para o produto");
        } else if(!idCategoria){
            throw new Error("É preciso informar um ID da categoria para o produto");
        }

        let categoria = await prismaClient.categoria.findUnique({
            where: {
                idCategoria: idCategoria
            }
        });

        let produto;
        

        if(!categoria){
            throw new Error("O ID informado não corresponde a nenhuma categoria");
        } else {
            produto = await prismaClient.produto.create({
                data: {
                    nomeProduto: nomeProduto,
                    precoProduto: precoProduto,
                    descricaoProduto: descricaoProduto,
                    idCategoria: idCategoria
                }
            });
        }

        return produto;
    }

    async get(){
        const produtos = await prismaClient.produto.findMany();
        return produtos;
    }

    async getUnique({id}: GetUnique){
        const produto = await prismaClient.produto.findUnique({
            where: {
                idProduto: parseInt(id)
            }
        });

        if(produto){
            return produto;
        } else {
            throw new Error("O ID informado não corresponde a nenhum produto");
        }
    }

    async put({nomeProduto, precoProduto, descricaoProduto, idCategoria, id}: PutProduct){
        if(!nomeProduto){
            throw new Error("É preciso informar um novo nome para o produto");
        } else if (!precoProduto){
            throw new Error("É preciso informar um novo preço para o produto");
        } else if(!idCategoria){
            throw new Error("É preciso informar um novo ID da categoria para o produto");
        }

        let produto = await prismaClient.produto.findUnique({
            where: {
                idProduto: parseInt(id)
            }
        });

        const categoria = await prismaClient.categoria.findUnique({
            where: {
                idCategoria: idCategoria
            }
        });

        if(!categoria){
            throw new Error("O ID informado não corresponde a nenhuma categoria");
        } else if(!produto){
            throw new Error("O ID informado não corresponde a nenhum produto");
        } else {
            produto = await prismaClient.produto.update({
                where: {
                    idProduto: parseInt(id)
                },
                data: {
                    nomeProduto: nomeProduto,
                    precoProduto: precoProduto,
                    descricaoProduto: descricaoProduto,
                    idCategoria: idCategoria
                }
            });

            return produto;
        }
    }

    async delete({id}: GetUnique){
        let produto = await prismaClient.produto.findUnique({
            where: {
                idProduto: parseInt(id)
            }
        });

        if(!produto){
            throw new Error("O ID informado não corresponde a nenhum produto");
        } else {
            produto = await prismaClient.produto.delete({
                where: {
                    idProduto: parseInt(id)
                }
            });

            return {"Produto": "Deletado com sucesso!"};
        }
    }
}

export {CreateProductService};