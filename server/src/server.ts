import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { allRoutes } from './routes';
import MongooseAdapter from './infra/adapters/MongooseAdapter';
dotenv.config();

export class App{
    private readonly database: MongooseAdapter;
    constructor(){
        this.database = new MongooseAdapter;
    }
    async start(): Promise<void>{
        await this.database.connect();
        const PORT = process.env.PORT || 3333;
        const app = express();
        const cors = require('cors');
    
        app.use(cors());
        app.use(morgan('dev'));
        allRoutes(app);

        app.listen(PORT, () => console.log('Server iniciado na porta ' + PORT));
    }

}

const app = new App()
app.start().catch((error) => {
  console.error('Um ou mais erros impediram o funcionamento do servidor:', error)
})
