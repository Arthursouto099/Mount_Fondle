import { Router } from "express";
import { AuthController } from "../../controllers/AuthController";
import {CreateUserDTO} from '';
import {LoginUserDTO} from '';
import { validateDTO } from "../../middlewares/UserValidateDTO";


const router = Router();
const controller = new AuthController()

router.post('/register',validateDTO(CreateUserDTO),controller.register.bind(controller))
router.post('/login',validateDTO(LoginUserDTO),controller.login.bind(controller))

export default router;