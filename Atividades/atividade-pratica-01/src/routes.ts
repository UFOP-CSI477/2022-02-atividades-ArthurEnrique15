import { Router } from 'express';
import { BloodTypeController } from './controllers/blood-type-controller';
import { CollectionPlaceController } from './controllers/collection-place-controller';
import { DonationController } from './controllers/donation-controller';
import { PersonController } from './controllers/person-controller';

const bloodTypeController = new BloodTypeController();
const personController = new PersonController();
const collectionPlaceController = new CollectionPlaceController();
const donationController = new DonationController();

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

router.post('/collection-place', collectionPlaceController.create.bind(collectionPlaceController));
router.patch('/collection-place', collectionPlaceController.update.bind(collectionPlaceController));
router.delete('/collection-place', collectionPlaceController.delete.bind(collectionPlaceController));
router.get('/collection-place/all', collectionPlaceController.findAll.bind(collectionPlaceController));
router.get('/collection-place', collectionPlaceController.findById.bind(collectionPlaceController));
router.get('/collection-place/name', collectionPlaceController.findByName.bind(collectionPlaceController));

router.post('/donation', donationController.create.bind(donationController));
router.patch('/donation', donationController.update.bind(donationController));
router.delete('/donation', donationController.delete.bind(donationController));
router.get('/donation/all', donationController.findAll.bind(donationController));
router.get('/donation', donationController.findById.bind(donationController));

export { router };
