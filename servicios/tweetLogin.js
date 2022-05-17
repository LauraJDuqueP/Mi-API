const dataUser = require('../DataBase/dataUser');

class TweetLogin {
  create({ user, password }) {
    const result = dataUser.find((u) => u.user === user);
    if (result) {
      if (result.password === password) {
        return result;
      } else {
        return `La contraseña es incorrecta`;
      }
    } else {
      return `El usuario es incorrecto o no existe`;
    }
  }
}

module.exports = TweetLogin;
