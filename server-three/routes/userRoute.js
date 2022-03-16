'use strict';

import {Router} from 'express';

import {user_get, user_list_get} from '../controllers/userController.js';

const router = Router()

router.route('/').
    get(user_list_get).
    post((req, res) => {
      res.send('User post test');
    }).
    put((req, res) => {
      res.send('User put test');
    }).
    delete((req, res) => {
      res.send('User delete test');
    });

router.route('/:id').
    get(user_get);

export default router