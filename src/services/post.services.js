import Post from '../models/post.model.js';
import mongoose from 'mongoose';

const findAllPostsService = async () => {
	try {
		return await Post.find()
			.populate('user category', '-__v')
			.sort({ createdAt: -1 });
	} catch (err) {
		throw new Error(err);
	}
};

const createPostService = async (postData) => {
	try {
		let { user, title, content } = postData;
		const oldTitle = await Post.findOne({ title });
		if (oldTitle) {
			throw new Error('title already exist');
		}

		const oldContent = await Post.findOne({ content });
		if (oldContent) {
			throw new Error('content already exist');
		}

		let userId = user._id;
		delete (await user);
		user = userId;

		return await new Post(postData).save();
	} catch (err) {
		throw new Error(err);
	}
};

const updatePostService = async (postData, id) => {
	try {
		const post = await Post.findById(id);
		if (!post) {
			throw new Error(`there is no id - ${id} to update post`);
		}
		return await Post.findByIdAndUpdate(id, postData, { new: true });
	} catch (err) {
		throw new Error(err);
	}
};

const deletePostService = async (id) => {
	try {
		const post = await Post.findById(id);
		if (!post) {
			throw new Error(`there is no id - ${id} to delete post`);
		}
		return await Post.findByIdAndDelete(post._id);
	} catch (err) {
		throw new Error(err);
	}
};

const queryPostByCategoryService = async (id) => {
	try {
		const post = await Post.find({ category: id });
		if (!post) {
			throw new Error(`there is no post with this cat id - ${id}`);
		}
		return post;
	} catch (err) {
		throw new Error(err);
	}
};

const queryPostByUserService = async (id) => {
	try {
		const post = await Post.find({ user: id });
		if (!post) {
			throw new Error(`there is no post with this user id - ${id}`);
		}
		return post;
	} catch (err) {
		throw new Error(err);
	}
};
export {
	findAllPostsService,
	createPostService,
	updatePostService,
	deletePostService,
	queryPostByCategoryService,
	queryPostByUserService,
};
