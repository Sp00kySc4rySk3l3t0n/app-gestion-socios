const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");

const validatorRegister = [
    check("nombre").exists().withMessage('Name is required').notEmpty().withMessage('Name cannot be empty').isLength({ min: 3, max: 99 }).withMessage('Name must be between 3 and 99 characters'),
    check("email").exists().withMessage('Email is required').notEmpty().withMessage('Email cannot be empty').isEmail().withMessage('Invalid email format'),
    check("password").exists().withMessage('Password is required').notEmpty().withMessage('Password cannot be empty').isLength({ min: 8, max: 64 }).withMessage('Password must be between 8 and 64 characters'),
    check("ciudad").exists().withMessage('City is required').notEmpty().withMessage('City cannot be empty'),
    check("pais").exists().withMessage('Country is required').notEmpty().withMessage('Country cannot be empty'),
    (req, res, next) => validateResults(req, res, next)
];

const validatorLogin = [
    check("email").exists().withMessage('Email is required').notEmpty().withMessage('Email cannot be empty').isEmail().withMessage('Invalid email format'),
    check("password").exists().withMessage('Password is required').notEmpty().withMessage('Password cannot be empty').isLength({ min: 8, max: 64 }).withMessage('Password must be between 8 and 64 characters'),
    (req, res, next) => validateResults(req, res, next)
];

module.exports = {
    validatorRegister,
    validatorLogin,
};
