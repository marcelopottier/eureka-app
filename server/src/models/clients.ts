import { dbQuery } from "../services/db";

export type Client = {
    id: number;
    client_name: string;
    parent_name: string;
    email: string;
    phone: number;
    school: string;
    institute: string;
}

const insertNewClient = async (client: Client) => {
    await dbQuery('INSERT INTO clientes (cliente_nome, cliente_responsavel_nome, email, celular, escola) VALUES (?, ?)', [client.client_name, client.parent_name, 
        client.email, client.phone, client.school]);
    let db_return: any = await dbQuery(`SELECT seq AS Id FROM sqlite_sequence WHERE name = 'clientes'`);
    return db_return[0].Id;
}

export const clientModel = {
    insertNewClient
}