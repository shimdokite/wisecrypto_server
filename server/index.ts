import express, { Request, Response } from 'express';
import session from 'express-session';
import cors from 'cors';

import { cert, initializeApp, ServiceAccount } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import serviceAccout from '../server/wisecrypto-50038-firebase-adminsdk-wclqn-073ed91895.json';

import loginRouter from './routes/users/loginRouter';

import registerRouter from './routes/users/registerRouter';

//! firebase 설정이 express 서버 보다 먼저 와야한다.
initializeApp({ credential: cert(serviceAccout as ServiceAccount) });

export const db = getFirestore();

const dotenv = require('dotenv').config();

const app = express();

const port = 3001;

const { SESSION_SECRET } = process.env;

app.get('/', (request: Request, response: Response) => {
	response.send('Hello World');
});

app.listen(port, () => {
	console.log(`Server Port is ${port}`);
});

const corsOptions = {
	origin: 'http://localhost:3000',
	credentials: true,
	methods: ['GET', 'POST', 'OPTIONS'],
};

app.use(cors(corsOptions));
app.use(express.json({ strict: false }));
app.use(express.urlencoded({ extended: false }));

app.use(
	session({
		secret: SESSION_SECRET || '',
		resave: false,
		saveUninitialized: false,
		cookie: {
			domain: 'localhost',
			path: '/',
			httpOnly: true,
			secure: false,
		},
	})
);

app.use('/login', loginRouter);
app.use('/register', registerRouter);
