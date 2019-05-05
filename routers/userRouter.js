import express from "express"; 
import routes from "../routes";
import { changePassword, user, changePhone, changeBirthday, changeBloodType, changeResidence, changeHometown, changeCompany, changeUniversity, deleteCompany, deleteUniversity, deleteResidence, deleteHometown, deletePhone, deleteBloodType, editProfile } from "../controllers/userController";
import { uploadAvatar } from "../middleware";

const userRouter = express.Router(); 

userRouter.get(routes.user, user); 

userRouter.post(routes.changePassword, changePassword);

userRouter.post(routes.changePhone, changePhone);
userRouter.post(routes.deletePhone, deletePhone);

userRouter.post(routes.changeBirthday, changeBirthday); 

userRouter.post(routes.changeBloodType, changeBloodType);
userRouter.post(routes.deleteBloodType, deleteBloodType);

userRouter.post(routes.changeResidence, changeResidence);
userRouter.post(routes.deleteResidence, deleteResidence);

userRouter.post(routes.changeHometown, changeHometown); 
userRouter.post(routes.deleteHometown, deleteHometown);

userRouter.post(routes.changeCompany, changeCompany);
userRouter.post(routes.deleteCompany, deleteCompany);

userRouter.post(routes.changeUniversity, changeUniversity);
userRouter.post(routes.deleteUniversity, deleteUniversity);

userRouter.post(routes.editProfile, uploadAvatar, editProfile);

export default userRouter;