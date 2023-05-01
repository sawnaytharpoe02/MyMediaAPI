import Post from '../models/post.model.js';

const findAllPostsService = async () => {
	try {
		return await Post.find();
	} catch (err) {
		throw new Error(err);
	}
};

const createPostService = async (postData) => {
	try {
		return await new Post(postData).save();
	} catch (err) {
		throw new Error(err);
	}
};

export { findAllPostsService, createPostService };
