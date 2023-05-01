import Joi from 'joi';

export const registerSchema = Joi.object({
	name: Joi.string().min(3).required(),
	email: Joi.string().email().required(),
	phone: Joi.string().min(8).max(11).required(),
	password: Joi.string().min(8).max(25).required(),
});

export const loginSchema = Joi.object({
	email: Joi.string().email().required(),
	password: Joi.string().min(8).max(25).required(),
});

export const categorySchema = Joi.object({
	name: Joi.string().required(),
	desc: Joi.string().required(),
});

export const AllSchema = {
	params: Joi.object({
		id: Joi.string()
			.regex(/^[0-9a-fA-F]{24}$/)
			.required(),
	}),
	image: Joi.object({
		name: Joi.string().required(),
	}),
};
