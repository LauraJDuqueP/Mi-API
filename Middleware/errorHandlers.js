// esta funcion captura cualquier error
function allErrors(err, req, res, next) {
  console.error(err);
  next(err);
}

// Esta funcion detecta un error pero crea un formato que se pueda devolver al cliente

function boomError(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  } else {
    next(err);
  }
}

function errorHandler(err, req, res, next) {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

module.exports = { allErrors, errorHandler, boomError };
