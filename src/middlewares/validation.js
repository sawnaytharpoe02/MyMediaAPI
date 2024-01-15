import {
	registerSchema,
	loginSchema,
	categorySchema,
	AllSchema,
	postSchema,
  tagSchema
} from '../utils/schema.js';

const validateBody = (schema) => {
	return (req, res, next) => {
		const { error } = schema.validate(req.body);
		if (error) {
			next(new Error(error.details[0].message));
		}
		next();
	};
};

const validateParams = (schema, string) => {
	return (req, res, next) => {
		let obj = {};
		obj[`${string}`] = req.params[`${string}`];
		const { error } = schema.validate(obj);
		if (error) {
			next(new Error(error.details[0].message));
		}
		next();
	};
};

const validateRegister = validateBody(registerSchema);
const validateLogin = validateBody(loginSchema);
const validateCategory = validateBody(categorySchema);
const validateId = validateParams(AllSchema.params, 'id');
const validatePost = validateBody(postSchema);
const validateTag = validateBody(tagSchema);

export {
	validateRegister,
	validateLogin,
	validateCategory,
	validateId,
	validatePost,
  validateTag
};
