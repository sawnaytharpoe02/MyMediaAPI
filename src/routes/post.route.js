import { Router } from 'express';
import {
	createPost,
	findAllPosts,
	updatePost,
	deletePost,
	queryPostByCategory,
	queryPostByUser,
} from '../controllers/post.controller.js';
import { saveImage } from '../middlewares/upload.js';
import { validateToken } from '../middlewares/auth.js';
import { validateId, validatePost } from '../middlewares/validation.js';

const router = Router();

router
	.route('/')
	.get(findAllPosts)
	.post([validateToken, saveImage, validatePost, createPost]);

router
	.route('/:id')
	.patch([validateToken, validateId, saveImage, updatePost])
	.delete([validateToken, validateId, deletePost]);

router.get('/bycat/:id', [validateId, queryPostByCategory]);
router.get('/byuser/:id', [validateId, queryPostByUser]);

export { router as postRoute };
