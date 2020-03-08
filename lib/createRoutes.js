const returnParsedValue = (nested, req) => {
  let values = nested.split(".");
  let result = req[values[0]];
  for (let i = 1; i < values.length; i++) {
    result = result[values[i]];
  }
  return result;
};

const parseOutput = (data, req) => {
  const result = Object.assign({}, data);
  for (let key in result) {
    if (typeof result[key] === "object") {
      result[key] = parseOutput(result[key], req);
    }
    if (/{{/.test(result[key]) && /}}/.test(result[key])) {
      const mutated = result[key].replace("{{", "").replace("}}", "");
      result[key] = returnParsedValue(mutated, req);
    }
  }
  return result;
};

const createRoutes = ({ app, config }) => {
  config.map(item => {
    const { route, method, output } = item;
    app[method](route, (req, res) => {
      console.log(
        "\x1b[33m",
        `${new Date().toLocaleTimeString()} - requested ${method} ${route}\n`
      );
      try {
        const parsedOutput = parseOutput(output, req);
        res.status(200).send(parsedOutput);
      } catch (e) {
        res
          .status(400)
          .send({ error: "Error at parsing 'request' data occured" });
      }
    });
  });
};

module.exports = createRoutes;
