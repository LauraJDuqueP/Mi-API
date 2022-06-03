const express = require('express');
const router = express.Router();
const register = require('../servicios/register');
const validator = require('../Middleware/validarShemas');
const { createUSer } = require('../esquemas/shemas');

// http://localhost:3000/movies/v1/register

const service = new register();

router.post('/', validator(createUSer, 'body'), async (req, res, next) => {
  try {
    const body = req.body;
    if (body) {
      const result = await service.create(body);
      res.status(200).json({
        message: 'El usuario es:',
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
