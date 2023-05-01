import { Schema, model } from 'mongoose';

const PostSchema = new Schema(
	{
		user: { type: Schema.Types.ObjectId, required: true, unique: true },
		category: { type: Schema.Types.ObjectId, required: true, unique: true },
		title: { type: String, required: true, unique: true },
		content: { type: String, required: true, unique: true },
		image: { type: String, required: true, unique: true },
	},
	{
		timestamps: true,
	}
);

const Post = model('post', PostSchema);

export default Post;
