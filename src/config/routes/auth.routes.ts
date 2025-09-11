import { Router } from "express";
import { AuthController } from "../../controllers/AuthController";
import {createUserDTO} from '../../dtos/createUserDTOs';
import {userLogin} from '../../dtos/LoginUSerDTOs';
import { validateDTO } from "../../middlewares/UserValidateDTO";


const router = Router();
const controller = new AuthController()

router.post('/register',validateDTO(createUserDTO),controller.register.bind(controller))
router.post('/login',validateDTO(userLogin),controller.login.bind(controller))

export default router;