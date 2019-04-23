import express from "express"; 
import routes from "../routes";
import { getMain } from "../controllers/feedController";

const feedRouter = express.Router(); 

feedRouter.get(routes.home, getMain);

export default feedRouter;