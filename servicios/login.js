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
        throw boom.badRequest(`the password is incorrecta`);
      }
    } else {
      throw boom.badRequest(`the user is incorrect or does not exist`);
    }
  }
}

module.exports = Login;
