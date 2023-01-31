import { Router } from 'express';
import { BloodTypeController } from './controllers/blood-type-controller';

const bloodTypeController = new BloodTypeController();

const router = Router();

router.post('/blood-type', bloodTypeController.create.bind(bloodTypeController));
router.patch('/blood-type', bloodTypeController.update.bind(bloodTypeController));

export { router };
