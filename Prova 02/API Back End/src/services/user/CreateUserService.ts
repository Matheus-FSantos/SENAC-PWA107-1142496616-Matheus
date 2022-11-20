import prismaClient from '../../prisma/index';

interface UserRequest {
    nomeUser: string;
    senha: string;
    perfil: number;
}

interface UserRequestUnique {
    id: string;
}

class CreateUserService {
    async post({ nomeUser, senha, perfil }: UserRequest) {
        if (!nomeUser) {
            throw new Error("O nome de usuário deve ser informado");
        } else if (!senha) {
            throw new Error("A senha do usuário deve ser informada");
        } else if (!perfil) {
            throw new Error("O perfil do usuário deve ser informado");
        }

        let usuario = await prismaClient.user.findFirst({
            where: {
                nomeUser: nomeUser
            }
        });

        if (usuario) {
            throw new Error("Usuário já existe no banco de dados");
        } else {

            usuario = await prismaClient.user.create({
                data: {
                    nomeUser: nomeUser,
                    senha: senha,
                    perfilUser: perfil
                }
            });
        }

        return usuario;
    }

    async get() {
        const usuario = prismaClient.user.findMany();
        return usuario;
    }

    async getUnique({id}: UserRequestUnique){
        if(!id){
            throw new Error("O ID do usuário deve ser informado");
        } else {
            const user = await prismaClient.user.findUnique({
                where: {
                    idUser: parseInt(id)
                }
            });

            if(user){
                return user;
            } else {
                throw new Error("O usuário não existe no banco de dados");
            }
        }
    }

    async delete({id}: UserRequestUnique){
        if(!id){
            throw new Error("O ID do usuário deve ser informado");
        } else {
            await prismaClient.user.delete({
                where: {
                    idUser: parseInt(id)
                }
            });

            return {"Usuário": "Deletado"};
        }
    }
}

export { CreateUserService };