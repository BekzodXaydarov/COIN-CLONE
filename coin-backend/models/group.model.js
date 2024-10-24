module.exports = (sequelize, DataTypes) => {
    const Group = sequelize.define("Group", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        teacher_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "Teachers",
                key: "id"
            }
        },
        room_number: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        day: {
            type: DataTypes.STRING,
            allowNull: false
        },
        time: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    Group.associate = (models) => {
        Group.belongsTo(models.Teacher, {
            foriegnKey: "teacher_id",
            as: "teacher"
        })
    }
    return Group
}