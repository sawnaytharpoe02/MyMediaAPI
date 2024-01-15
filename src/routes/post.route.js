import { Router } from "express";
import {
  createPost,
  findAllPosts,
  findPost,
  updatePost,
  deletePost,
  queryPostByCategory,
  queryPostByUser,
  queryPostByTag,
  toggleLike
} from "../controllers/post.controller.js";
import { saveImage } from "../middlewares/upload.js";
import { validateToken } from "../middlewares/auth.js";
import {
  validateId,
  validatePage,
  validatePost,
  validateStatus,
} from "../middlewares/validation.js";

const router = Router();

router.get("/page/:page", [validatePage, findAllPosts]);

router.post("/", [validateToken, saveImage, validatePost, createPost]);

router
  .route("/:id")
  .get([validateId, findPost])
  .patch([validateToken, validateId, saveImage, updatePost])
  .delete([validateToken, validateId, deletePost]);

router.get("/bycat/:id", [validateId, queryPostByCategory]);
router.get("/byuser/:id", [validateId, queryPostByUser]);
router.get("/bytag/:id", [validateId, queryPostByTag]);

router.put("/toggle/:id/:status", [
  validateId,
  validateStatus,
  validateToken,
  toggleLike,
]);

export { router as postRoute };
