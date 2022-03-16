'use strict';

import cats from '../models/catModel.js';

export const cat_list_get = async (req, res) => {
  res.json(cats);
};

export const cat_get = async (req, res) => {
  const chosenCat = cats.filter(cat => {
    return req.params.id === cat.id;
  });
  res.send(chosenCat);
};