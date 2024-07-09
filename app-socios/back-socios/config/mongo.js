const mongoose = require('mongoose')

//Función para conectar la aplicación con la base de datos MongoDB
const dbConnect = () => {
    const db_uri = process.env.DB_URI
    
    //Esto permite usar consultas que no siguen estrictamente el esquema definido
    mongoose.set('strictQuery', false)
    //Intenta conectar la base de datos con el URI proporcionado
    try{
        mongoose.connect(db_uri)
    }catch(error){
        console.err("Error conectando a la BBDD:", error)
    }

    //Cuando se conecta a la base de datos muestra el mensaje por consola
    mongoose.connection.on("connected",() => console.log("Conectando a la BBDD"))
}

//Se exporta la función dbConnect
module.exports = dbConnect