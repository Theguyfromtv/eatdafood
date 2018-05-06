var connection = require("./connection.js");

var orm = {
    //add new burger
  addBurger: function(tableInput, burger_name) {
    var queryString = "INSERT INTO ??(burger_name, 0)";
    connection.query(queryString, [tableInput, burger_name,], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },

  readBurgerUneaten: function(tableInput) {
    var queryString = "SELECT * FROM ?? where devoured=0";
    console.log(queryString);
    connection.query(queryString, [tableInput], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  readBurgerEaten: function(tableInput) {
    var queryString = "SELECT * FROM ?? where devoured=1";
    console.log(queryString);
    connection.query(queryString, [tableInput], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
};

module.exports = orm;
