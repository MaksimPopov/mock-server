const Utils = require("./utils");

const createRoutes = ({ app, config }) => {
  config.api.map((item) => {
    const { route, method, output, status = 200 } = item;

    app[method](route, (req, res) => {
      Utils.requstLoggger(method, route);

      try {
        setTimeout(() => res.status(status).send(output(req)), config.throttle);
      } catch (e) {
        res.status(500).send({ error: "Something went wrong" });
      }
    });
  });
};

module.exports = createRoutes;
