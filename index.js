"use strict";

const fs = require("fs");
const express = require("express");
const app = express();
const createRoutes = require("./lib/createRoutes");

let jsonData = fs.readFileSync("./config/config.json");
let config = JSON.parse(jsonData);

if (config && config.length > 0) {
  createRoutes({ app, config });
} else {
  console.error("\nconfig.json is empty");
}

const port = 1488;

app.listen(port, () => {
  console.log("\x1b[36m", `\n[server] App runs on port ${port}`);
});
