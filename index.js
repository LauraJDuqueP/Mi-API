const routerApi = require('./routes/index.js');
const express = require('express'); //requerimos a express para crear nuestro pirmer servidor
const app = express(); // aqui creo mi aplicacion
const port = process.env.PORT || 3000; // declaro donde quiero que corra mi aplicaicon
const cors = require('cors');
const {
  allErrors,
  errorHandler,
  boomError,
} = require('./Middleware/errorHandlers');

app.use(express.json());
app.use(
  cors({
    origin: '*',
  })
);

routerApi(app);

app.use(allErrors);
app.use(boomError);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Mi API se escucha por aqui ' + port);
});

// * el detalle de la pelicula esto es otro endpoit una funcionalidad de film donde pueda verse por el una card en especifico (ID)... aqui
// tambien va el detalle del marcado
//el desmarcado y marcado de favoritos es un endpoint aparte que debo investigarsh

// endpoint de su usuario y su detalle con susu favoritos

// https://miapi-movies.herokuapp.com/    deploy en heroku
// https://miapi-movies.herokuapp.com/movies/v1  // deploy con ruta de mi api
