proyecto Backend : en este proyecto buscaremos , peliculas en Mongo, las identificaremos por su "id", y las podremos : arupar por categorias, extraer, añadir a una lista y eliminarlas de ella, ver su duracion y la imagen que le corresponda a cada una de estas peliculas.

Este proyecto nos permite, de igual manera, ver en que cines estan cada película.

Tambien he creado un registro de usuario, con el cual se identifican con su email( que tiene que ser unico no pueden haber dos iguales) y una contraseña criptada en este caso, junto a la verificacion de ambos.

Tecnologias utilizadas:
Node.js
Express.js
MongoDB y Mongoose
dotenv
nodemon
bcrypt / jsonwebtoken (para autenticación)
multer / cloudinary (para manejo de imagenes)