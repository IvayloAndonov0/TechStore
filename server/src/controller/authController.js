import { Router } from "express";
import authService from "../services/authService.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
const authController = Router();

authController.post(`/register`, async (req, res) => {
    const userData = req.body;
    
    const user = await authService.register(userData);

    res.send(JSON.stringify(user));
});
authController.post(`/login`, async (req, res) => {

    const {email, password } = req.body;
    try {
        const token = await authService.login(email, password);
        const user = await authService.getUser(email, password);
        res.send(JSON.stringify({ user, token }));
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});


export default authController;