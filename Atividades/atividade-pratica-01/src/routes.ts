import { Router } from 'express';
import { BloodTypeController } from './controllers/blood-type-controller';

const bloodTypeController = new BloodTypeController();

const router = Router();

router.post('/blood-type', bloodTypeController.create.bind(bloodTypeController));

export { router };
