const { matchedData } = require("express-validator");
const { handleHttpError } = require("../utils/handleError");
const { tokenSign } = require("../utils/handleJwt");
const { encrypt, compare } = require("../utils/handlePassword");
const { asociacionModel } = require("../models");

const registerCtrl = async (req, res) => {
    try {
        req = matchedData(req);
        const password = await encrypt(req.password);
        const body = { ...req, password };
        const data = await asociacionModel.create(body);
        data.password = undefined;
        const token = await tokenSign(data, "association");
        res.status(201).json({ token, association: data });
    } catch (err) {
        console.log(err);
        handleHttpError(res, "ERROR_REGISTER_ASSOCIATION");
    }
};

const loginCtrl = async (req, res) => {
    try {
        req = matchedData(req);
        const association = await asociacionModel.findOne({ email: req.email });

        if (!association) {
            return res.status(404).send("ASSOCIATION_NOT_EXISTS");
        }

        const check = await compare(req.password, association.password);
        if (!check) {
            return res.status(401).send("INVALID_PASSWORD");
        }

        association.password = undefined;
        const token = await tokenSign(association, "association");
        res.status(200).json({ token, association });
    } catch (err) {
        console.log(err);
        handleHttpError(res, "ERROR_LOGIN_ASSOCIATION");
    }
};

module.exports = { registerCtrl, loginCtrl };
