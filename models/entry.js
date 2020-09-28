module.exports = function(sequelize, DataTypes) {
  let Entry = sequelize.define("Entry", {
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
    }

  });
  return Entry;
};

