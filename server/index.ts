import express, { Request, Response } from 'express';

const app = express();

const port = 3001;

app.get('/', (request: Request, response: Response) => {
	response.send('Hello World');
});

app.listen(port, () => {
	console.log(`Server Port is ${port}`);
});
