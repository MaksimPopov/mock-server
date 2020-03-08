const config = [
  {
    route: "/ping",
    method: "get",
    output: "pong"
  },
  {
    route: "/example",
    method: "post",
    output: {
      statusMessage: "success",
      userInfo: {
        name: "{{body.name}}",
        phoneNumber: "{{body.moreInfo.phone}}"
      }
      
    }
  }
];

module.exports = config;
