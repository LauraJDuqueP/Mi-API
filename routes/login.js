const express = require('express');
const router = express.Router();

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
  if (body.user && body.password) {
    res.json({
      nombre: `Hola ${body.user} este es un nuevo usuario`,
      message: 'new user, Hellowwwww!!!! ',
      data: body,
    });
  } else {
    res
      .status(404)
      .send(`No has escrito correctamente el usuario y la contraseña`);
  }
});

module.exports = router;
