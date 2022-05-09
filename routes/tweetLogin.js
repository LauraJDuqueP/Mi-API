const express = require('express');
const router = express.Router();

// ruta http://localhost:3000/movies/v1/loginTweet

router.get('/', (req, res) => {
  res.send(`Aquí lo que va es el login con acceso por tweeter  jijij :) `);
});

router.post('/', (req, res) => {
  const user = req.body;
  if (user.name && user.password) {
    res.status(200).json({
      message: `Hola ${user.name} ha ingresado con su usuario de tweeter :)`,
      data: user,
    });
  } else {
    res.status(404).send(`No se a logeado correctamente el usuario`);
  }
});

module.exports = router;
