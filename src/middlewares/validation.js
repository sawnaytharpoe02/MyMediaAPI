import { registerSchema, loginSchema } from '../utils/schema.js';

const validateBody = (schema) => {
	return (req, res, next) => {
		const { error } = schema.validate(req.body);
		if (error) {
			next(new Error(error.details[0].message));
		}
		next();
	};
};

const validateRegister = validateBody(registerSchema);
const validateLogin = validateBody(loginSchema);

export { validateRegister, validateLogin };
