const express = require('express');
const {
    createSocio,
    updateSocio,
    deleteSocio,
    getSocioPDF,
    getCarnetPDF,
} = require('../controllers/socio');
const {
    validatorCreateSocio,
    validatorUpdateSocio,
    validatorGetSocio
} = require('../validators/socio');
const authMiddleware = require('../middleware/session');
const { checkRol } = require('../middleware/roles');

const router = express.Router();

// POST /api/socios - Create a new socio
router.post("/", authMiddleware, checkRol(['association']), validatorCreateSocio, createSocio);

// PUT /api/socios/:id - Update a socio's information
router.put("/:id", authMiddleware, checkRol(['association']), validatorUpdateSocio, updateSocio);

// DELETE /api/socios/:id - Delete a socio
router.delete("/:id", authMiddleware, checkRol(['association']), validatorGetSocio, deleteSocio);

// GET /api/socios/:id/pdf - Generate a PDF with socio's information
router.get("/:id/pdf", authMiddleware, checkRol(['association']), validatorGetSocio, getSocioPDF);

// GET /api/socios/:id/carnet - Generate a carnet with socio's information
router.get("/:id/carnet", authMiddleware, checkRol(['association']), validatorGetSocio, getCarnetPDF);

module.exports = router;
