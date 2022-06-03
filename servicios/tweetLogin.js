const dataUser = require('../DataBase/dataUser');
const boom = require('@hapi/boom');

class TweetLogin {
  async create({ user, password }) {
    if (!user || !password) {
      throw boom.badData(`No has escrito correctamente los datos`);
      // new Error(`No has escrito correctamente los datos`);
    }
    const result = dataUser.find((u) => u.user === user);
    if (result) {
      if (result.password === password) {
        return `Te logiaste correctamente con Tweeter`;
      } else {
        return `La contraseña es incorrecta`;
      }
    } else {
      return `El usuario es incorrecto o no existe`;
    }
  }
}

module.exports = TweetLogin;
