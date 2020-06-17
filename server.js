const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const session = require('express-session');
const cors = require("cors");

const app = express();

app.use(cookieParser());
app.use(session({secret: "Shh, its a secret!"}));

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");

db.sequelize.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
  if(req.session.page_views){
    res.send({ 
      message: "You visited this page " + req.session.page_views + " times",
      viewer: req.session.page_views++
    });
    
 } else {
    res.send({ 
      message: "Welcome to this page for the first time!",
      viewer: req.session.page_views = 1
    });
 }
});

require("./app/routes/movies.routes")(app);
require("./app/routes/auth.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
