import express from "express"; 
import routes from "../routes"; 
import { emailCheck } from "../controllers/apiController";

const apiRouter = express.Router(); 

apiRouter.post(routes.email_check, emailCheck);

export default apiRouter;