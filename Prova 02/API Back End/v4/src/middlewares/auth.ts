import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

export const auth = async (requisicao: Request, resposta: Response, next: NextFunction) => {
    const authHeader = requisicao.headers.authorization
    const APP_SECRET = "ddc5ada6d7408c76c8a3fca53";

    if(!authHeader){
        throw new Error('Token é requerido');
    }

    //Bear, Token
    const [ , token] = authHeader.split(' ');

    try {
        await jwt.verify(token, APP_SECRET);
        next()
    } catch (error){
        throw new Error('Token é requerido');
    }
}