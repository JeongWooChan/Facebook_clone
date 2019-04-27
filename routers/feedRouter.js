import express from "express"; 
import routes from "../routes";
import { getMain, getPerson, getPersonInfo } from "../controllers/feedController";

const feedRouter = express.Router(); 

feedRouter.get(routes.home, getMain);

feedRouter.get(routes.person(), getPerson); 

feedRouter.get(routes.personInfo(), getPersonInfo);

export default feedRouter;