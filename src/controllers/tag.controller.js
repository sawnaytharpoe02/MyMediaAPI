import {
  findAllTagsService,
  createTagService,
  findTagService,
  updateTagService,
  deleteTagService,
} from "../services/tag.services.js";

import formatMessage from "../utils/format.js";
import { HTTP_STATUS_CODES } from "../utils/interface.js";

const findAllTags = async (_req, res, next) => {
  try {
    const tags = await findAllTagsService();
    formatMessage(
      res,
      HTTP_STATUS_CODES.OK,
      "retrieve tags successfully",
      tags
    );
  } catch (err) {
    next(new Error(`Failed to retrieve tags: ${err}`));
  }
};

const createTag = async (req, res, next) => {
  try {
    const tag = await createTagService(req.body);
    formatMessage(
      res,
      HTTP_STATUS_CODES.CREATED,
      "created tag successfully",
      tag
    );
  } catch (err) {
    next(new Error(`Failed to create tag: ${err}`));
  }
};

const findTag = async (req, res, next) => {
  try {
    const tag = await findTagService(req.params.id);
    formatMessage(res, HTTP_STATUS_CODES.OK, "retrieve tag successfully", tag);
  } catch (err) {
    next(new Error(`Failed to retrieve tag: ${err}`));
  }
};

const updateTag = async (req, res, next) => {
  try {
    const tag = await updateTagService(req.params.id, req.body);
    formatMessage(res, HTTP_STATUS_CODES.OK, "updated tag successfully", tag);
  } catch (err) {
    next(new Error(`Failed to update tag: ${err}`));
  }
};

const deleteTag = async (req, res, next) => {
  try {
    const tag = await deleteTagService(req.params.id);
    formatMessage(res, HTTP_STATUS_CODES.OK, "deleted tag successfully", tag);
  } catch (err) {
    next(new Error(`Failed to delete tag: ${err}`));
  }
};

export { findAllTags, createTag, findTag, updateTag, deleteTag };
