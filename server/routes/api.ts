import express from 'express';
const router = express.Router();

// controller
import { userController } from '../controllers/users';
import { scheduleController } from '../controllers/schedule';

// API routes

// users
router.get('/users',  userController.list);
router.get('/users/:id', userController.get);
router.post('/users', userController.post);
router.delete('/users/:id', userController.delete);

// schedules
router.get('/schedules',  scheduleController.list);
router.get('/schedules/search', scheduleController.search);
router.get('/schedules/:id', scheduleController.get);
router.post('/schedules', scheduleController.post);
router.delete('/schedules/:id', scheduleController.delete);

export default router;
