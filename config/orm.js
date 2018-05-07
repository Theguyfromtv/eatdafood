var connection = require("../config/connection.js");


let orm= {
    loadPage1: function (cb){
        connection.query("SELECT * FROM burgers WHERE eaten=1;", function(err, data) {
            if (err) {
              return res.status(500).end();
            }
            cb(data)
        })

          
          
},
loadPage2: function(cb){
    connection.query("SELECT * FROM burgers WHERE eaten=0;", function(err, data) {
        //console.log("get")
        if (err) {
          return res.status(500).end();
        }
        cb(data)
      });

},
addBurger: function(name, img, link){connection.query("INSERT INTO burgers (burger_name, burger_img, burger_res, eaten) VALUES (?,?,?,0);",[name,img,link], function(err, data){
    if (err) {
      console.log(err)
      return res.status(500).end();
      
    }
    console.log("added burger")

  })
}
}






module.exports = orm;