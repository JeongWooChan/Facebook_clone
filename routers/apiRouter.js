import express from "express"; 
import routes from "../routes"; 
import { emailCheck, passwordCheck, addComment } from "../controllers/apiController";

const apiRouter = express.Router(); 

apiRouter.post(routes.email_check, emailCheck);
apiRouter.post(routes.checkPassword, passwordCheck);
apiRouter.post(routes.addComment, addComment);

export default apiRouter;