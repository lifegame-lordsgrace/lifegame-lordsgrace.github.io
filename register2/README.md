# Life Game Registrition App

## File Structure

* There are technically two apps in this directory. A Node server and a react
app.
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
* Make sure your current directory is `register2/`

* Install dependencies:

	```
  npm install
	```

* Start dev server:

  ```
  nf start
  ```

  Here we use [foreman](https://github.com/strongloop/node-foreman) to start the server so that it automatically loads `.env` file for
  configurations.

  This command will start a server at `localhost:5000`. You can use any http client to
  test the api by sending GET/POST requests.

  Note that you have to restart the server every time you make a change.

### Start both frontend and backend servers (assuming your current directory is `register2/`)

* Make sure the dependencies are installed for both frontend and backend.

  ```
  npm start
  ```

## Configure Environment Variable

Environment variables can be accessed by calling `process.env.NAME_OF_YOUR_ENVIRONMENT_VARIABLE`. Defining them is differnet between your dev and production environment.

### Local

* Create a file under `register2` directory named `.env`
* Add environment variables in the format of `KEY=VALUE`, e.g. `TEST_KEY=123` will assign `TEST_KEY` value of `123`. All the values are treated as string type when loaded in the application.
* `.env` file is git-ignored on default since it might contain sensitive data like your api token. Please do not check in this file.

### Production
* 	Please refer to [Heroku doc](https://devcenter.heroku.com/articles/nodejs-support#environment-variables).

## Deploy

  * You need to update your git configuration to be able to push to the Heroke remote.

  ```
  ~/R/l/register2 ❯❯❯ git remote -v
heroku	https://git.heroku.com/life-game-registration.git (fetch)
heroku	https://git.heroku.com/life-game-registration.git (push)
  ```
  * You need to be authorized to be able to push to this remote.
  * In `register2` directory, run `make deploy`.
