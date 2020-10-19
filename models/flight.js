module.exports = function(sequelize, DataTypes) {
    let Flight = sequelize.define("flight", {
        flightID:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        },

        flightDate: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                isDate: {
                    msg:
                        "Please enter a valid date."
                }
            }
        },

        airline: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [1, 45],
                    msg: "Please enter an Airline."
                }
            }
        },

        flightNumber: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [1, 45],
                    msg: "Please enter a Flight Number."
                }
            }
        }

    });
    return Flight;
};

