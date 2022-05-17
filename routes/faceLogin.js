const express = require('express');
const router = express.Router();
// ruta ... http://localhost:3000/movies/v1/loginFacebook
const FaceLogin = require('../servicios/faceLogin');

const service = new FaceLogin();
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
  const body = req.body;
  if (body) {
    const result = service.create(body);
    res.status(200).json({
      message: `Login con Facebook`,
      data: result,
    });
  } else {
    res.status(404).send(`No se a logeado correctamente el usuario`);
  }
});

module.exports = router;
