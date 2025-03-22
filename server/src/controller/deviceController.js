import { Router } from "express";
import deviceService from "../services/deviceService.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";


const deviceRouter = Router();


deviceRouter.post(`/create`, async (req, res) => {
    const newDevice = req.body;

    try {
        const device = await deviceService.create(newDevice);
        res.send(JSON.stringify({ message: 'Created successfuly!' }));
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
});
deviceRouter.get(`/:id/details`, async (req, res) => {
    const id = req.params.id;
    try {
        const device = await deviceService.getOne(id);
        res.send(JSON.stringify(device));
    } catch (error) {
        res.status(500).json({ error: error.message })
    }

});
deviceRouter.get(`/latest`, async (req, res) => {
    try {

        const devices = await deviceService.getLast3();
        res.send(JSON.stringify(devices));

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
});
deviceRouter.get(`/all`, async (req, res) => {
    try {
        const devices = await deviceService.getAll();
        res.send(JSON.stringify(devices));
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
});

deviceRouter.get(`/:id/edit`, async (req, res) => {
    const id = req.params.id;
    const device = await deviceService.getOne(id);
});
deviceRouter.get(`/:id/prefer`, async (req, res) => {
    const id = req.params.id;
    const userId = req.user.id;
    try {
        const device = await deviceService.preferOne(id, userId);
        res.redirect(`/device/${id}/details`);
    } catch (error) {
    }
});
deviceRouter.post(`/:id/edit`, async (req, res) => {
    const newdevice = req.body;
    const id = req.params.id;
    const userId = req.user.id;
    try {
        const device = await deviceService.updateOne(id, newdevice, userId);
    } catch (error) {
    }
});
deviceRouter.get(`/:id/delete`, async (req, res) => {
    const id = req.params.id;
    const userId = req.user.id;
    try {
        const result = await deviceService.deleteOne(id, userId);
    } catch (error) {

    }
});




export default deviceRouter;