Título: Mi API Ghibli-Movies

https://studio-ghibli-seven.vercel.app/ Despliegue de la app

Project description:

Mi API Ghibli.Movies es una aplicación movile que, al momento, permite ver e interactuar con la información de 22 películas de anime.

En la aplicación se encuentra un Home desde el cual se puede:
Scrollear y ver un pequeño detalle de cada una de las películas.
Logearse con un usuario de ejemplo.
Ordenas las películas por año, duración, nombre y score.

Después de logeados la aplicación permite ver un home con un card por película más detallado y con más funcionalidades. Desde aquí se puede acceder a cualquier película y a la información que ofrece Ghibli wiki.

Las tecnologías usadas en backend para la aplicación son:
Node.js  
Porque puede ejecutarse en una gran variedad de servidores como Windows, Mac, Linux …etc.
Porque su parecido con JavaScript hace que este lenguaje sea más fácil de aprender.  
Porque permite crear aplicaciones altamente escalables.
Porque la transferencia de datos entre el servidor y el cliente es más rápida ya que ambos desarrollan con JS, reduciendo así el tiempo de trabajo.

Heroku
Porque ofrece una opción gratuita suficiente para alojar una aplicación pequeña.
Porque es una tecnología rápida donde las aplicaciones se ejecutan rápidamente.
Porque la documentación de Heroku es buena, lo cual ayuda a resolver los problemas de manera rápida y fácil.
Porque es multiplataforma.

Las librerías usadas por parte del backend para el desarrollo fueron:
Joi
Porque es una herramienta muy útil porque ayuda a validar los esquemas. Además es bastante fácil de entender e implementar.

Boom
Porque nos permite manejar los errores de una manera más comprensible y es visualmente mucho más entendible.

Otra de las herramientas usadas es:

Nodemon
Es una herramienta muy versátil ya que nos permite ver cómo los cambios que vamos haciendo se van implementando en tiempo real.

Esta es la primera api que construyó. Aprender a construirla, familiarizarme con las herramientas utilizadas y mantener los niveles de frustración en un nivel saludable fueron los retos (a mi consideración) más importantes que logre sobrepasar.

Las características que espero implementar en un futuro, por las que seguiré aprendiendo y trabajando en pro de hacerla más completa son:
conectarla a una base de datos postgres.
hacer un registro y un login completo, que cuente con login por facebook y por usuario.
implementar un sistema de calificaciones por película para que los usuarios puedan interactuar con la api.
implementar un sistema donde los usuarios puedan marcar sus películas favoritas.
hacer las autenticaciones por parte del backend para los login.
poder realizar tests adecuados para el correcto funcionamiento de la API.

Cómo instalar el proyecto.

La parte del backend del proyecto está en el siguiente repositorio:

https://github.com/LauraJDuqueP/Mi-API

Para poder acceder y trabajar en el debes:
Copiar el link del repo que aparece en el botón verde “code”.
una vez copiado vas al lugar (carpeta) donde quieras guardar este archivo, das clic derecho y abres la terminal, allí colocas
git clone y pegas el link que has copiado.
esperas que cargue y se muestre el proyecto.
una vez entres a tu proyecto vas a la terminal de este y lo inicializas con
git install
esto instalará las dependencias que necesite el proyecto y lo levantara.
y para cuando quieras correrlo
npm run dev

La parte del frontend del proyecto está en el siguiente repositorio:

https://github.com/jose-garzon/studio_ghibli

Para poder acceder:
Copiar el link del repo que aparece en el botón verde “code”.
una vez copiado vas al lugar (carpeta) donde quieras guardar este archivo, das clic derecho y abres la terminal, allí colocas
git clone y pegas el link que has copiado.
esperas que cargue y se muestre el proyecto.
una vez entres a tu proyecto vas a la terminal de este y lo inicializas con
git install
esto instalará las dependencias que necesite el proyecto y lo levantara.
y para cuando quieras correrlo
npm run dev

¿Cómo usar la app?

La app es fácil de entender y usar.
Iniciando pueden ir scrolleando y viendo las películas que tiene. Ya para ver una película con un detalle más específico deben loguearse. Como al momento no se pueden registrar nuevos usuario, pueden utilizar para vivir la experiencia los siguientes:
user: Laura – Password: 123
user: Jose – Password: 456
user: Paula – Password: 789
user: Melissa – Password: 101

Créditos

Este proyecto tuvo como líder y maestra a Alex Camacho, mi student team lead, quien tuvo toda la disposición y paciencia en la construcción del proyecto.  
y como coequipero a José David Garzon quien construyó y levantó el lado del cliente.

Todos mis agradecimientos a ellos.
