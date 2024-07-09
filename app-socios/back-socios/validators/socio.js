const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");

const validatorCreateSocio = [
    check("nombre").exists().withMessage('Name is required').notEmpty().withMessage('Name cannot be empty').isLength({ min: 3, max: 99 }).withMessage('Name must be between 3 and 99 characters'),
    check("apellidos").exists().withMessage('Surname is required').notEmpty().withMessage('Surname cannot be empty'),
    check("telefono").exists().withMessage('Phone is required').notEmpty().withMessage('Phone cannot be empty'),
    check("direccion").exists().withMessage('Address is required').notEmpty().withMessage('Address cannot be empty'),
    check("asociacion").exists().withMessage('Association ID is required').notEmpty().withMessage('Association ID cannot be empty'),
    (req, res, next) => validateResults(req, res, next)
];

const validatorUpdateSocio = [
    check("id").exists().withMessage('ID is required').notEmpty().withMessage('ID cannot be empty'),
    check("nombre").optional().notEmpty().isLength({ min: 3, max: 99 }),
    check("apellidos").optional().notEmpty(),
    check("telefono").optional().notEmpty(),
    check("direccion").optional().notEmpty(),
    check("foto").optional().isString(),
    (req, res, next) => validateResults(req, res, next)
];

const validatorGetSocio = [
    check("id").exists().withMessage('ID is required').notEmpty().withMessage('ID cannot be empty'),
    (req, res, next) => validateResults(req, res, next)
];

module.exports = {
    validatorCreateSocio,
    validatorUpdateSocio,
    validatorGetSocio,
};
