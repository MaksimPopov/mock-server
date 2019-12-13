# Simple JSON Mock Server

## What it does?

This piece of code can be used by front-end developers to create basic API server

## How to use it?

- Install dependencies
  `$ npm install`

- Open config.json
- Add new route to array, by creating object with **"route"** , **"method"** , **"output"** keys:

```javascript
[
  {
    "route": "/test",
    "method": "get",
    "output": {
      "test": "This is a test route"
    }
  }
]
```

- Start the server `$ npm start`
- Now you can try to create a request to `http://localhost:6969/test`
