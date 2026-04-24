import express from "express";
import * as articleController from "../controllers/articleController.js";
const router = express.Router();

router.get("/", articleController.getArticles);
router.get("/:articleId", articleController.getArticleById);

export default router;
