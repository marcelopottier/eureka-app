import { Application, Router } from "express"
import userRoutes from "./userRoutes";
import clientRoutes from "./clientRoutes";
import unitRoutes from "./unitRoutes";
export const allRoutes = (app: Application) => {
    const apiRouter = Router();
    
    app.use('/', apiRouter);
    app.use('/user', userRoutes);
    app.use('/client', clientRoutes);
    app.use('/client', unitRoutes);
}