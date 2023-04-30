import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import { userRoute } from './routes/userRoute.js';
import { categoryRoute } from './routes/categoryRoute.js';
import { connection } from './config/db.js';
import { errorHandler, routeNotFoundHandler } from './middlewares/error.js';

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/categories', categoryRoute);
app.use('/api/users', userRoute);

app.use(routeNotFoundHandler);
app.use(errorHandler);

const port = process.env.PORT;
connection().then(() => {
	app.listen(port, () => {
		console.log(`Server is running at http://localhost:${port}`);
	});
});
