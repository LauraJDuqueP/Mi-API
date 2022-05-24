const dataUser = require('../DataBase/dataUser');

class FaceLogin {
  async create({ user, password }) {
    if (!user || !password) {
      throw new Error(`No has escrito correctamente los datos`);
    }
    const result = dataUser.find((u) => u.user === user);
    if (result) {
      if (result.password === password) {
        return `Te logiaste correctamente con Facebook`;
      } else {
        return `La contraseña es incorrecta`;
      }
    } else {
      return 'El usuario es incorrecto o no existe';
    }
  }
}

module.exports = FaceLogin;
