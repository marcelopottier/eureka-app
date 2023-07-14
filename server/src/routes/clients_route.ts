import { Router } from "express";
import { clientController } from "../controllers/clients_controller";

const clientRouter = Router();

clientRouter.post('/register', clientController.insertNewClient);


export{
    clientRouter
}