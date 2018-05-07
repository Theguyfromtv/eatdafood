var express = require("express");
var bodyParser = require("body-parser");

var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 3000;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'))


var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 8889,
  host: "localhost",
  user: "root",
  password: "root",
  database: "burger_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


// Use Handlebars to render the main index.html page with the burgers in it.
app.get("/", function(req, res) {
  let eaten= {}
  connection.query("SELECT * FROM burgers WHERE eaten=1;", function(err, data) {
    if (err) {
      return res.status(500).end();
    }
    console.log("success!")
    eaten=data;
    
  });
  connection.query("SELECT * FROM burgers WHERE eaten=0;", function(err, data) {
    console.log("get")
    if (err) {
      return res.status(500).end();
    }
    res.render("index", { burgers: data, eatenBurgers: eaten });
  });
});

app.post("/api/addBurger", function(req, res){
  connection.query("INSET INTO burgers (burger_name, burger_img, burger_res, eaten) VALUES (?,?,?,0",[req.body.label,req.body.image,reqp.body.url], function(err, data){
    if (err) {
      return res.status(500).end();
    }

    console.log("added burger")

  })



})



app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});

