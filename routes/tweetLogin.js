const express = require('express');
const router = express.Router();
const TweetLogin = require('../servicios/tweetLogin');

const service = new TweetLogin();

// ruta http://localhost:3000/movies/v1/loginTweet

router.get('/', (req, res) => {
  res.send(`Aquí lo que va es el login con acceso por tweeter  jijij :) `);
});

router.post('/', async (req, res, next) => {
  try {
    const body = req.body;
    if (body) {
      const result = await service.create(body);
      res.status(200).json({
        message: `Login por Tweeter`,
        data: result,
      });
    }
  } catch (error) {
    // res.status(400).json({
    //   message: error.message,
    // });
    next(error);
  }
});

module.exports = router;
