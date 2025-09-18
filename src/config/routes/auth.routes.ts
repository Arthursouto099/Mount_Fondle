import { Router } from "express";
import { AuthController } from "../../controllers/AuthController";
import {createUserDTO} from '../../dtos/createUserDTOs';
import {userLogin} from '../../dtos/LoginUSerDTOs';
import { validateDTO } from "../../middlewares/UserValidateDTO";

const UserRouter = Router();
const controller = new AuthController()

UserRouter.post('/register',validateDTO(createUserDTO),controller.register.bind(controller))
UserRouter.post('/login', validateDTO(userLogin),controller.login.bind(controller))

export default UserRouter;