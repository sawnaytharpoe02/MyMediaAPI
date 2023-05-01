import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const userRegisterService = async (userData) => {
	try {
		let { name, email, phone, password } = userData;
		const userName = await User.findOne({ name });
		if (userName) {
			throw new Error('User name already exist');
		}

		const userEmail = await User.findOne({ email });
		if (userEmail) {
			throw new Error('User email already exist');
		}

		const userPhone = await User.findOne({ phone });
		if (userPhone) {
			throw new Error('User phone already exist');
		}

		let hash = bcrypt.hashSync(password, 10);
		const data = {
			name,
			email,
			phone,
			password: hash,
		};
		return await new User(data).save();
	} catch (err) {
		throw new Error(err);
	}
};

const userLoginService = async (userData) => {
	const { email, password } = userData;
	const userEmail = await User.findOne({ email }).select('-__v');

	if (userEmail) {
		const compare = bcrypt.compareSync(password, userEmail.password);
		if (compare) {
			let userObj = userEmail.toObject();
			delete userObj.password;
			const generateToken = jwt.sign(userObj, process.env.JWT_SECRET_KEY, {
				expiresIn: '1h',
			});
			userObj.token = generateToken;
			return userObj;
		} else {
			throw new Error('credential error');
		}
	} else {
		throw new Error('there is no user data with this email!');
	}
};

export { userRegisterService, userLoginService };
