const express = require("express");
const router = express.Router();
// const dbConnection = require("../../helpers/dbConfig");
const userController = require("../../controller/user.controller");

router.get('/', async function (req, res){
    userController.getUser(req, res);
    // console.log("userDAta", await userData);
    // return await res.send(userData);
});

router.post('/', function (req, res){
    console.log("reqqqqq:", req.body);
    userController.createUser(req, res)
    // res.send(userController.createUser(req, res));
});

router.put('/', function (req, res){
    userController.updateUser(req, res);
});

router.delete('/', function (req, res){
    userController.deleteUser(req, res);
});

module.exports = router;
