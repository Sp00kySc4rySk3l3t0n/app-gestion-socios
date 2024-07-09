const mongoose = require("mongoose");

const SocioScheme = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true,
        },
        apellidos: {
            type: String,
            required: true,
        },
        telefono: {
            type: String,
            required: true,
        },
        direccion: {
            type: String,
            required: true,
        },
        foto: {
            type: String, // URL de la foto
        },
        asociacion: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "associations",
            required: true,
        }
    },
    {
        timestamps: true, // createdAt, updatedAt
        versionKey: false,
    }
);

module.exports = mongoose.model("socios", SocioScheme); // “socios” es el nombre de la colección en mongoDB
