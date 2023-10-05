const createRoutes = ({ app, config }) => {
  config.map((item) => {
    const { route, method, output } = item;
    app[method](route, (req, res) => {
      console.log(
        "\x1b[33m",
        `${new Date().toLocaleTimeString()} - requested ${method} ${route}\n`
      );
      try {
        res.status(200).send(output);
      } catch (e) {
        res
          .status(400)
          .send({ error: "Error at parsing 'request' data occured" });
      }
    });
  });
};

module.exports = createRoutes;
