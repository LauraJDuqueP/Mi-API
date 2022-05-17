const movieMocks = require('../DataBase/movieMocks');

class MoviesHome {
  constructor() {
    this.movies = movieMocks;
  }

  getMovies() {
    return this.movies;
  }
  create() {}

  search(search) {
    const result = this.movies.find((peli) => peli.title === search);
    if (result) {
      return result;
    } else {
      return `El mombre de la pelicula no es valido`;
      // vere las cards de las peliculas con inf que obtendra de la basde de datos
    }
  }

  searchById(id) {
    const see = this.movies.find((idmovie) => idmovie.id === id);
    if (see) {
      return see;
    } else {
      return `el Id ingresado no es valido`;
    }
  }
}

module.exports = MoviesHome;
