const express = require('express');
const router = express.Router();
const MoviesHome = require('../servicios/moviesHome');
const validator = require('../Middleware/validarShemas');
const { searchMovie } = require('../esquemas/shemas');

// ruta http://localhost:3000/movies/v1/moviesHome

// http://localhost:3000/movies/v1/moviesHome?search=

// http://localhost:3000/movies/v1/moviesHome/2baf70d1-42bb-4437-b551-e5fed5a87abe

// /moviesHome

const service = new MoviesHome();

router.get('/', validator(searchMovie, 'search'), async (req, res, next) => {
  // aqui deberia ver movies ....
  try {
    const search = req.query.search;

    if (search) {
      const result = await service.search(search);
      res.status(200).json({
        message: 'la informacion de la pelicula que elegiste es ',
        data: result,
      });
    } else {
      const movilist = await service.getMovies();
      res.status(200).json({
        message: 'Esta es mi banco de peliculas',
        data: movilist,
        // vere las cards de las peliculas con inf que obtendra de la basde de datos
      });
    }
  } catch (error) {
    // res.status(404).json({
    //   message: error.message,
    // });
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    if (id) {
      const see = await service.searchById(id);
      res.status(200).json({
        message: `Hola este id es de la pelicula ${see.id} y su nombre es ${see.title} :)`,
        data: see,
        // vere las cards de las peliculas con inf que obtendra de la basde de datos
      });
    } else {
      const movilist = await service.getMovies();
      res.status(200).json({
        message: 'Esta es mi banco de peliculas',
        data: movilist,
      });
    }
  } catch (error) {
    // res.status(404).json({
    //   message: error.message,
    // });
    next(error);
  }
});

module.exports = router;
