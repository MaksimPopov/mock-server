const config = require("./config/config");
const express = require("express");
const app = express();
const cors = require("cors");
const createRoutes = require("./lib/createRoutes");

const APP_PORT = 1488;

app.use(cors());
app.use(express.json());

config && config.api.length > 0
  ? createRoutes({ app, config })
  : console.error("\nconfig.js is empty");

app.listen(APP_PORT, () => {
  console.log("\x1b[36m", `\n[mock-server] App runs on port ${APP_PORT}\n`);
});
