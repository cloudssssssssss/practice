import express from 'express';
import * as articleController from '../controllers/articleController.js';
import { checkArticleAccess } from '../middlewares/auth.js';

const router = express.Router();
router.use(checkArticleAccess);
router.get('/', articleController.getArticles);
router.get('/:articleId', articleController.getArticleById);
export default router;
