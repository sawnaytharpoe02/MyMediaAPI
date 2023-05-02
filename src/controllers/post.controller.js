import {
	createPostService,
	deletePostService,
	findAllPostsService,
	queryPostByCategoryService,
	queryPostByUserService,
	updatePostService,
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

const updatePost = async (req, res, next) => {
	try {
		const post = await updatePostService(req.body, req.params.id);
		formatMessage(res, HTTP_STATUS_CODES.OK, 'update post successfully', post);
	} catch (err) {
		next(new Error(`Failed update post: ${err}`));
	}
};

const deletePost = async (req, res, next) => {
	try {
		const post = await deletePostService(req.params.id);
		formatMessage(res, HTTP_STATUS_CODES.OK, 'delete post successfully', post);
	} catch (err) {
		next(new Error(`Failed delete post: ${err}`));
	}
};

const queryPostByCategory = async (req, res, next) => {
	try {
		const post = await queryPostByCategoryService(req.params.id);
		formatMessage(
			res,
			HTTP_STATUS_CODES.OK,
			'retrieve post successfully',
			post
		);
	} catch (err) {
		next(new Error(`Failed retrieve post: ${err}`));
	}
};

const queryPostByUser = async (req, res, next) => {
	try {
		const post = await queryPostByUserService(req.params.id);
		formatMessage(
			res,
			HTTP_STATUS_CODES.OK,
			'retrieve post successfully',
			post
		);
	} catch (err) {
		next(new Error(`Failed retrieve post: ${err}`));
	}
};

export {
	findAllPosts,
	createPost,
	updatePost,
	deletePost,
	queryPostByCategory,
	queryPostByUser,
};
