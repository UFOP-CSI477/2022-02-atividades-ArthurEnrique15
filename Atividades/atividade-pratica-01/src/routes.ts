import { Router } from 'express';
import { BloodTypeController } from './controllers/blood-type-controller';
import { PersonController } from './controllers/person-controller';

const bloodTypeController = new BloodTypeController();
const personController = new PersonController();

const router = Router();

router.post('/blood-type', bloodTypeController.create.bind(bloodTypeController));
router.patch('/blood-type', bloodTypeController.update.bind(bloodTypeController));
router.delete('/blood-type', bloodTypeController.delete.bind(bloodTypeController));
router.get('/blood-type/all', bloodTypeController.findAll.bind(bloodTypeController));
router.get('/blood-type', bloodTypeController.findById.bind(bloodTypeController));

router.post('/person', personController.create.bind(personController));
router.patch('/person', personController.update.bind(personController));
router.delete('/person', personController.delete.bind(personController));
router.get('/person/all', personController.findAll.bind(personController));
router.get('/person', personController.findById.bind(personController));
router.get('/person/name', personController.findByName.bind(personController));

export { router };
