const createRoutes = ({ app, config }) => {
  config.map(item => {
    const { route, method, output } = item;
    app[method](route, (req, res) => {
      console.log(
        "\x1b[33m",
        `${new Date().toLocaleTimeString()} - requested ${method} ${route}`
      );
      res.status(200).send(output);
    });
  });
};

module.exports = createRoutes;
