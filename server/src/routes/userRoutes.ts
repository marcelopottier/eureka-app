import express from "express";
import User from "../models/User";

const router = express.Router();

router.use(express.json());

router.post('/addUser', async (req, res) => {
    try {
        console.log(req.body)
        const user = await new User(req.body).save();
        res.json({ user }).status(200);
    } catch (error: any) {
        res.json({ error: true, message: error.message})
    }
})

router.get('/listUsers', async (req, res) => {
    try {
        //req.headers.unitId
        const users = await User.find({});
        res.json({ users }).status(200);
    } catch (error: any) {
        res.json({ error: true, message: error.message})
    }
})

export default router;