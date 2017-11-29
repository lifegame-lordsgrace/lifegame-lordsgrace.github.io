# Life Game Registrition App

## File Structure

* There are technically two apps in this directory. A Node server and a react
app
* Everything inside of `client` folder belongs to the react/redux app.
* Everything outside of `client` folder belongs to the Node server.

## Develop Locally

### Prerequisites
* Install `node` and `npm`: https://www.npmjs.com/get-npm
* Make sure to use the following version:

	```
	~/R/l/register2 ❯❯❯ node -v
	v6.11.0
	~/R/l/register2 ❯❯❯ npm -v
	3.10.10
	```

### Frontend only

* Go to frontend directory (assuming your current directory is `register2/`):

  ```
  cd client
  ```

* Install dependencies:

	```
  npm install
	```

* Start dev server:

  ```
  npm start
  ```

 This will start a dev server at `localhost: 3000`. It will auto-compile and
 reload your change when you save your edits.

### Server only

* Install dependencies:

	```
  npm install
	```

* Start dev server:

  ```
  nf start
  ```

  Here we use foreman to start the server so that it automatically loads .env
  configurations.

  This will start a server at `localhost:5000`. You can use any http client to
  test the api by sending GET/POST request.

  You have to restart the server every time you make a change.

### Start both frontend and backend servers (assuming your current directory is `register2/`)

* Make sure the dependencies are installed.

  ```
  npm start
  ```

## Deploy (TODO: not updated yet since I added server code. DO NOT USE THIS
STEP TO DEPLOY FOR NOW!)

  ```
  # in register2 directory
  make deploy
  ```
