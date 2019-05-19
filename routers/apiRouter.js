import express from "express"; 
import routes from "../routes"; 
import { emailCheck, passwordCheck, addComment, deleteComment, editComment, addReply, deleteReply, editReply, like, addIntroduce, reqFriend, addFriend, deleteRequestFriend, feedAutoPaging } from "../controllers/apiController";

const apiRouter = express.Router(); 

apiRouter.post(routes.email_check, emailCheck);
apiRouter.post(routes.checkPassword, passwordCheck);

apiRouter.post(routes.addComment, addComment);
apiRouter.post(routes.deleteComment, deleteComment);
apiRouter.post(routes.editComment, editComment);

apiRouter.post(routes.addReply, addReply);
apiRouter.post(routes.deleteReply, deleteReply);
apiRouter.post(routes.editReply, editReply);

apiRouter.post(routes.like, like); 

apiRouter.post(routes.addIntroduce, addIntroduce);

apiRouter.post(routes.reqFriend, reqFriend); 
apiRouter.post(routes.addFriend, addFriend);
apiRouter.post(routes.deleteRequesetFriend, deleteRequestFriend);

apiRouter.post(routes.feedAuto, feedAutoPaging); 

export default apiRouter;