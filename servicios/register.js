const dataUser = require('../DataBase/dataUser');
const boom = require('@hapi/boom');

class register {
  async create({ user, password }) {
    if (!user || !password) {
      throw boom.badData(`No has escrito correctamente los datos`);
      // new Error(`No has escrito correctamente los datos`);
    }
    const result = dataUser.find((u) => u.user === user);
    if (result) {
      return `Este usuario ya existe`;
    } else {
      dataUser.push({ user, password });
      return { user, password };
    }
  }
}

module.exports = register;
