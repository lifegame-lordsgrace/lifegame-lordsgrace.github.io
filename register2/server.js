const bodyParser = require("body-parser");
const express = require("express");
const multer = require("multer");

const app = express();
// for photo upload from frontend
const upload = multer();

app.set("port", process.env.PORT || 3001);
app.use(bodyParser.json());

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.post("/api/form", (req, res) => {
  console.log(req.body);
  // This will print the following result:
  //{ chineseName: 'asdf',
  //  englishFirstName: '',
  //  englishLastName: '',
  //  gender: null,
  //  age: null,
  //  marriageStatus: null,
  //  religionStatus: null }
  // TODO: validate on the backend side and write to google sheet
});

app.post("/api/photo", upload.single("avatar"), (req, res) => {
  console.log(req.file);
  // This will print the following result:
  //{ fieldname: 'avatar',
  //  originalname: 'test.jpg',
  //  encoding: '7bit',
  //  mimetype: 'application/jpg',
  //  buffer: <Buffer 25 50 44 46 2d 31 2e 33 0a 25 c4 e5 f2 e5 eb a7 f3 a0 d0 c4 c6 0a 34 20 30 20 6f 62 6a 0a 3c 3c 20 2f 4c 65 6e 67 74 68 20 35 20 30 20 52 20 2f 46 69 ... >,
  //  size: 155923 }
  // TODO: validate on the backend, upload to google photo, and return the
  // public url or the tokens  to construct a url to frontend to render the
  // uploaded image.
  res.json({url: 'http://www.sandiegovips.com/wp-content/uploads/2014/05/test-image.jpeg'});
});

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});
