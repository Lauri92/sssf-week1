'use strict';
import express from 'express';
import catRoute from './routes/catRoute.js';
import userRoute from './routes/userRoute.js';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const port = 3000;

app.use('/cat', catRoute);
app.use('/user', userRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
