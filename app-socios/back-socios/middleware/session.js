const { handleHttpError } = require("../utils/handleError");
const { verifyToken } = require("../utils/handleJwt");
const { asociacionModel } = require("../models");

const authMiddleware = async (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            handleHttpError(res, "NOT_TOKEN", 401);
            return;
        }

        const token = req.headers.authorization.split(' ').pop();
        const dataToken = await verifyToken(token);

        if (!dataToken) {
            handleHttpError(res, "NOT_PAYLOAD_DATA", 401);
            return;
        }

        const association = await asociacionModel.findById(dataToken._id);
        if (!association) {
            handleHttpError(res, "NOT_FOUND_ASSOCIATION", 404);
            return;
        }

        req.data = association;
        next();
    } catch (err) {
        console.log(err);
        handleHttpError(res, "NOT_SESSION", 401);
    }
};

module.exports = authMiddleware;