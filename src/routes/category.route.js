import { Router } from "express";
import {
  findAllCategories,
  createCategory,
  findCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/category.controller.js";
import { validateCategory, validateId } from "../middlewares/validation.js";
import { validateToken } from "../middlewares/auth.js";

const router = Router();

router
  .route("/")
  .get(findAllCategories)
  .post([validateToken, validateCategory, createCategory]);

router
  .route("/:id")
  .get([validateToken, validateId, findCategory])
  .put([validateToken, validateCategory, updateCategory])
  .delete([validateToken, validateId, deleteCategory]);

export { router as categoryRoute };
