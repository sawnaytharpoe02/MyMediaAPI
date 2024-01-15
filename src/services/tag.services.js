import Tag from "../models/tag.model.js";

const findAllTagsService = async () => {
  try {
    return await Tag.find();
  } catch (err) {
    console.log(err);
  }
};

const createTagService = async (tagData) => {
  try {
    const { image, name } = tagData;
    console.log("name", name);
    console.log("image", image);
    const tagName = await Tag.findOne({ name });
    if (tagName) {
      throw new Error("Tag name already exist.");
    }

    return await new Tag(tagData).save();
  } catch (err) {
    console.log(err);
  }
};

const findTagService = async (id) => {
  try {
    return await Tag.findById(id);
  } catch (err) {
    console.log(err);
  }
};

const updateTagService = async (id, tagData) => {
  try {
    const tag = await Tag.findById(id);
    if (!tag) {
      throw new Error(`there is no id: ${id} to update tag`);
    }
    const options = { new: true, upsert: true };
    return await Tag.findByIdAndUpdate(id, tagData, options);
  } catch (err) {
    console.log(err);
  }
};

const deleteTagService = async (id) => {
  try {
    const tag = await Tag.findById(id);
    if (!tag) {
      throw new Error(`there is no id: ${id} to delete tag`);
    }

    return await Tag.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
  }
};

export {
  findAllTagsService,
  createTagService,
  findTagService,
  updateTagService,
  deleteTagService,
};
