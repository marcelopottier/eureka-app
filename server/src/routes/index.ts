import { Application, Router } from "express"
import { clientRouter } from "./clients_route";
export const allRoutes = (app: Application) => {
    const apiRouter = Router();
    apiRouter.use('/clients', clientRouter);

    app.use('/', apiRouter);
}