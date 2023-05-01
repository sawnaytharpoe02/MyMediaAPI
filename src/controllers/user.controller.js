import {
	userRegisterService,
	userLoginService,
} from '../services/user.services.js';
import formatMessage from '../utils/format.js';
import { HTTP_STATUS_CODES } from '../utils/interface.js';

const userRegister = async (req, res, next) => {
	try {
		const user = await userRegisterService(req.body);
		formatMessage(
			res,
			HTTP_STATUS_CODES.CREATED,
			'user register successfully',
			user
		);
	} catch (err) {
		next(err);
	}
};

const userLogin = async (req, res, next) => {
	try {
		const user = await userLoginService(req.body);
		formatMessage(
			res,
			HTTP_STATUS_CODES.OK,
			'user register successfully',
			user
		);
	} catch (err) {
		next(err);
	}
};

export { userRegister, userLogin };
