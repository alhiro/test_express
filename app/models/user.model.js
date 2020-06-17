module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    confirm_password: {
      type: Sequelize.STRING
    },
    token: {
      type: Sequelize.STRING
    }
  });

  return User;
};
