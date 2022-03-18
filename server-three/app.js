'use strict';
import express from 'express';
import catRoute from './routes/catRoute.js';
import userRoute from './routes/userRoute.js';
import authRoute from './routes/authRoute.js';
import passport from './utils/pass.js';
import cors from 'cors';

const app = express();
app.use(passport.initialize({}));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const port = 3000;

app.use('/cat', passport.authenticate('jwt', {session: false}), catRoute);
app.use('/user', passport.authenticate('jwt', {session: false}), userRoute);
app.use('/auth', authRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
