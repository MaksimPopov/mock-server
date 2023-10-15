const db = require("./database");
const functions = require("./functions");

const config = {
  throttle: 1000,
  api: [
    {
      route: "/ping",
      method: "get",
      output: () => "pong",
    },
    {
      route: "/api/home",
      method: "get",
      output: () => db.homepage,
    },
    {
      route: "/api/movie",
      method: "get",
      output: (req) => functions.getMovie(req),
    },
  ],
};

module.exports = config;
