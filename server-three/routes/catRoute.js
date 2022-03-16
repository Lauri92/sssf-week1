'use strict';

import {Router} from 'express';
import {cat_list_get, cat_get, cat_post} from '../controllers/catController.js';
import multer from 'multer';

const router = Router();

router.route('/').
    get(cat_list_get).
    post(multer({
      dest: './uploads',
    }).single('cat'), cat_post).
    put((req, res) => {
      res.send('Cat put test');
    }).
    delete((req, res) => {
      res.send('Cat delete test');
    });

router.route('/:id').
    get(cat_get);

export default router;
