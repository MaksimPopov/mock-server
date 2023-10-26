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
      output: (req) => functions.getHome(req),
    },
    {
      route: "/api/movie",
      method: "get",
      output: (req) => functions.getMovie(req),
    },
    {
      route: "/api/auth",
      method: "post",
      output: (req) => functions.auth(req),
    },
    {
      route: "/api/metric",
      method: "post",
      output: () => {return { message: "success" }},
    }
  ],
};

module.exports = config;
