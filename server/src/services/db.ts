import { rejects } from "assert";
import { query } from "express";
import { resolve } from "path";
import sqlite3 from "sqlite3";

const DATABASE_FILE = './eureka_db.db';

if(!DATABASE_FILE){
    throw new Error("Database File não carregado.")

}
export const  openConenction = () => {
    let db = new sqlite3.Database(DATABASE_FILE);
    return db;
}

export const dbQuery = (query: string, params?: any[]) => {
    let db = openConenction();
    return new Promise((resolve, reject) => {
      db.all(query, params, (err, rows) => {
        if(err){
            reject(err);
        }else{
            resolve(rows);
        }
      })  
    })
    .finally(() => {
        db.close();
    })
}