import express, { Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import loginRouter from './routes/user/loginRouter';
import registerRouter from './routes/user/registerRouter';
import marketDetailRouter from './routes/market/marketDetailRouter';

const dotenv = require('dotenv').config();
const app = express();
const port = 3001;
const corsOptions = {
	origin: process.env.CLIENT_ORIGIN,
	credentials: true,
	methods: ['GET', 'HEAD', 'PUT', 'POST', 'PATCH', 'OPTIONS', 'DELETE'],
};
const userDetailRouter = require('./routes/user/userDetailRouter');

app.get('/', (request: Request, response: Response) => {
	response.send('Hello World');
});
app.listen(port, () => {
	console.log(`Server Port is ${port}`);
});

app.use(cookieParser());
app.use(cors(corsOptions));
app.use(express.json({ strict: false }));
app.use(express.urlencoded({ extended: false }));

app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/accounts', userDetailRouter);
app.use('/accounts/edit', userDetailRouter);
app.use('/market', marketDetailRouter);
app.use('/test', (request: Request, response: Response) => {
	response.send('Success connection server!');
});
