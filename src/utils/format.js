const formatMessage = (
	res,
	statusCode = 200,
	message = 'success',
	data = []
) => {
	res.status(statusCode).json({
		status: statusCode,
		message,
		data,
	});
};

export default formatMessage;
