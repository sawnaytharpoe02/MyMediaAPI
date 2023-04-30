const formatMessage = (res, statusCode, message = 'success', data = []) => {
	res.status(statusCode).json({
		status: statusCode,
		message,
		data,
	});
};

export default formatMessage;
