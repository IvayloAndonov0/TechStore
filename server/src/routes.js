import homeConroller from "./controller/homeController.js"
import { Router } from "express"
import authController from "./controller/authController.js";

const routes = Router();
routes.use(homeConroller);
routes.use(`/auth`,authController)
routes.get(`*`,(req,res)=>{
    res.render(`404`);
});



export default routes;