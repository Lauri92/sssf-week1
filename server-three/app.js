'use strict';
import express from 'express';
import cats from './models/catModel.js';
import catRoute from './routes/catRoute.js';

const app = express();
const port = 3000;
/*
app.get('/cat', (req, res) => {
  res.send('From this endpoint you can get cats.');
});

app.post('/cat', (req, res) => {
  res.send('With this endpoint you can add cats');
});

app.put('/cat', (req, res) => {
  res.send('With this endpoint you can edit cats');
});

app.delete('/cat', (req, res) => {
  res.send('With this endpoint you can delete cats');
});
*/

/*
app.get('/cat/:id', (req, res) => {
  res.send(`You requested cat with id: ${req.params.id}`);
});

 */

app.use('/cat', catRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
