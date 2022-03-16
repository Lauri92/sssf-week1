'use strict';

import {Router} from 'express';
import {cat_list_get, cat_get} from '../controllers/catController.js';

const router = Router();

router.route('/').
    get(cat_list_get).
    post((req, res) => {
      res.send('Cat post test');
    }).
    put((req, res) => {
      res.send('Cat put test');
    }).
    delete((req, res) => {
      res.send('Cat delete test');
    });

router.route('/:id').
    get(cat_get);

export default router;
