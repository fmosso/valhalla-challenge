Aplicación que implementa el desafío valhalla 

Esta aplicación es una Api rest, construida usando express con typescript, axios para las consultas http , incluye pruebas unitarias hechas con jest, y logging utilizando ls librerias winston y morgan. Ademas, dentro del archivo .env se definen variables de entorno publicas, tales como nivel de logging, y ruta de la api. La variable de entorno correspondiente a la API KEY se define de forma local y esta no es versionada.

Se sigue una arquitectura por capas, donde estas están agrupadas por componentes. Las capas que se utilizan son:
- domain: Define las interfaces que va a utilizar la componente.
- model: Se encarga de obtener data de fuentes externas, ya sea de APIs (como en este caso) o de bases de datos.
- service: Maneja y trabaja la data obtenida en la capa de modelo.
- controller: define la lógica de respuestas HTTP, los status y el cuerpo de la respuesta. 
- router: Organiza los endpoints.

Para este proyecto se definen 2 componentes: 
- imdb: todo lo relacionado con la comunicacion con la api imdb
- productions: todo lo relacionado con las producciones

Se sigue una arquitectura rest, donde cada endpoint corresponde a un recurso, pieza disponibiliza 2 endpoints:
- `get producciones/vikingos` obtiene data de todas las producciones (peliculas, y capitulos de serie) que contengan 'viking'
- `get producciones/hacha` obtiene data de todas las producciones (peliculas, y capitulos de serie) que contengan 'axe'

Para levantar la aplicacion:
- Tener instalado node 
- Ejecutar comando `npm i` para descargar las dependencias
- Definir la variable de entorno IMDB_API_KEY
- Ejecutar comando `npm start`

La aplicacion se levanta en el puerto 3000, por lo tanto la ruta completa sería:

`get localhost:3000/producciones/vikingos`

Para ejecutar los tests:
- Tener instalado node 
- Ejecutar comando `npm test`

Tambien se incluye un archivo Dockerfile, para generar una imagen docker de la aplicaccion hay que ejecutar el script `npm run docker`

Limitantes de la solucion: La solucion no escala, ya que se realizan n+1 llamados a la API, se llama para obtener las peliculas y capitulos de serie, y por cada uno de estos, se realiza un llamado. Una posible solución seria guardar en un cache los resultados.