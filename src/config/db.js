import mongoose from 'mongoose';

const databaseConnection = async () => {
	try {
		await mongoose.connect(process.env.DB_URI);
		console.log('connected to database');
	} catch (err) {
		console.log(err, 'could not connect to the database');
	}
};

export { databaseConnection as connection };
