import express from 'express';
import * as articleController from '../controllers/articleController.js';
const router = express.Router();
router.get('/', articleController.getArticles);
router.post('/', articleController.postArticles);
router.get('/:articleId', articleController.getArticleById);
router.put('/:articleId', articleController.putArticleById);
router.delete('/:articleId', articleController.deleteArticleById);
export default router;
