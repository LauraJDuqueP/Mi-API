const movieMocks = require('../DataBase/movieMocks');
const boom = require('@hapi/boom');

class MoviesHome {
  constructor() {
    this.movies = movieMocks;
  }

  async getMovies() {
    return this.movies;
  }
  async create() {}

  async search(search) {
    const result = this.movies.find((peli) => peli.title === search);
    if (!result) {
      throw boom.notFound(
        `El nombre de la pelicula no se encuentra porque no es valido.`
      );
      // new Error(`El mombre de la pelicula no es valido`);
    }
    if (result) {
      return result;
    }
  }

  async searchById(id) {
    const see = this.movies.find((idmovie) => idmovie.id === id);
    if (!see) {
      throw boom.notFound(
        `El id ingresado no se encuentra porque no es valido`
      );
      // new Error(`el Id ingresado no es valido`);
    }
    if (see) {
      return see;
    }
  }
}

module.exports = MoviesHome;
