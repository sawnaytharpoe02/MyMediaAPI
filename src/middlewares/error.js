import { HTTP_STATUS_CODES } from '../utils/interface.js';

const routeNotFoundHandler = (req, res, next) => {
	const error = new Error('Route not found');
	error.status = HTTP_STATUS_CODES.NOT_FOUND;
	next(error);
};

const errorHandler = (err, req, res, next) => {
	const status = err.status || HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR;
	const message = err.message || 'Unknown error occured';
	const stack = err.stack;
	const response = {
		status,
		message,
		stack,
	};
	res.status(status).json(response);
};

export { routeNotFoundHandler, errorHandler };
