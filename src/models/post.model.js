import { Schema, model } from "mongoose";

const PostSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    category: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "category",
    },
    tag: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "tag",
    },
    like: {
      type: Number,
      default: 0,
    },
    title: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Post = model("post", PostSchema);

export default Post;
