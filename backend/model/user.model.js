const { sequelize } = require("../helpers/dbConfig");
const { DataTypes } = require("sequelize");

const User = sequelize.define("users", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
    },
    dob: {
      type: DataTypes.DATEONLY,
    }
 });

 sequelize.sync().then(() => {
    console.log('User table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });

module.exports = User;