var express = require("express");
var bodyParser = require("body-parser");
var connection = require("./config/connection")

var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 3000;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Use Handlebars to render the main index.html page with the burgers in it.

app.put("/api/moveBurger", function(req, res){
  console.log(req.body)
  connection.query("UPDATE burgers SET eaten=1 WHERE id=?",[req.body.data], function(err, data){
    if (err) {
      console.log(err)
      return res.status(500).end();
      
    }
    res.send("burger moved")
    console.log("moved burger")

  })

  
})

var routes = require("./controllers/routes");

app.use(routes);

app.use(express.static('public'))


app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});






