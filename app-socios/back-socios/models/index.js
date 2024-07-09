// Se crea un objeto "models" para contener todos los modelos de la aplicación
// Esto permite una facil importación y gestión de modelos dentro de la aplicacion.
const models = {
    // Cada propiedad del objeto representa un modelo especifico de la base de datos.
    // Esto indica que el modelo "comercio" se define y exporta en ese archivo,
    // permitiendo su uso para interactuar con la colección de comercios en la base de datos.
    asociacionModel: require('./nosql/asociacion'),
    socioModel: require("./nosql/socios")
}

// Finalmente, se exporta el objeto "models".
module.exports = models