import express from 'express';
import * as userController from '../controllers/userController.js';
import { authenticate } from '../middlewares/auth.js';
import { validateUser } from '../middlewares/validator.js';

const router = express.Router();
router.get('/', authenticate, userController.getUsers);
router.post('/', authenticate, validateUser, userController.postUsers);
router.get('/:userId', authenticate, userController.getUserById);
export default router;
