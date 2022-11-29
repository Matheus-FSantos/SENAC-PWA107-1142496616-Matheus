import prismaClient from "../../prisma/index";

interface PostComanda {
    numeroMesa: number;
    status: boolean;
    rascunho: string;
    idUser: number;
}

interface GetUnique{
    id: string;
}

interface UpdateComanda{
    id: string;
    numeroMesa: number;
    status: boolean;
    rascunho: string;
}

class CreateComandaService{
    async post({numeroMesa, status, rascunho, idUser}: PostComanda){
        if(!numeroMesa){
            throw new Error("É preciso informar um numero para a mesa");
        } else if (!idUser){
            throw new Error("É preciso informar um usuário para a mesa");
        }

        const usuario = await prismaClient.user.findUnique({
            where: {
                idUser: idUser
            }
        });

        const statusComanda = await prismaClient.comanda.findFirst({
            where: {
                numeroMesa: numeroMesa,
                status: true
            }
        });

        if(!usuario){
            throw new Error("O ID informado não corresponde a nenhum usuário");
        }

        if(statusComanda){
            throw new Error("A mesa informada já está sendo ocupada");
        }

        const comanda = await prismaClient.comanda.create({
            data: {
                numeroMesa: numeroMesa,
                status: status,
                rascunho: rascunho,
                idUser: idUser
            }
        });

        return comanda;
    }

    async get(){
        const comanda = await prismaClient.comanda.findMany();

        return comanda;
    }

    async getUnique({id}: GetUnique){
        const comanda = await prismaClient.comanda.findUnique({
            where: {
                idComanda: parseInt(id)
            }
        });

        if(comanda){
            return comanda;
        } else {
            throw new Error("O ID informado não corresponde a nenhuma comanda");
        }
    }

    async put({numeroMesa, status, rascunho, id}: UpdateComanda){
        if(!numeroMesa){
            throw new Error("O numero da mesa deve ser informado");
        }

        let comanda = await prismaClient.comanda.findUnique({
            where: {
                idComanda: parseInt(id)
            }
        });

        if(status == false){
            if(!comanda){
                throw new Error("O ID informado não corresponde a nenhuma comanda");
            }
    
            comanda = await prismaClient.comanda.update({
                where: {
                    idComanda: parseInt(id)
                },
                data: {
                    numeroMesa: numeroMesa,
                    status: status,
                    rascunho: rascunho
                }
            });
        } else {
            const statusComanda = await prismaClient.comanda.findFirst({
                where: {
                    numeroMesa: numeroMesa,
                    status: true
                }
            });

            
            if(!comanda){
                throw new Error("O ID informado não corresponde a nenhuma comanda");
            }

            if(statusComanda){
                throw new Error("A mesa informada já está sendo ocupada");
            }

            comanda = await prismaClient.comanda.update({
                where: {
                    idComanda: parseInt(id)
                },
                data: {
                    numeroMesa: numeroMesa,
                    status: status,
                    rascunho: rascunho
                }
            });
        }
        
        return comanda;
    }

    async delete({id}: GetUnique){
        let comanda = await prismaClient.comanda.findUnique({
            where: {
                idComanda: parseInt(id)
            }
        });

        if(!comanda){
            throw new Error("O ID informado não corresponde a nenhuma comanda");
        } else {
            comanda = await prismaClient.comanda.delete({
                where: {
                    idComanda: parseInt(id)
                }
            });
        }

        return "Comanda deletada com sucesso!";
    }
}

export {CreateComandaService};