import { Router } from 'express';
import { StatementController } from './controllers/statement-controller';
import { UserController } from './controllers/user-controller';

const userController = new UserController();
const statementController = new StatementController();

const router = Router();

router.post('/user', userController.create.bind(userController));
router.post('/user/login', userController.login.bind(userController));
router.post('/statement', statementController.create.bind(statementController));
router.get('/statement', statementController.list.bind(statementController));

export { router };
