/**Author: Sabine Hollatz
 * Creates Entry table utilizing Sequelize ORM
 */

module.exports = function (sequelize, DataTypes) {
    let Entry = sequelize.define("Entry", {
        firstname: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlpha: true,
                len: {
                    args: [1, 255],
                    msg:
                        "Please enter your first name with at least 1 character but no more than 255."
                }
            }
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlpha: true,
                len: {
                    args: [1, 255],
                    msg:
                        "Please enter your last name with at least 1 character but no more than 255."
                }
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true,
                len: {
                    args: [1, 255],
                    msg:
                        "Please enter your email with at least 1 character but no more than 255."
                }
            }
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            // validate: {
            //     //isDate: true,
            //     msg:
            //         "Please enter a valid date."
            //     }
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
                isAlphanumeric: true,
                len: {
                    args: [1, 45],
                    msg: "Please enter a Flight Number."
                }
            }
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
        },
        symptom_name: {
            type: DataTypes.JSON,
            //allowNull: false,
            validate: {
                len: {
                    args: [1, 255],
                    msg:
                        "Please select at least 1 symptom."
                }
            }
        }
    }, {
        freezeTableName: true
    });

    return Entry;
};

