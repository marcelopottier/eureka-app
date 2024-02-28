import express from "express";
import Unit from "../models/Unit";
import Client from "../models/Client";

const router = express.Router();

router.use(express.json());

router.post('/addClient', async (req, res) => {
    try {
        console.log(req.body)
        const client = await new Client(req.body).save();
        res.json({ client }).status(200);
    } catch (error: any) {
        res.json({ error: true, message: error.message})
    }
})

router.get('/listClients', async (req, res) => {
    try {
        //req.headers.unitId
        const clients = await Client.find({});
        res.json({ clients }).status(200);
    } catch (error: any) {
        res.json({ error: true, message: error.message})
    }
})

export default router;