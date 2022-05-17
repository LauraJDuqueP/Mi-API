const express = require('express');
const router = express.Router();
const TweetLogin = require('../servicios/tweetLogin');

const service = new TweetLogin();

// ruta http://localhost:3000/movies/v1/loginTweet

router.get('/', (req, res) => {
  res.send(`Aquí lo que va es el login con acceso por tweeter  jijij :) `);
});

router.post('/', (req, res) => {
  const body = req.body;
  if (body) {
    const result = service.create(body);
    res.status(200).json({
      message: `Login por Tweeter`,
      data: result,
    });
  } else {
    res.status(404).send(`No se a logeado correctamente el usuario`);
  }
});

module.exports = router;
