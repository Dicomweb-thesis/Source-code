var express = require("express");
var app = express();
var server = require("http").createServer(app);
var cors=require("cors");
var bodyParser = require("body-parser");
var jwt = require("jsonwebtoken");
var config = require("./config");
// var mongoose=require('mongoose');
// var User = require("./models/user");

// Set up server for any client can send request to server
app.use(cors())
// app.use((request, response, next) => {
//   response.header("Access-Control-Allow-Origin", "*");
//   response.header("Accept", "application/json");
//   response.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
//   next();
// });

require("./routes")(express, app);

server.listen(4000, () =>
  console.log("Successful. The server is running at the port 4000.")
);

// api login------------------------------------------------------------
// mongoose.connect(config.url);
app.set("superSecret", "jsonwebtoken");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var users = [
  {
    userId: "ad",
    username: "admin",
    password: "123",
    roleId: 0
  },
  {
    userId: "jn",
    username: "john",
    password: "123",
    roleId: 1
  }
];

app.get("/users", function(req, res) {
  res.json(users);
});

app.post("/login", function(req, res) {
  for (let user of users) {
    if (user.username === req.body.username) {
      let decodedString = Buffer.from(req.body.password, "base64").toString("ascii");
      let decodedPass = decodedString.substring(decodedString.indexOf(":") + 1);
      if (user.password != decodedPass) {
        res.json({
          success: false,
          message: "Authentication failed. Wrong password."
        });
        return;
      } else {
        jwt.sign(
          { user },
          app.get("superSecret"),
          { expiresIn: config.expiryOfToken },
          (err, token) => {
            res.json({
              userId: user.userId,
              username: user.username,
              role: user.roleId,
              token: token
            });
          }
        );
      }
      return;
    }
  }
  res.json({
    success: false,
    message: "Authentication failed. User not found."
  });
});

// Draft ==========================================================================
var orthanc = require("orthanc-client");
var url = "http://localhost:8042";

var source = new orthanc({
  url: this.url,
  auth: {
    username: "ad",
    password: "123"
  }
});

// source.instances.getFile('8812173f-e2408081-8bd94d96-612edc5e-6f196df6').then(function(value){
//     console.log(value);
// }).catch(function (error) {
//     console.log(error);
// })

// source.instances.getFile('d7687eda-ca4054dc-09a6bc9c-d0e59364-2f71f804').then(function (response) {
//     console.log(response);
// });

// function loadImage(imageId) {
//     if (imageId === undefined) {
//         throw new Error('loadImage: parameter imageId must not be undefined');
//     }
//
//     // var imageLoadObject = (0, _imageCache.getImageLoadObject)(imageId);
//     //
//     // if (imageLoadObject !== undefined) {
//     //     return imageLoadObject.promise;
//     // }
//
//     return loadImageFromImageLoader(imageId).promise;
// }

// function loadImageFromImageLoader(imageId) {
//     var colonIndex = imageId.indexOf(':');
//     var scheme = imageId.substring(0, colonIndex);
//     var imageLoaders = {};
//     var loader = imageLoaders[scheme];
//
//     // if (loader === undefined || loader === null) {
//     //     if (unknownImageLoader !== undefined) {
//     //         return unknownImageLoader(imageId);
//     //     }
//     //
//     //     throw new Error('loadImageFromImageLoader: no image loader for imageId');
//     // }
//
//     var imageLoadObject = loader(imageId);
//
//     // Broadcast an image loaded event once the image is loaded
//     imageLoadObject.promise.then(function (image) {
//         (0, _triggerEvent2.default)(_events2.default, 'cornerstoneimageloaded', { image: image });
//     }, function (error) {
//         var errorObject = {
//             imageId: imageId,
//             error: error
//         };
//
//         (0, _triggerEvent2.default)(_events2.default, 'cornerstoneimageloadfailed', errorObject);
//     });
//
//     return imageLoadObject;
// }

// url = 'http://localhost:8042/wado?requestType=WADO&studyUID=1.3.12.2.1107.5.2.2.9076.20051014125256000&seriesUID=1.3.12.2.1107.5.2.2.9076.20051014125635000002&objectUID=1.3.12.2.1107.5.8.1.12345.200510141312220835508&&contentType=application/dicom'
// fetch(url)
//     .then(response => {
//         response.text().then(value=>{console.log(value)});
//     }).catch(error => {
//     console.log(error);
// });
