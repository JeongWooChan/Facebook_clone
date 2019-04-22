import express from "express"; 
import routes from "../routes"; 
import { home, join, postLogin } from "../controllers/globalController";
import { main, joinSuccess } from "../controllers/feedController";

const globalRouter = express.Router(); 

globalRouter.get(routes.home, home); 
globalRouter.post(routes.join, join, joinSuccess); // 회원가입 성공시 main화면으로 이동 (로그인) 

globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.main, main); 

export default globalRouter; 