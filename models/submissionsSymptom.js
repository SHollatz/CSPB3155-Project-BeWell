module.exports = function(sequelize, DataTypes) {
    let SubmissionSymptom = sequelize.define("SubmissionSymptom", {
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
    return SubmissionSymptom;
};