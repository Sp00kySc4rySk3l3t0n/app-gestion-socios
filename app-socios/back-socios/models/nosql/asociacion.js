const mongoose = require("mongoose");

const AssociationScheme = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        telefono: {
            type: String,
        },
        direccion: {
            type: String,
        },
        ciudad: {
            type: String,
            default: "La Mojonera",
        },
        pais: {
            type: String,
            required: true,
        },
        fechaFundacion: {
            type: Date,
        },
        numeroMiembros: {
            type: Number,
        },
        descripcion: {
            type: String,
        },
        activo: {
            type: Boolean,
            default: true,
        },
        categorias: [String],
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            default: "association",
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = mongoose.model("associations", AssociationScheme);
