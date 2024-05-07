import express, { Request, Response } from 'express';
import cors from 'cors';

import loginRouter from './routes/users/loginRouter';
import registerRouter from './routes/users/registerRouter';

const dotenv = require('dotenv').config();
const app = express();
const port = 3001;

app.get('/', (request: Request, response: Response) => {
	response.send('Hello World');
});
app.listen(port, () => {
	console.log(`Server Port is ${port}`);
});

const corsOptions = {
	origin: process.env.CLIENT_ORIGIN,
	credentials: true,
	methods: ['GET', 'POST', 'OPTIONS'],
};

app.use(cors(corsOptions));
app.use(express.json({ strict: false }));
app.use(express.urlencoded({ extended: false }));

app.use('/login', loginRouter);
app.use('/register', registerRouter);
