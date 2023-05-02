import jwt from 'jsonwebtoken';
import { HTTP_STATUS_CODES } from '../utils/interface.js';

const validateToken = async (req, res, next) => {
	let token = await req.headers.authorization;
	if (token) {
		token = token.split(' ')[1];
		const decodedToken = jwt.decode(token, process.env.JWT_SECRET_KEY);
		const user = decodedToken;
		req.body['user'] = user;
		next();
	} else {
		next(new Error(HTTP_STATUS_CODES.UNAUTHORIZED, 'Tokenization error'));
	}
};

export { validateToken };
