'use strict';

import express from 'express';

const app = express();

app.get('/catinfo', (req, res) => {
  const cat = {
    name: 'Frank',
    birthdate: '2010-12-25',
    weight: 5,
  };
  res.json(cat);
});

app.listen(3000, () => console.log(`listening on 3000`));
