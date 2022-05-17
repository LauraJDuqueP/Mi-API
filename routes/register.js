const express = require('express');
const router = express.Router();
const register = require('../servicios/register');

// http://localhost:3000/movies/v1/register

const service = new register();

router.post('/', (req, res) => {
  const body = req.body;
  if (body) {
    const result = service.create(body);
    res.status(200).json({
      message: 'El usuario que creaste es',
      data: result,
    });
  } else {
    res.status(400).json({
      message: `El usuario o la contraseña son invalidos`,
      data: body,
    });
  }
});

module.exports = router;
