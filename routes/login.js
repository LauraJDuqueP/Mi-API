const express = require('express');
const router = express.Router();
const Login = require('../servicios/login');
const validator = require('../Middleware/validarShemas');
const { createUSer } = require('../esquemas/shemas');

const service = new Login();

// ruta  http://localhost:3000/movies/v1/login

// este post recibe el usuario y la contraseña
router.post('/', validator(createUSer, 'body'), async (req, res, next) => {
  try {
    const body = req.body;
    if (body) {
      const result = await service.create(body);
      res.status(200).json({
        message: 'LOGIN',
        data: result,
      });
    }
  } catch (error) {
    // res.status(404).json({
    //   message: error.message,
    // });
    next(error);
  }
});

module.exports = router;
