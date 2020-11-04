module.exports = function(sequelize, DataTypes) {
    let SubmissionDate = sequelize.define("Submission", {

        userID:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        },
        flightID:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        },
        illnessID:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        },
        submissionDate: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                isDate: {
                    msg:
                        "Please enter a valid date."
                }
            }
        }
    });
    return SubmissionDate;
};