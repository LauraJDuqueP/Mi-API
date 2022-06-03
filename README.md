# Mi-API

Crearemos una API usando Node.js, REST y Express.js. La desplegaremos en Heroku. La API es para mostrar un listado de peliculas y poder interactuar con este listado.

1. Se crea el package.json con npm init
2. Se inicializa el proyecto con git init
3. Se configura el .gitignore - el .editorconfig - el .eslintrc.json y se configuro el package.json
4. instalamos las dependencias a usar (nodemon, eslint, prettier).
5. instalamos Express como una dependencia de produccion.
6. doy los permisos de CORS he instalo las dependencias con npm i cors para que se puedan levantar
7. cree una base de datos mockeada
8. cree la carpeta routers para organizar todos los endpoints
9. estructure los endponits

acontinunacion las rutas.

- Login: http://localhost:3000/movies/v1/login
- Login por facebook: http://localhost:3000/movies/v1/loginFacebook
- Login por tweeter: http://localhost:3000/movies/v1/loginTweet
- Landing page: http://localhost:3000/movies/v1/moviesHome
- Busqueda por nombre: http://localhost:3000/movies/v1/moviesHome?search=
- Busuqeda por id: http://localhost:3000/movies/v1/moviesHome/:id
- Card Movie: http://localhost:3000/movies/v1/moviesHome
- Id de prueba: http://localhost:3000/movies/v1/

* registro ??
* filter y ordenamiento ??

Despliegue en heroku

https://miapi-movies.herokuapp.com/ deploy en heroku
https://miapi-movies.herokuapp.com/movies/v1 // deploy con ruta de mi api

- cree la logica de la ruta y los servicios: para hacer control de los errores y mantener un buen status code:
  voy a utilizar boom.
  Para esto instalare la libreria boom.
