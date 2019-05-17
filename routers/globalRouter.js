import express from "express"; 
import routes from "../routes"; 
import { home, postJoin, getJoin, getLogin, postLogin, logout, getSearch } from "../controllers/globalController";

const globalRouter = express.Router(); 

globalRouter.get(routes.home, home); 

//join 
globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin, postLogin);

//Login 
globalRouter.get(routes.login, getLogin); 
globalRouter.post(routes.login, postLogin);

//Logout 
globalRouter.get(routes.logout, logout); 

//Search 
globalRouter.get(routes.search, getSearch); 

export default globalRouter; 