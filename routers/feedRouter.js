import express from "express"; 
import routes from "../routes";
import { getMain, getPerson } from "../controllers/feedController";

const feedRouter = express.Router(); 

feedRouter.get(routes.home, getMain);

feedRouter.get(routes.person(), getPerson); 

export default feedRouter;