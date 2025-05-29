
/*eslint-disable no-unused-vars*/
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Chapter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Chapters.belongsTo(models.Course, {
        foreignKey: "courseId",
      });

      Chapters.hasMany(models.Page, {
        foreignKey: "chapterId",
      });
    }
  }
  Chapters.init(
    {
      chapterName: DataTypes.STRING,
      chapterDescription: DataTypes.TEXT,
    },
    
    {
      sequelize,
      modelName: "Chapter",
    },
  );
  return Chapter;
};
