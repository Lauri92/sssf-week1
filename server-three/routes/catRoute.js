'use strict';

import {Router} from 'express';

const router = Router();

router.route('/').
    get((req, res) => {
      res.send('Cat get test from router');
    }).
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
    get((req, res) => {
      res.send(`You requested cat with id: ${req.params.id}`);
    });

export default router;
