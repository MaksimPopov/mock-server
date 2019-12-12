const createRoutes = ({ app, config }) => {
  config.map(item => {
    const { route, method, output } = item;
    app[method](route, (req, res) => {
      res.status(200).send(output);
    });
  });
};

module.exports = createRoutes;
