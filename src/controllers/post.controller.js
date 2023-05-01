import {
	createPostService,
	findAllPostsService,
} from '../services/post.services.js';
import formatMessage from '../utils/format.js';
import { HTTP_STATUS_CODES } from '../utils/interface.js';

const findAllPosts = async (req, res, next) => {
	try {
		const posts = await findAllPostsService();
		formatMessage(
			res,
			HTTP_STATUS_CODES.OK,
			'Retrieve all posts successfully.',
			posts
		);
	} catch (err) {
		next(new Error(`Failed retrieve posts: ${err}`));
	}
};

const createPost = async (req, res, next) => {
	try {
		const post = await createPostService(req.body);
		formatMessage(
			res,
			HTTP_STATUS_CODES.CREATED,
			'Create post successfully',
			post
		);
	} catch (err) {
		next(new Error(`Failed create post: ${err}`));
	}
};

export { findAllPosts, createPost };
