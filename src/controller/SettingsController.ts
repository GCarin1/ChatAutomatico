import {Request,Response} from 'express'
import { SettingServices } from '../services/SettingServices';

class SettingsController{
    async create(request:Request,response:Response){
        const {chat,username}= request.body;
   
        const settingServices= new SettingServices();
     try{
        const settings=await settingServices.create({chat,username})
        return response.json(settings);
     }catch(err){
         return response.status(400).json({
             message: err.message,
         });
     }

     }
 }

export{SettingsController}