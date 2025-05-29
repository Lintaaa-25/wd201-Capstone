
/*eslint-disable no-unused-vars*/
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Courses.belongsTo(models.User, {
        foreignKey: "userId",
      });

      Courses.hasMany(models.Chapter, {
        foreignKey: "courseId",
      });
    }

    static async remove(id) {
      return this.destroy({
        where: {
          id,
        },
      });
    }
  }
  Courses.init(
    {
      courseName: DataTypes.STRING,
      courseDescription: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Course",
    },
  );
  return Course;
};
