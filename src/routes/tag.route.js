import { Router } from "express";
import {
  findAllTags,
  createTag,
  findTag,
  updateTag,
  deleteTag,
} from "../controllers/tag.controller.js";

import { validateTag, validateId } from "../middlewares/validation.js";
import { saveImage } from "../middlewares/upload.js";
import { validateToken } from "../middlewares/auth.js";

const router = Router();

router
  .route("/")
  .get(findAllTags)
  .post([validateToken, saveImage, validateTag, createTag]);

router
  .route("/:id")
  .get([validateToken, validateId, findTag])
  .put([validateToken, saveImage, validateTag, updateTag])
  .delete([validateToken, validateId, deleteTag]);

export { router as tagRoute };
