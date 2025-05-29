module.exports = (sequelize, DataTypes) => {
  const Quiz = sequelize.define('Quiz', {
    chapterId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    question: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    optionA: DataTypes.STRING,
    optionB: DataTypes.STRING,
    optionC: DataTypes.STRING,
    optionD: DataTypes.STRING,
    correctAnswer: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Quiz.associate = models => {
    Quiz.belongsTo(models.Chapter, {
      foreignKey: 'chapterId',
      onDelete: 'CASCADE'
    });
  };

  return Quiz;
};
