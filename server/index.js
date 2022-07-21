import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import dotenv from 'dotenv';

import Routes from './routes/route.js';
import Connection from './database/db.js';


const app = express();
dotenv.config();
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;


const PORT = 8000;

Connection();




app.use('/', Routes);

app.listen(PORT, () => 
    console.log(`Server running on PORT ${PORT} `)
);