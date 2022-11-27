import prismaClient from "../../prisma";

interface PostCategory {
    nomeCategoria: string;
}

interface GetUnique {
    id: string;
}

interface PutCategory {
    id: string;
    nomeCategoria: string;
}

class CreateCategoryService {
    async post({ nomeCategoria }: PostCategory) {
        if (!nomeCategoria) {
            throw new Error('Informe um nome para a nova categoria');
        }

        let categoria = await prismaClient.categoria.findFirst({
            where: {
                nomeCategoria: nomeCategoria
            }
        });

        if (categoria) {
            throw new Error('Essa categoria já existe no banco de dados');
        } else {
            categoria = await prismaClient.categoria.create({
                data: {
                    nomeCategoria: nomeCategoria
                }
            });
        }

        return categoria;
    }

    async get(){
        const categorias = await prismaClient.categoria.findMany();
        
        return categorias;
    }

    async getUnique({id}: GetUnique){
        if(!id){
            throw new Error('É necessário informar um ID');
        }

        let categoria = await prismaClient.categoria.findFirst({
            where: {
                idCategoria: parseInt(id)
            }
        });

        if(!categoria){
            throw new Error('O ID informado não corresponde a nenhuma categoria');
        } else {
            return categoria;
        }
    }

    async put({id, nomeCategoria}: PutCategory){
        if(!nomeCategoria){
            throw new Error('O novo nome da categoria deve ser informado');
        }

        let categoria = await prismaClient.categoria.findFirst({
            where: {
                idCategoria: parseInt(id)
            }
        });

        if(!categoria){
            throw new Error('O ID informado não corresponde a nenhuma categoria');
        } else {
            categoria = await prismaClient.categoria.update({
                where: {
                    idCategoria: parseInt(id)
                }, data: {
                    nomeCategoria: nomeCategoria
                }
            });
        }

        return categoria;
    }

    async delete({id}: GetUnique){
        let categoria = await prismaClient.categoria.findFirst({
            where: {
                idCategoria: parseInt(id)
            }
        });

        if(categoria){
            await prismaClient.categoria.delete({
                where: {
                    idCategoria: parseInt(id)
                }
            });

            return {"Categoria": "Deletada com sucesso!"};
        } else {
            throw new Error('O ID Informado não corresponde a nenhuma categoria');
        }
    }
}

export {CreateCategoryService};