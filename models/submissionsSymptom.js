module.exports = function(sequelize, DataTypes) {
    let SubmissionDate = sequelize.define("SubmissionDate", {
        submission_symptomID:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        },
        submissionID:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        },
        symptomID:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        }
    });
    return SubmissionDate;
};