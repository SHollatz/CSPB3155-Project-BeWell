module.exports = function(sequelize, DataTypes) {
    let Illness = sequelize.define("Illness", {
        illnessID:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        },

        illnessName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [1, 45],
                    msg:
                        "Please select an illness."
                }
            }
        }
    }, {
        freezeTableName: true
    });
    return Illness;
};

