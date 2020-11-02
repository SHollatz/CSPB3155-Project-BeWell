module.exports = function(sequelize, DataTypes) {
    let SubmissionRequest = sequelize.define("SubmissionRequest", {  //creates an object model for the requests
        userID:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
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
                len: {
                    args: [1, 255],
                    msg:
                        "Please enter your last name with at least 1 character but no more than 255."
                }
            }
        },

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
    });
    return SubmissionRequest;
}