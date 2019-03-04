# Stock API

This is a [Node.js](https://nodejs.org/) API builded around Node.js native modules, using no npm libraries.  I'm using [Babel](https://babeljs.io/) to compile the code.


# Building

Previous to start to using this project you have to run **`npm install`** inside the project root.

You can use the script **`npm run build`** to compile the code and the script **`npm run lint`** to use the configurated linter *(Standard.js)* to validate the code.

## Running

You can use the the script **`npm start`** to start the API *(the code is compiled automatically)*. or you can use the script **`npm run start:watch`** to start the API in watch mode using [nodemon](https://nodemon.io/).

The API server accept some options to modify the port and host, you can use the --help parameter to read the server usage information; to do that please use the next command: **`npm start -- --help`**.

To start the server using a different port use the command **`npm start -- --port 3000`**, in the same way to start the server in a different host **`npm start -- --host 127.0.0.1`**.

## Testing the API

You can test the API using the browser, REST API test tool of you preference or using [cURL](https://curl.haxx.se/); below you will find some commands to test the API usin cURL:

    $ curl http://localhost:8008/stock/aapl
    $ curl http://localhost:8008/stock/collection/Health%20Care

If you want to have it displayed prettier, you can use the following command, provided you have [Python](http://python.org/ "http://python.org") installed on your machine.

    $ curl http://localhost:8008/stock/aapl | python -m json.tool
