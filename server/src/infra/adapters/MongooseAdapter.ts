import { error } from "console";
import mongoose, { ConnectOptions } from "mongoose";

export default class MongooseAdapter{

    async connect(): Promise<any>{
        mongoose.connect(process.env.URI || '', {
            useNewUrlParser: true
        } as ConnectOptions)
            .then(() => console.log('DB conectado.'))
            .catch(() => console.log(error))
    }

    async disconnect(): Promise<any>{
        
    }

}