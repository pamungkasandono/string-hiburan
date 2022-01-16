const express = require("express");
const connect = require("../Configs/db.connection");
const HiburanModel = require("../Models/hiburan.model");

// database connection
connect();

// let's do some code
const home = (req, res) => {
    res.render("pages/index");
};

const getHiburan = async (req, res) => {
    if (req.xhr) {
        try {
            const hiburan = await HiburanModel.find();
            res.json(hiburan);
        } catch (error) {
            res.json({ message: error });
        }
    } else {
        res.render("pages/hiburan");
    }
};

const postHiburan = async (req, res) => {
    const hiburan = new HiburanModel({
        content: req.body.content,
        author: req.body.author,
    });

    try {
        const saveHiburan = await hiburan.save();
        res.json({
            message: "success",
            data: saveHiburan,
        });
    } catch (error) {
        res.json({
            message: error,
        });
    }
};

const getHiburanBy = async (req, res) => {
    try {
        const id = req.params.id;
        const hiburan = await HiburanModel.findById(id);
        res.json(hiburan);
    } catch (error) {
        res.json({
            message: error,
        });
    }
};

module.exports = {
    home: home,
    getHiburan: getHiburan,
    postHiburan: postHiburan,
    getHiburanBy: getHiburanBy,
};
