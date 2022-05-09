const movieMocks = require('../DataBase/movieMocks');
const express = require('express');
const router = express.Router();

// ruta http://localhost:3000/movies/v1/moviesHome

// /moviesHome

router.get('/', (req, res) => {
  // Esta es mi base de datos, vista como un json
  // aqui deberia ver movies ....
  // vere las cards de las peliculas con inf que obtendra de la basde de datos

  // *tiene un criterio de busqueda (search) aqui lo hago yo

  // http://localhost:3000/movies/v1/moviesHome?search=
  const search = req.query.search;

  if (search) {
    const result = movieMocks.find((peli) => peli.title === search);
    if (result) {
      res.status(200).json({
        message: 'la informacion de la pelicula que elegiste es ',
        data: result,
      });
    } else {
      +res.status(404).send(`El mombre de la pelicula no es valido`);
    }
  } else {
    res.status(200).send(movieMocks);
    // vere las cards de las peliculas con inf que obtendra de la basde de datos
  }
});

// http://localhost:3000/movies/v1/moviesHome/2baf70d1-42bb-4437-b551-e5fed5a87abe  ejemplo
router.get('/:id', (req, res) => {
  const id = req.params.id;
  if (id) {
    const see = movieMocks.find((idmovie) => idmovie.id === id);
    if (see) {
      res.status(200).json({
        message: `Hola este id es de la pelicula ${movieMocks.title} :)`,
        data: see,

        // vere las cards de las peliculas con inf que obtendra de la basde de datos
      });
    } else {
      res.send('El id de la pelicula es erroneo');
    }
  } else {
    // res.status(200).send(movieMocks);
    res.send('no va');
  }
});

module.exports = router;
