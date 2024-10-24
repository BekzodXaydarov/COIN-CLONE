module.exports = (sequelize, DataTypes) => {
    const Teacher = sequelize.define("Teacher", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        direction: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    })
    Teacher.associate = (models) => {
        Teacher.hasMany(models.Group, {
            foreignKey: "teacher_id",
            as: "group"
        })
    }
    return Teacher
}