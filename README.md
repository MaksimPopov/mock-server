# Simple JSON Mock Server

## What it does?

This piece of code can be used by front-end developers to create basic API server

## How to use it?

- Install dependencies `$ npm install`

- Open config.js
- Add new route to array, by creating object with **"route"** , **"method"** , **"output"** keys:

```javascript
const config = [
  {
    route: "/ping",
    method: "post",
    output: "pong"
  },
  {
    route: "/new-route",
    method: "get",
    output: {
        message: "It's alive"
    }
  }
]
```

- Start the server `$ npm start`
- Now you can try to create a request to `http://localhost:6969/new-route`

## More about config.js

### Variables
Variables are taken from what user sends to the server.
You can use:
`{{body.<your variable>}}` - body of a request
`{{query.<your variable>}}` - url querry of a request (eg. `http://127.0.0.1:6969/example?<your variable>=<value>`)

Variables are used only in `output`

For example:

```javascript
const config = [
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
```

While request body looks like this: 
```javascript
{
	"name": "Human Beign",
	"moreInfo": {
		"phone": "+380932070487"
	}
}
```

The response will be:
```javascript
{
    "statusMessage": "success",
    "userInfo": {
        "name": "Human Beign",
        "phoneNumber": "+380932070487"
    }
}
```

>check ./examples/index.html to have a closer look on variables