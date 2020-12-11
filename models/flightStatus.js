/**Author: Amanda Killen
 * Creates Flight Status table as a placeholder for DataTables view utilizing Sequelize ORM
 */

module.exports = function (sequelize, DataTypes) {
    let FlightStatus = sequelize.define("FlightStatus", {

        airline: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        flightNumber: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        flightDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        illnessList: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    }, {
        freezeTableName: true
    });

    return FlightStatus;
};

