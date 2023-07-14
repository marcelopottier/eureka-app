import express from 'express';
import dotenv from 'dotenv';
import { allRoutes } from './routes';
dotenv.config();

const PORT = process.env.PORT || 3333;
const app = express();
const cors = require('cors');
const config = require('./config/config')

app.use(cors());

allRoutes(app);

app.listen(PORT, () => console.log('Server iniciado na porta ' + PORT));