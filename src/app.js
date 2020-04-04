import express from 'express';
import sanitizer from 'express-sanitizer';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(sanitizer());

app.get('/', (req, res) => res.json({ hello: 'world' }));

export default app;
