import { Router } from 'express';
import { BloodTypeController } from './controllers/blood-type-controller';

const bloodTypeController = new BloodTypeController();

const router = Router();

router.post('/blood-type', bloodTypeController.create.bind(bloodTypeController));
router.patch('/blood-type', bloodTypeController.update.bind(bloodTypeController));
router.delete('/blood-type', bloodTypeController.delete.bind(bloodTypeController));
router.get('/blood-type/all', bloodTypeController.findAll.bind(bloodTypeController));
router.get('/blood-type', bloodTypeController.findById.bind(bloodTypeController));

export { router };
