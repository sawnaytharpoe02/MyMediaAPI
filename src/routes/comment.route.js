import { Router } from "express";
import {
  getCommentByPostId,
  createComment,
  deleteComment,
} from "../controllers/comment.controller.js";

const router = Router();

router.route("/").post(createComment);
router.route("/:id").get(getCommentByPostId).delete(deleteComment);

export { router as commentRoute };