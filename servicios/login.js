const dataUser = require('../DataBase/dataUser');
const boom = require('@hapi/boom');

class Login {
  async create({ user, password }) {
    if (!user && !password) {
      throw boom.badData(`No has escrito correctamente los datos`);
      //  new Error(`No has escrito correctamente los datos`);
    }
    const result = dataUser.find((u) => u.user === user);
    if (result) {
      if (result.password === password) {
        const u = {};
        u.name = result.user;
        return u;
      } else {
        return `La contraseña es incorrecta`;
      }
    } else {
      return `El usuario es incorrecto o no existe`;
    }
  }
}

module.exports = Login;
