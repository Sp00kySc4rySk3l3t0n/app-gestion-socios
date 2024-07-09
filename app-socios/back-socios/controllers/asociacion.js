const { matchedData } = require("express-validator");
const { handleHttpError } = require("../utils/handleError");
const { asociacionModel } = require("../models");

const createAssociation = async (req, res) => {
    try {
        req = matchedData(req);
        const data = await asociacionModel.create(req);
        res.status(201).json(data);
    } catch (err) {
        console.log(err);
        handleHttpError(res, "ERROR_CREATE_ASSOCIATION");
    }
};

const getAssociations = async (req, res) => {
    try {
        const data = await asociacionModel.find({});
        res.send(data);
    } catch (err) {
        console.log(err);
        handleHttpError(res, "ERROR_GET_ASSOCIATIONS");
    }
};

const getAssociationById = async (req, res) => {
    try {
        const { id } = matchedData(req);
        const data = await asociacionModel.findById(id);
        if (!data) {
            return res.status(404).send("ASSOCIATION_NOT_FOUND");
        }
        res.send(data);
    } catch (err) {
        console.log(err);
        handleHttpError(res, "ERROR_GET_ASSOCIATION");
    }
};

const updateAssociation = async (req, res) => {
    try {
        const { id, ...body } = matchedData(req);
        const data = await asociacionModel.findByIdAndUpdate(id, body, { new: true });
        if (!data) {
            return res.status(404).send("ASSOCIATION_NOT_FOUND");
        }
        res.send(data);
    } catch (err) {
        console.log(err);
        handleHttpError(res, "ERROR_UPDATE_ASSOCIATION");
    }
};

const deleteAssociation = async (req, res) => {
    try {
        const { id } = matchedData(req);
        const data = await asociacionModel.findByIdAndDelete(id);
        if (!data) {
            return res.status(404).send("ASSOCIATION_NOT_FOUND");
        }
        res.send({ message: "Association deleted" });
    } catch (err) {
        console.log(err);
        handleHttpError(res, "ERROR_DELETE_ASSOCIATION");
    }
};

module.exports = {
    createAssociation,
    getAssociations,
    getAssociationById,
    updateAssociation,
    deleteAssociation,
};
