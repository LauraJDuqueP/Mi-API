const express = require('express');
const router = express.Router();
const TweetLogin = require('../servicios/tweetLogin');
const validator = require('../Middleware/validarShemas');
const { createUSer } = require('../esquemas/shemas');

const service = new TweetLogin();

// ruta http://localhost:3000/movies/v1/loginTweet

router.post('/', validator(createUSer, 'body'), async (req, res, next) => {
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
