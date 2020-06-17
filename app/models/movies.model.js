module.exports = (sequelize, Sequelize) => {
  const Movie = sequelize.define("movies", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    duration: {
      type: Sequelize.STRING
    },
    artists: {
      type: Sequelize.STRING
    },
    genres: {
      type: Sequelize.STRING
    },
    url: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  });

  return Movie;
};
