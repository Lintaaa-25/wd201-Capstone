module.exports = (sequelize, DataTypes) => {
  const StudentQuizAttempt = sequelize.define('StudentQuizAttempt', {
    userId: DataTypes.INTEGER,
    quizId: DataTypes.INTEGER,
    selectedAnswer: DataTypes.STRING,
    isCorrect: DataTypes.BOOLEAN
  });

  StudentQuizAttempt.associate = models => {
    StudentQuizAttempt.belongsTo(models.Users, { foreignKey: 'userId' });
    StudentQuizAttempt.belongsTo(models.Quiz, { foreignKey: 'quizId' });
  };

  return StudentQuizAttempt;
};
