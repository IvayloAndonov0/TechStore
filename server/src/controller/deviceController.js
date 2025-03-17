import { Router } from "express";
import deviceService from "../services/deviceService.js";
import { getErrorMessage } from "../utils/errorUtils.js";
import { isAuth } from "../middlewares/authMidlleware.js";


const deviceRouter = Router();

deviceRouter.get(`/create`,isAuth,(req,res)=>{
    res.render(`devices/create`);
});
deviceRouter.post(`/create`,isAuth, async (req,res)=>{
    const ownerId= req.user?.id;
    const newDevice = req.body;
try {
    await deviceService.create(newDevice,ownerId);
    res.redirect(`/catalog`);
} catch (err) {
    res.render(`devices/create`,{error:getErrorMessage(err),device:newDevice});
}   
});
deviceRouter.get(`/:id/details`,async(req,res)=>{
    const id = req.params.id;
    const device = await deviceService.getOne(id);
    const isOwner = req.user && req.user.id == device.owner;
    const userId = req.user.id;
    const isPrefferd= device.preferrdList.includes(userId);
    res.render(`devices/details`,{device,isOwner,userId,isPrefferd});
});
deviceRouter.get(`/:id/edit`,isAuth,async(req,res)=>{
    const id = req.params.id;
    const device = await deviceService.getOne(id);
    res.render(`devices/edit`,{device});
});
deviceRouter.get(`/:id/prefer`,isAuth,async(req,res)=>{
    const id = req.params.id;
    const userId = req.user.id;
    try {
        const device = await deviceService.preferOne(id,userId);
        res.redirect(`/device/${id}/details`);
    } catch (error) {
        res.redirect(`404`,{error:getErrorMessage(error)});
    }
    
});
deviceRouter.post(`/:id/edit`,isAuth,async(req,res)=>{
    const newdevice = req.body;
    const id = req.params.id;
    const userId = req.user.id;
    try {
        const device = await deviceService.updateOne(id,newdevice,userId);
        res.redirect(`/device/${id}/details`); 
    } catch (error) {
        res.render(`devices/edit`,{device:newdevice,error:getErrorMessage(error)});
    }
});
deviceRouter.get(`/:id/delete`,isAuth,async(req,res)=>{
    const id = req.params.id;
    const userId = req.user.id;
    try {
        const result = await deviceService.deleteOne(id,userId);
        res.redirect(`/catalog`);
    } catch (error) {
        
    }
});




export default deviceRouter;