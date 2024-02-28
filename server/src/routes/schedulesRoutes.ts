import express from "express";
import Schedule from "../models/Schedule";

const router = express.Router();

router.use(express.json());

router.post('/addSchedules', async (req, res) => {
    try {
        console.log(req.body)
        const schedule = await new Schedule(req.body).save();
        res.json({ schedule }).status(200);
    } catch (error: any) {
        res.json({ error: true, message: error.message})
    }
})

router.get('/listSchedules', async (req, res) => {
    try {
        //req.headers.unitId
        const schedules = await Schedule.find({});
        res.json({ schedules }).status(200);
    } catch (error: any) {
        res.json({ error: true, message: error.message})
    }
})

export default router;