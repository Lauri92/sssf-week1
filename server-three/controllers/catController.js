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

export const cat_post = async (req, res) => {
  //console.log(req.data);
  console.log(req.file);
  res.send(req.file)
};
