import express from "express"; 
import routes from "../routes";
import { changePassword, user, changePhone, changeBirthday, changeBloodType, changeResidence, changeHometown, changeCompany, changeUniversity } from "../controllers/userController";

const userRouter = express.Router(); 

userRouter.get(routes.user, user); 

userRouter.post(routes.changePassword, changePassword);
userRouter.post(routes.changePhone, changePhone);
userRouter.post(routes.changeBirthday, changeBirthday); 
userRouter.post(routes.changeBloodType, changeBloodType);
userRouter.post(routes.changeResidence, changeResidence);
userRouter.post(routes.changeHometown, changeHometown); 
userRouter.post(routes.changeCompany, changeCompany);
userRouter.post(routes.changeUniversity, changeUniversity);

export default userRouter;