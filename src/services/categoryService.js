import Cat from '../models/categoryModel.js';
import User from '../models/userModel.js';

const findAllCategoriesService = async () => {
	try {
		return await Cat.find();
	} catch (err) {
		throw new Error(err);
	}
};

const createCategoryService = async (catData) => {
	try {
		const { name, desc } = catData;
		const catName = await Cat.findOne({ name });
		if (catName) {
			throw new Error('category name already exist.');
		}

		const catDesc = await Cat.findOne({ desc });
		if (catDesc) {
			throw new Error('category description already exist.');
		}

		return await new Cat(catData).save();
	} catch (err) {
		throw new Error(err);
	}
};

const findCategoryService = async (id) => {
	try {
		return await Cat.findById(id);
	} catch (err) {
		throw new Error(err);
	}
};

const updateCategoryService = async (catData, id) => {
	try {
		const options = { new: true, upsert: true };
		return await Cat.findByIdAndUpdate(id, catData, options);
	} catch (err) {
		throw new Error(err);
	}
};

const deleteCategoryService = async (id) => {
	try {
		return await Cat.findByIdAndDelete(id);
	} catch (err) {
		throw new Error(err);
	}
};

export {
	findAllCategoriesService,
	findCategoryService,
	createCategoryService,
	updateCategoryService,
	deleteCategoryService,
};
