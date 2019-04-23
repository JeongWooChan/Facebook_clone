import express from "express"; 
import routes from "../routes"; 
import { home, postJoin, getJoin } from "../controllers/globalController";

const globalRouter = express.Router(); 

globalRouter.get(routes.home, home); 

//join 
globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

export default globalRouter; 