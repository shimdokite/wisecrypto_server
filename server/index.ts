import express, { Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import loginRouter from './routes/users/loginRouter';
import registerRouter from './routes/users/registerRouter';
import userDetailRouter from './routes/users/userDetailRouter';

const dotenv = require('dotenv').config();
const app = express();
const port = 3001;
const corsOptions = {
	origin: process.env.CLIENT_ORIGIN,
	credentials: true,
	methods: ['GET', 'POST', 'OPTIONS'],
};

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
app.use('/accounts/:id', userDetailRouter);
