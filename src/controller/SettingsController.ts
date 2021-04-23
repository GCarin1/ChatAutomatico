import {Request,Response} from 'express'
import { SettingService } from '../services/SettingService';

class SettingsController{
    async create(request:Request,response:Response){
        const {chat,username}= request.body;
   
        const settingServices= new SettingService();
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