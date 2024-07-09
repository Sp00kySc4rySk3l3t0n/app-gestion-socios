const { matchedData } = require("express-validator");
const { handleHttpError } = require("../utils/handleError");
const { socioModel } = require("../models");
const { asociacionModel } = require("../models");
const PDFDocument = require('pdfkit');

const createSocio = async (req, res) => {
    try {
        req = matchedData(req);
        const { asociacion, ...data } = req;
        const association = await asociacionModel.findById(asociacion);

        if (!association) {
            return handleHttpError(res, "ASSOCIATION_NOT_FOUND", 404);
        }

        const socio = new socioModel({ ...data, asociacion });
        await socio.save();

        res.status(201).json(socio);
    } catch (err) {
        console.log(err); // Agrega esta línea para registrar el error
        handleHttpError(res, "ERROR_CREATE_SOCIO");
    }
};

const updateSocio = async (req, res) => {
    try {
        const { id, ...data } = matchedData(req);
        const socio = await socioModel.findByIdAndUpdate(id, data, { new: true });

        if (!socio) {
            return handleHttpError(res, "SOCIO_NOT_FOUND", 404);
        }

        res.json(socio);
    } catch (err) {
        console.log(err); // Agrega esta línea para registrar el error
        handleHttpError(res, "ERROR_UPDATE_SOCIO");
    }
};

const deleteSocio = async (req, res) => {
    try {
        const { id } = matchedData(req);
        const socio = await socioModel.findByIdAndDelete(id);

        if (!socio) {
            return handleHttpError(res, "SOCIO_NOT_FOUND", 404);
        }

        res.json({ message: "Socio deleted" });
    } catch (err) {
        console.log(err); // Agrega esta línea para registrar el error
        handleHttpError(res, "ERROR_DELETE_SOCIO");
    }
};

const getSocioPDF = async (req, res) => {
    try {
        const { id } = matchedData(req);
        const socio = await socioModel.findById(id);

        if (!socio) {
            return handleHttpError(res, "SOCIO_NOT_FOUND", 404);
        }

        const doc = new PDFDocument();
        let filename = `${socio.nombre}_${socio.apellidos}.pdf`;
        filename = encodeURIComponent(filename);

        // Stream the PDF back to the client
        res.setHeader('Content-disposition', 'attachment; filename="' + filename + '"');
        res.setHeader('Content-type', 'application/pdf');
        doc.pipe(res);

        // Add content to the PDF
        doc.fontSize(25).text('Datos del Socio', { align: 'center' });
        doc.text(`Nombre: ${socio.nombre}`);
        doc.text(`Apellidos: ${socio.apellidos}`);
        doc.text(`Teléfono: ${socio.telefono}`);
        doc.text(`Dirección: ${socio.direccion}`);
        if (socio.foto) {
            doc.image(socio.foto, { fit: [250, 300], align: 'center', valign: 'center' });
        }

        doc.end();
    } catch (err) {
        console.log(err);
        handleHttpError(res, "ERROR_GENERATE_PDF", 500);
    }
};

const getCarnetPDF = async (req, res) => {
    try {
        const { id } = matchedData(req);
        const socio = await socioModel.findById(id);

        if (!socio) {
            return handleHttpError(res, "SOCIO_NOT_FOUND", 404);
        }

        const doc = new PDFDocument({ size: [300, 200] });
        let filename = `Carnet_${socio.nombre}_${socio.apellidos}.pdf`;
        filename = encodeURIComponent(filename);

        // Stream the PDF back to the client
        res.setHeader('Content-disposition', 'attachment; filename="' + filename + '"');
        res.setHeader('Content-type', 'application/pdf');
        doc.pipe(res);

        // Front side of the card
        doc.rect(0, 0, 300, 200).fill('#f3f3f3');
        doc.fontSize(16).text('Carnet de Socio', 20, 20);
        doc.fontSize(12).text(`Nombre: ${socio.nombre}`, 20, 60);
        doc.text(`Apellidos: ${socio.apellidos}`, 20, 80);

        // Verifica si fechaNacimiento está definida y es válida
        if (socio.fechaNacimiento) {
            const fechaNacimiento = new Date(socio.fechaNacimiento);
            if (!isNaN(fechaNacimiento)) {
                doc.text(`Fecha de Nacimiento: ${fechaNacimiento.toDateString()}`, 20, 100);
            } else {
                doc.text(`Fecha de Nacimiento: No disponible`, 20, 100);
            }
        } else {
            doc.text(`Fecha de Nacimiento: No disponible`, 20, 100);
        }

        if (socio.foto) {
            doc.image(socio.foto, 200, 50, { width: 80, height: 80 });
        }

        // Back side of the card
        doc.addPage({ size: [300, 200] });
        doc.rect(0, 0, 300, 200).fill('#f3f3f3');
        doc.fontSize(12).text(`Dirección: ${socio.direccion}`, 20, 60);

        doc.end();
    } catch (err) {
        console.log(err);
        handleHttpError(res, "ERROR_GENERATE_PDF", 500);
    }
};

module.exports = {
    createSocio,
    updateSocio,
    deleteSocio,
    getSocioPDF,
    getCarnetPDF,
};