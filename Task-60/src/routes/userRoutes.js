import express from 'express';
import * as userController from '../controllers/userController.js';
const router = express.Router();
router.get('/', userController.getUsers);
router.post('/', userController.postUsers);
router.get('/:userId', userController.getUserById);
router.put('/:userId', userController.putUserById);
router.delete('/:userId', userController.deleteUserById);
export default router;
