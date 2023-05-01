import { Router } from 'express';
import { createPost, findAllPosts } from '../controllers/post.controller.js';

const router = Router();

router.route('/').get(findAllPosts).post(createPost);

export { router as postRoute };
