import {Request, Response} from 'express';
import { badRequest, internalServerError } from '../services/http_status';
import { Client, clientModel } from '../models/clients';

const insertNewClient = (req: Request, res: Response) => {

    {
        const client = req.body.client;

        if(!client){
            return badRequest(res, 'Produto inválido');
        }
    }

    const client = req.body.client as Client;
    clientModel.insertNewClient(client)
        .then(id => {
            res.json({
                id
            })
        })
        .catch(err => internalServerError(res, err));
}

export const clientController = {    
    insertNewClient
}