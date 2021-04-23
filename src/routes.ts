import {Router} from "express";
import { SettingsController } from "./controller/SettingsController";


const routes=Router();

const settingsController = new SettingsController();

routes.post("/settings", settingsController.create);
   


export {routes};