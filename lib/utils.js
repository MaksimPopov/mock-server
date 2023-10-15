const requstLoggger = (method = "", route = "") => {
  console.log(
    "\x1b[33m",
    `${new Date().toLocaleTimeString()} - requested ${method} ${route}\n`
  );
};

module.exports = {
    requstLoggger,
};
