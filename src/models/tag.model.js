import { Schema, mongoose } from "mongoose";

const TagSchema = Schema(
  {
    name: { type: String, required: true, unique: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

const Tag = mongoose.model("tag", TagSchema);

export default Tag;
