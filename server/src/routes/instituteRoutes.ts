import express from "express";
import Institute from "../models/Institute";

const router = express.Router();

router.use(express.json());

router.post('/addInstitutes', async (req, res) => {
    try {
        console.log(req.body)
        const institute = await new Institute(req.body).save();
        res.json({ institute }).status(200);
    } catch (error: any) {
        res.json({ error: true, message: error.message})
    }
})

router.get('/listInstitutes', async (req, res) => {
    try {
        //req.headers.unitId
        const institutes = await Institute.find({});
        res.json({ institutes }).status(200);
    } catch (error: any) {
        res.json({ error: true, message: error.message})
    }
})

export default router;