import { Router } from 'express';
import {
	findAllCategories,
	createCategory,
	findCategory,
	updateCategory,
	deleteCategory,
} from '../controllers/category.controller.js';
import { validateCategory, validateId } from '../middlewares/validation.js';

const router = Router();

router
	.route('/')
	.get(findAllCategories)
	.post([validateCategory, createCategory]);

router
	.route('/:id')
	.get([validateId, findCategory])
	.put([validateCategory, updateCategory])
	.delete([validateId, deleteCategory]);

export { router as categoryRoute };
