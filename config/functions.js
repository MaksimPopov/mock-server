const db = require("./database");

const getMovie = (req) => {
  const { id = null } = req.query;

  if (!id || !db.movies[id]) {
    return { error: "Wrong ID" };
  }

  return db.movies[id];
};

module.exports = {
  getMovie,
};
