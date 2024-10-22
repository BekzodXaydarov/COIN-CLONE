const { Sequelize } = require("sequelize");
const sequelize = require("../config/database");

const Admin = require("./admin.model")(sequelize, Sequelize);
const Teacher = require("./teacher.model")(sequelize, Sequelize)

module.exports = { Admin, Teacher };
