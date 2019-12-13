"use strict";

const config = require("./config/config");
const express = require("express");
const app = express();
const cors = require("cors");

const createRoutes = require("./lib/createRoutes");

app.use(cors());

if (config && config.length > 0) {
  createRoutes({ app, config });
} else {
  console.error("\nconfig.json is empty");
}

const port = 6969;

app.listen(port, () => {
  console.log("\x1b[36m", `\n[mock-server] App runs on port ${port}\n`);
});
