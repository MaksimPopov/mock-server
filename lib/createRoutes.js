const THROTTLE_MS = 2000;

const createRoutes = ({ app, config }) => {
  config.map((item) => {
    const { route, method, output } = item;

    app[method](route, (req, res) => {
      console.log(
        "\x1b[33m",
        `${new Date().toLocaleTimeString()} - requested ${method} ${route}\n`
      );

      try {
        setTimeout(() => {
          res.status(200).send(output);
        }, THROTTLE_MS);
      } catch (e) {
        res
          .status(500)
          .send({ error: "Something went wrong" });
      }
    });
  });
};

module.exports = createRoutes;
