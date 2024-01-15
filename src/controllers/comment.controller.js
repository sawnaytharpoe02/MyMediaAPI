import {
  getCommentByPostIdService,
  createCommentService,
  deleteCommentService,
} from "../services/comment.services.js";
import formatMessage from "../utils/format.js";
import { HTTP_STATUS_CODES } from "../utils/interface.js";

const getCommentByPostId = async (req, res) => {
  try {
    const comments = await getCommentByPostIdService(req.params.id);
    formatMessage(
      res,
      HTTP_STATUS_CODES.OK,
      "retrieve comments successfully",
      comments
    );
  } catch (err) {
    next(new Error(`Failed to retrieve comments: ${err}`));
  }
};

const createComment = async (req, res) => {
  try {
    const comment = await createCommentService(req.body);
    formatMessage(
      res,
      HTTP_STATUS_CODES.CREATED,
      "created comment successfully",
      comment
    );
  } catch (err) {
    next(new Error(`Failed to create comment: ${err}`));
  }
};

const deleteComment = async (req, res) => {
  try {
    const comment = await deleteCommentService(req.params.id);
    formatMessage(
      res,
      HTTP_STATUS_CODES.OK,
      "deleted comment successfully",
      comment
    );
  } catch (err) {
    next(new Error(`Failed to delete comment: ${err}`));
  }
};

export { getCommentByPostId, createComment, deleteComment };
