import * as mysql from 'mysql2';

const dotenv = require('dotenv').config();
const { DB_HOST, DB_USER, DB_PASS } = process.env;

export const db = mysql.createPool({
	host: DB_HOST,
	user: DB_USER,
	password: DB_PASS,
	database: 'wisecrypto',
	connectionLimit: 3,
});

db.getConnection((error, connection) => {
	if (error) console.error(error);

	console.log(`Successfully Connecting!`);
});
