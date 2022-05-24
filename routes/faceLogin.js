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

router.post('/', async (req, res, next) => {
  try {
    const body = req.body;
    const result = await service.create(body);
    res.status(200).json({
      message: `Login con Facebook`,
      data: result,
    });
  } catch (error) {
    // res.status(404).json({
    //   message: error.message,
    // });
    next(error);
  }
});

module.exports = router;
