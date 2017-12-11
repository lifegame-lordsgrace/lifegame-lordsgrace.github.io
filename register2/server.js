const express = require("express");
const bodyParser = require('body-parser');

const app = express();

app.set("port", process.env.PORT || 3001);
app.use(bodyParser.json());

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("/api/groups", (req, res) => {
// TODO: update this
});

app.post("/api/form", (req, res) => {
  // console.log(req.body);
  // This will print the following result:
  //{ chineseName: 'asdf',
  //  englishFirstName: '',
  //  englishLastName: '',
  //  gender: null,
  //  age: null,
  //  marriageStatus: null,
  //  religionStatus: null }
  // TODO: validate on the backend side and write to google sheet
})

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});
