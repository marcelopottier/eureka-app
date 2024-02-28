import express from "express";
import Unit from "../models/Unit";

const router = express.Router();

router.use(express.json());

router.post('/addUnit', async (req, res) => {
    try {
        console.log(req.body)
        const unit = await new Unit(req.body).save();
        res.json({ unit }).status(200);
    } catch (error: any) {
        res.json({ error: true, message: error.message})
    }
})

router.get('/listUnits', async (req, res) => {
    try {
        //req.headers.unitId
        const units = await Unit.find({});
        res.json({ units }).status(200);
    } catch (error: any) {
        res.json({ error: true, message: error.message})
    }
})

export default router;