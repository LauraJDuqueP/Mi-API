const express = require('express');
const pruebaRouter = require('./prueba.js');
const moviesHomeRouter = require('./moviesHome');
const loginRouter = require('./login');
const faceLoginRouter = require('./faceLogin');
const tweetLogin = require('./tweetLogin');

const router = express.Router();

function routerApi(app) {
  app.use('/movies/v1', router);
  router.use('/', pruebaRouter);
  router.use('/moviesHome', moviesHomeRouter);
  router.use('/login', loginRouter);
  router.use('/loginFacebook', faceLoginRouter);
  router.use('/loginTweet', tweetLogin);
}

module.exports = routerApi;

// * el detalle de la pelicula esto es otro endpoit una funcionalidad de film donde pueda verse por el una card en especifico (ID)... aqui
// tambien va el detalle del marcado
//el desmarcado y marcado de favoritos es un endpoint aparte que debo investigarsh

// endpoint de su usuario y su detalle con susu favoritos
