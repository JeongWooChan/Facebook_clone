import express from "express"; 
import routes from "../routes"; 
import { emailCheck, passwordCheck } from "../controllers/apiController";

const apiRouter = express.Router(); 

apiRouter.post(routes.email_check, emailCheck);

apiRouter.post(routes.checkPassword, passwordCheck);

export default apiRouter;