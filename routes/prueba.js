const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  //con esto defino ruta para utilizar mi aplicacion
  res.send('Hola Mi API :) ');
});

module.exports = router;
