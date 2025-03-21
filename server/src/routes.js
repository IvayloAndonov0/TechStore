import homeConroller from "./controller/homeController.js"
import { Router } from "express"
import authController from "./controller/authController.js";
import deviceRouter from "./controller/deviceController.js";

const routes = Router();
routes.use(homeConroller);
routes.use(`/auth`,authController);
routes.use(`/tech`,deviceRouter)


export default routes;