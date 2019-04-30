import express from "express"; 
import routes from "../routes";
import { changePassword, user } from "../controllers/userController";

const userRouter = express.Router(); 

userRouter.get(routes.user, user); 

userRouter.post(routes.changePassword, changePassword);

export default userRouter;