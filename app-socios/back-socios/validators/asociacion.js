const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");

const validatorUpdateAssociation = [
    check("id").exists().withMessage('ID is required').notEmpty().withMessage('ID cannot be empty'),
    check("nombre").optional().notEmpty().isLength({ min: 3, max: 99 }),
    check("email").optional().isEmail(),
    check("ciudad").optional().notEmpty(),
    check("pais").optional().notEmpty(),
    check("telefono").optional().isString(),
    check("direccion").optional().isString(),
    check("fechaFundacion").optional().isISO8601().toDate(),
    check("numeroMiembros").optional().isNumeric(),
    check("descripcion").optional().isString(),
    check("activo").optional().isBoolean(),
    check("categorias").optional().isArray(),
    (req, res, next) => validateResults(req, res, next)
];

const validatorGetAssociation = [
    check("id").exists().withMessage('ID is required').notEmpty().withMessage('ID cannot be empty'),
    (req, res, next) => validateResults(req, res, next)
];

module.exports = {  
    validatorUpdateAssociation,
    validatorGetAssociation,
};
