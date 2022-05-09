const express = require('express');
// const { send } = require('express/lib/response');
// const res = require('express/lib/response');
const router = express.Router();
// ruta ... http://localhost:3000/movies/v1/loginFacebook

/// esto es solo para ver que la ruta funcione
router.get('/', (req, res) => {
  res.stantus(201).send(`
  Aquí va un bonito login de face.....
  <
  < 
  recordar que aquí va un post. 
  `);
});

router.post('/', (req, res) => {
  const user = req.body;
  if (user.name && user.password) {
    res.status(200).json({
      message: `Hola ${user.name} ha ingresado con su usuario de facebook :)`,
      data: user,
    });
  } else {
    res.status(404).send(`No se a logeado correctamente el usuario`);
  }
});

module.exports = router;
