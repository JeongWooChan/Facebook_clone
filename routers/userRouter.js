import express from "express"; 
import routes from "../routes";
import { changePassword, user, changePhone, changeBirthday, changeBloodType } from "../controllers/userController";

const userRouter = express.Router(); 

userRouter.get(routes.user, user); 

userRouter.post(routes.changePassword, changePassword);

userRouter.post(routes.changePhone, changePhone);

userRouter.post(routes.changeBirthday, changeBirthday); 

userRouter.post(routes.changeBloodType, changeBloodType);

export default userRouter;