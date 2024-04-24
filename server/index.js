import { createRequire } from "module";
const require = createRequire(import.meta.url);

require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const mongoString = process.env.VITE_DB_URI;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error);
});

database.once('connected', () => {
    console.log('Database connected');
});

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log('Server started at port 3000');
});

import router from './routes/routes.js';
app.use('/api', router);