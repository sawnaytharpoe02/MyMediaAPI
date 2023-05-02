const saveImage = (req, res, next) => {
	const file = req.files.img;
	const filename = new Date().valueOf() + '_' + file.name;
	file.mv(`./uploads/${filename}`);
	req.body['image'] = filename;
	next();
};

const saveMultiImage = (req, res, next) => {
	const files = req.files.img;
	let filenames = [];
	files.forEach((file) => {
		const filename = new Date().valueOf() + '_' + file.name;
		file.mv(`./uploads/${filename}`);
		filenames.push(filename);
	});

	req.body['images'] = filenames.join(',');
	next();
};

export { saveImage, saveMultiImage };
