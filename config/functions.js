const db = require("./database");
const Utils = require("../lib/utils");

const DEFAULT_USER = {
  username: "test1",
  password: "1111",
};

const TOKEN = "bnUgaSBuYWh1eWEgdHkgZXRvIHphZGVjb2RpbD8=";

const isAuthorized = (header) => {
  if (!header || header.length < 0) return false;
  if (header.split("Bearer ")[1] !== TOKEN) return false;

  return true;
};

const getHome = (req) => {
  if (!isAuthorized(req.headers.authorization))
    return { error: "Not Authorized" };

  return db.homepage;
};

const getMovie = (req) => {
  if (!isAuthorized(req.headers.authorization))
    return { error: "Not Authorized" };

  const { id = null } = req.query;

  if (!id || !db.movies[id]) {
    return { error: "Wrong ID" };
  }

  return db.movies[id];
};

const auth = (req) => {
  const { username = null, password = null } = req.body;

  if (!username || !password) {
    return { error: true, message: "Some fields are missing data" };
  }

  if (
    DEFAULT_USER.username !== username ||
    DEFAULT_USER.password !== password
  ) {
    return { error: true, message: "This user has not been found" };
  }

  return { message: "success", username, token: TOKEN };
};

const search = (req) => {
  const query = req.query.q || null;

  if (!query)
    return { error: true, message: "Empty search query has been sent" };

  const re = new RegExp(query);
  const result = Utils.filterObject(db.movies, (item) => re.test(item.name));

  return result;
};

module.exports = {
  getMovie,
  auth,
  getHome,
  search,
};
