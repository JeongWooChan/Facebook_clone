import express from "express"; 
import routes from "../routes"; 
import { emailCheck, passwordCheck, addComment, deleteComment, editComment, addReply, deleteReply, editReply } from "../controllers/apiController";

const apiRouter = express.Router(); 

apiRouter.post(routes.email_check, emailCheck);
apiRouter.post(routes.checkPassword, passwordCheck);

apiRouter.post(routes.addComment, addComment);
apiRouter.post(routes.deleteComment, deleteComment);
apiRouter.post(routes.editComment, editComment);

apiRouter.post(routes.addReply, addReply);
apiRouter.post(routes.deleteReply, deleteReply);
apiRouter.post(routes.editReply, editReply);

export default apiRouter;