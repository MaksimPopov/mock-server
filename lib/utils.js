const requstLoggger = (method = "", route = "") => {
  console.log(
    "\x1b[33m",
    `${new Date().toLocaleTimeString()} - requested ${method} ${route}\n`
  );
};

const filterObject = (o, cb) => {
  const res = [];

  for (const key in o) {
    if (cb(o[key])) {
      res.push(o[key]);
    }
  }

  return res;
};

module.exports = {
  requstLoggger,
  filterObject,
};
