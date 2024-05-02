import express, { Request, Response } from 'express';
import session from 'express-session';
import cors from 'cors';
import mysql from 'mysql';
import loginRouter from './routes/users/loginRouter';
import registerRouter from './routes/users/registerRouter';

const dotenv = require('dotenv').config();
const { SESSION_SECRET, DB_HOST, DB_USER, DB_PASS, CLIENT_ORIGIN } =
	process.env;
const app = express();
const port = 3001;
const connection = mysql.createConnection({
	host: DB_HOST,
	user: DB_USER,
	password: DB_PASS,
	database: 'wisecrypto',
});

connection.connect();

connection.query('SELECT * FROM User', (error, rows, fields) => {
	if (error) throw error;

	console.log(rows);
});

connection.end();

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
