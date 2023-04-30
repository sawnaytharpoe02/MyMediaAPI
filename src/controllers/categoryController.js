import {
	findAllCategoriesService,
	createCategoryService,
	findCategoryService,
	updateCategoryService,
	deleteCategoryService,
} from '../services/categoryService.js';

import formatMessage from '../utils/format.js';
import { HTTP_STATUS_CODES } from '../utils/interface.js';

const findAllCategories = async (req, res, next) => {
	try {
		const cats = await findAllCategoriesService();
		formatMessage(
			res,
			HTTP_STATUS_CODES.OK,
			'retrieve categories successfully',
			cats
		);
	} catch (err) {
		next(new Error(`Failed to retrieve categories: ${err}`));
	}
};

const createCategory = async (req, res, next) => {
	try {
		const cat = await createCategoryService(req.body);
		formatMessage(
			res,
			HTTP_STATUS_CODES.CREATED,
			'created category successfully',
			cat
		);
	} catch (err) {
		next(new Error(`Failed to create category: ${err}`));
	}
};

const findCategory = async (req, res, next) => {
	try {
		const cat = await findCategoryService(req.params.id);
		formatMessage(
			res,
			HTTP_STATUS_CODES.OK,
			`retrieve category id ${cat._id}`,
			cat
		);
	} catch (err) {
		next(new Error(`Failed to retrieve category: ${err}`));
	}
};

const updateCategory = async (req, res, next) => {
	try {
		const cat = await updateCategoryService(req.body, req.params.id);
		formatMessage(
			res,
			HTTP_STATUS_CODES.OK,
			`update category id ${cat._id}`,
			cat
		);
	} catch (err) {
		next(new Error(`Failed to update category: ${err}`));
	}
};

const deleteCategory = async (req, res, next) => {
	try {
		const cat = await deleteCategoryService(req.params.id);
		formatMessage(res, HTTP_STATUS_CODES.OK, `delete category id ${cat._id}`);
	} catch (err) {
		next(new Error(`Failed to delete category: ${err}`));
	}
};

export {
	findAllCategories,
	findCategory,
	createCategory,
	updateCategory,
	deleteCategory,
};
