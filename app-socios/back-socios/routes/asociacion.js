const express = require('express');
const {
    getAssociations,
    getAssociationById,
    updateAssociation,
    deleteAssociation
} = require('../controllers/asociacion');
const {
    validatorUpdateAssociation,
    validatorGetAssociation
} = require('../validators/asociacion');
const authMiddleware = require('../middleware/session');

const router = express.Router();

// GET /associations - Retrieve all associations
router.get("/", getAssociations);

// GET /associations/:id - Retrieve a specific association by ID
router.get("/:id", validatorGetAssociation, getAssociationById);

// PUT /associations/:id - Update an association's information
router.put("/:id", authMiddleware, validatorUpdateAssociation, updateAssociation);

// DELETE /associations/:id - Delete an association
router.delete("/:id", authMiddleware, validatorGetAssociation, deleteAssociation);

module.exports = router;
