const { handleHttpError } = require("../utils/handleError");

const checkRol = (roles) => (req, res, next) => {
    try {
        const data = req.data;
        const userRol = data.role;
        const checkValueRol = roles.includes(userRol);

        if (!checkValueRol) {
            handleHttpError(res, "NOT_ALLOWED_TOKEN", 403);
            return;
        }

        next();
    } catch (err) {
        console.error(err);
        handleHttpError(res, "ERROR_PERMISSIONS", 403);
    }
};

module.exports = { checkRol };
