const { Sequelize } = require("sequelize");
const sequelize = require("../config/database");

const Admin = require("./admin.model")(sequelize, Sequelize);
const Teacher = require("./teacher.model")(sequelize, Sequelize)
const Group = require("./group.model")(sequelize,Sequelize)

Group.associate(sequelize.models)
Teacher.associate(sequelize.models)

module.exports = { Admin, Teacher };
