const dataUser = require('../DataBase/dataUser');

class register {
  create({ user, password }) {
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
