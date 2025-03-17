import homeConroller from "./controller/homeController.js"
import { Router } from "express"
import movieController from "./controller/movieContorller.js"
import castController from "./controller/castController.js";
import authController from "./controller/authController.js";

const routes = Router();
routes.use(homeConroller);
routes.use(`/footballers`,movieController);
routes.use(`/cast`,castController);
routes.use(`/users`,authController)
routes.get(`*`,(req,res)=>{
    res.render(`404`);
});



export default routes;