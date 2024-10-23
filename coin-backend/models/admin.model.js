const bcrypt = require("bcrypt")
module.exports = (sequelize,DataTypes)=>{
    const Admin = sequelize.define("Admin",{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
    })
    Admin.beforeSave(async (admin,option)=>{
        if(admin.changed("password")){            
            admin.password = await bcrypt.hash(admin.password,10)
            console.log(admin.password);
            
        }
    })
    return Admin
}