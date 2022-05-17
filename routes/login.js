const express = require('express');
const router = express.Router();
const Login = require('../servicios/login');

const service = new Login();

// ruta  http://localhost:3000/movies/v1/login

// este es el login solito, el .get solo es para ver si sirve la ruta
router.get('/', (req, res) => {
  res.send(`
  Aqui va un super Login  .   .   !!
                            y     !!
  `);
});

// este post recibe el usuario y la contraseña
router.post('/', (req, res) => {
  const body = req.body;
  if (body) {
    const result = service.create(body);
    res.status(200).json({
      message: 'LOGIN',
      data: result,
    });
  } else {
    res.status(404).send(`No has escrito correctamente los datos`);
  }
});

module.exports = router;
