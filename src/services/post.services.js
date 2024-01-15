import Post from "../models/post.model.js";
import Comment from "../models/comment.model.js";

const findAllPostsService = async (pageNumber) => {
  try {
    let pageSize = 4;
    let pageStartCount = pageSize * (pageNumber - 1);
    return await Post.find()
      .populate("user", "-__v")
      .sort({ createdAt: -1 })
      .skip(pageStartCount)
      .limit(pageSize);
  } catch (err) {
    throw new Error(err);
  }
};

const findPostService = async (id) => {
  try {
    let post = await Post.findById(id).populate("user category tag", "-__v");

    if (!post) {
      throw new Error(`there is no id - ${id} to find post`);
    }

    let comments = await Comment.find({ postId: post._id });
    post = post.toObject();
    post["comments"] = comments;

    return post;
  } catch (err) {
    throw new Error(err);
  }
};

const createPostService = async (postData) => {
  try {
    let { user, title, content } = postData;
    const oldTitle = await Post.findOne({ title });
    if (oldTitle) {
      throw new Error("title already exist");
    }

    const oldContent = await Post.findOne({ content });
    if (oldContent) {
      throw new Error("content already exist");
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

const queryPostByTagService = async (id) => {
  try {
    const tag = await Post.find({ tags: id });
    if (!tag) {
      throw new Error(`there is no post with this tag id - ${id}`);
    }

    return tag;
  } catch (err) {
    throw new Error(err);
  }
};

const toggleLikeService = async (id, status) => {
  try {
    const post = await Post.findById(id);
    if (!post) {
      throw new Error(`there is no post with this id - ${id}`);
    }

    status === "1" ? post.like++ : post.like = 0;
    return await Post.findByIdAndUpdate(id, post, { new: true });
  } catch (err) {
    throw new Error(err);
  }
};

export {
  findAllPostsService,
  findPostService,
  createPostService,
  updatePostService,
  deletePostService,
  queryPostByCategoryService,
  queryPostByUserService,
  queryPostByTagService,
  toggleLikeService,
};
