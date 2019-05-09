import express from "express"; 
import routes from "../routes"; 
import { emailCheck, passwordCheck, addComment, deleteComment } from "../controllers/apiController";

const apiRouter = express.Router(); 

apiRouter.post(routes.email_check, emailCheck);
apiRouter.post(routes.checkPassword, passwordCheck);
apiRouter.post(routes.addComment, addComment);
apiRouter.post(routes.deleteComment, deleteComment);

export default apiRouter;