import { Schema, model } from 'mongoose';

const UserSchema = new Schema(
	{
		name: { type: String, required: true, unique: true },
		email: { type: String, required: true, unique: true },
		phone: { type: String, required: true, unique: true },
		password: { type: String, required: true },
	},
	{
		timestamps: true,
	}
);

const User = model('user', UserSchema);

export default User;
