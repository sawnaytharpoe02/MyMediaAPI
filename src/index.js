import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import { connection } from './config/db.js';
import { errorHandler, routeNotFoundHandler } from './middlewares/error.js';
import { categoryRoute } from './routes/category.route.js';
import { userRoute } from './routes/user.route.js';
import { postRoute } from './routes/post.route.js';
import fileUpload from 'express-fileupload';
import { saveImage, saveMultiImage } from './middlewares/upload.js';

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

app.post('/upload', saveImage, (req, res) => {
	res.send({ msg: 'success', filename: req.body.image });
});

app.use('/api/categories', categoryRoute);
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);

app.use(routeNotFoundHandler);
app.use(errorHandler);

const port = process.env.PORT;
connection().then(() => {
	app.listen(port, () => {
		console.log(`Server is running at http://localhost:${port}`);
	});
});
