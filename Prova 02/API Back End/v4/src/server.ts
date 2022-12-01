import express, {Request, Response, NextFunction} from 'express';
import {router} from './routes';
import cors from 'cors';
import './config/env';

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);
app.use((erro: Error, req: Request, res: Response, next: NextFunction)=>{
    if(erro instanceof Error){
        return res.status(400).json({Error: erro.message});
    }

    return res.status(500).json(
        {
            status: "Erro",
            message: "Internal Error."
        }
    );
});

app.listen(3333, () => console.log("Servidor Ativo!"));