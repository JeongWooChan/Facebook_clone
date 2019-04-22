import express from "express"; 
import routes from "../routes"; 
import { home, join } from "../controllers/fbController";

const globalRouter = express.Router(); 

globalRouter.get(routes.home, home); 
globalRouter.post(routes.join, join); 

export default globalRouter; 