import prismaClient from '../../prisma/index';
import jwt from 'jsonwebtoken';

interface UserRequest {
    nomeUser: string;
    senha: string;
    perfil: number;
}

interface UserRequestUnique {
    id: string;
}

interface UserRequestUpdate {
    id: string;
    nomeUser: string;
    senha: string;
}

interface LoginUser{
    nomeUser: string;
    senha: string;
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

        return "Usuário " + usuario.nomeUser + " criado!";
    }

    async login({nomeUser, senha}: LoginUser){
        if(!nomeUser){
            throw new Error("Informe um nome de usuário");
        } else if(!senha){
            throw new Error("Informe uma senha");
        }

        let usuario = await prismaClient.user.findFirst({
            where: {
                nomeUser: nomeUser,
                senha: senha
            }
        });

        if(!usuario){
            throw new Error("Usuário não cadastrado");
        }

        const APP_SECRET = "ddc5ada6d7408c76c8a3fca53";

        const token = jwt.sign({ id: usuario.idUser }, APP_SECRET, {
            expiresIn: '1d'
        });

        const data = {
            id: usuario.idUser,
            name: usuario.nomeUser,
            token
        }

        return data;
    }

    async get() {
        const usuario = prismaClient.user.findMany();
        return usuario;
    }

    async getUnique({ id }: UserRequestUnique) {
        const user = await prismaClient.user.findUnique({
            where: {
                idUser: parseInt(id)
            }
        });

        if (user) {
            return user;
        } else {
            throw new Error("O usuário não existe no banco de dados");
        }
    }

    async put({ id, nomeUser, senha }: UserRequestUpdate) {
        if (!nomeUser) {
            throw new Error('O Novo nome do usuário deve ser informado');
        } else if (!senha) {
            throw new Error('A Nova senha do usuário deve ser informado');
        } else {
            let user = await prismaClient.user.findUnique({
                where: {
                    idUser: parseInt(id)
                }
            });

            if (!user) {
                throw new Error("O ID informado não pertence a nenhum usuário");
            } else {
                user = await prismaClient.user.update({
                    where: {
                        idUser: parseInt(id)
                    }, data: {
                        nomeUser: nomeUser, senha: senha
                    }
                });
            }

            return user;
        }
    }

    async delete({ id }: UserRequestUnique) {
        let user = await prismaClient.user.findFirst({
            where: {
                idUser: parseInt(id)
            }
        });

        if (user) {
            await prismaClient.user.delete({
                where: {
                    idUser: parseInt(id)
                }
            });

            return { "Usuário": "Deletado" };
        } else {
            throw new Error("O Usuário com o ID informado não existe no banco de dados");
        }
    }
}

export { CreateUserService };