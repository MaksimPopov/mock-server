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
        name: "Pes patron",
        phoneNumber: "+1488"
      }
      
    }
  }
];

module.exports = config;
