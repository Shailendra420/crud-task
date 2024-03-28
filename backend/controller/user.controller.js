const User = require("../model/user.model");
const {sequelize} = require("../helpers/dbConfig");

exports.getUser = function(req, res, next) {
    // sequelize.sync().then(() => {

        User.findAll().then(data => {
            console.log("--resres--", data);
            let resData = data;
            let dataList =[];

            for(var i = 0; i < data.length ; i++){
                let dataItem = {};
                for(const [key,value] of Object.entries(data[i].dataValues)){
                    dataItem[key] = value;
                }
                dataList.push(dataItem);
            }
            console.log("--dataList--", dataList);
            res.json({
                status:"success",
                message:"Success",
                data: dataList
            })  
            // next();
        }).catch((error) => {
            console.error('Failed to retrieve data : ', error);
            // return next(error);
        });

    // })
    // .catch((error) => {
    //     console.error('Unable to create table : ', error);
    //     // return next(error);
    // });
}
exports.createUser = function (req, res, next) {
    let { name, email, password, dob} = req.body;
    if(name && email && password && dob) {
        // sequelize.sync().then(() => {
        //     console.log('User table created successfully!');
         
            User.create({
                name,
                email,
                password,
                dob,
            }).then(data => {
                console.log(data)
                res.userCreated = data;
                res.json({
                    status:"success",
                    message:"Success",
                    data: res.userCreated
                });
            }).catch((error) => {
                console.error('Failed to create a new record : ', error);
            });
         
        // }).catch((error) => {
        //     console.error('Unable to create table : ', error);
        //     return next(error);
        // });
    }
}
exports.updateUser = function(req, res, next) {
    let { name, email, password, dob} = req.body;
    User.update({ name, email, password, dob }, {
        where: {
            id: req.body.userId,
        },
    }).then(data => {
        res.json({
            status:"success",
            message:"Success",
            data: {
                name,
                email,
                password,
                dob
            }
        });
    }).catch((error) => {
        console.error('Failed to update the record : ', error);
    });
}
exports.deleteUser = function(req, res, next) {
    console.log("req.body.idddd", req);
    User.destroy({
        where: {
            id: req.body.userId,
        },
    }).then(data => {
        res.json({
            status:"success",
            message:"Success",
            data: {"msg": data}
        });
    }).catch((error) => {
        console.error('Failed to delete the record : ', error);
    });
}
// module.exports = {
//     getUser,
//     createUser,
//     updateUser,
//     deleteUser
// }

