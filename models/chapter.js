// models/chapter.js
module.exports = (sequelize, DataTypes) => {
  const Chapter = sequelize.define('Chapter', {
    chapterName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    chapterDescription: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    courseId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  Chapter.associate = models => {
    Chapter.belongsTo(models.Courses, {
      foreignKey: 'courseId',
      onDelete: 'CASCADE'
    });
    Chapter.hasMany(models.Quiz, {
      foreignKey: 'chapterId',
      onDelete: 'CASCADE'
    });
  };

  return Chapter;
};
