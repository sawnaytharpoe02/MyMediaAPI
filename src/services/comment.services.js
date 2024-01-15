import Comment from "../models/comment.model.js";

const createCommentService = async (commentData) => {
  try {
    const newComment = await Comment.create(commentData);
    return newComment;
  } catch (err) {
    throw new Error(err);
  }
};

const getCommentByPostIdService = async (postId) => {
  try {
    const comments = await Comment.find({ postId });
    return comments;
  } catch (err) {
    throw new Error(err);
  }
};

const deleteCommentService = async (id) => {
  try {
    const comment = await Comment.findByIdAndDelete(id);
    return comment;
  } catch (err) {
    throw new Error(err);
  }
};

export {
  createCommentService,
  getCommentByPostIdService,
  deleteCommentService,
};
