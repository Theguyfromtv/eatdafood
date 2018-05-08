var connection = require("../config/connection.js");


let orm= {
    loadPage1: function (email, cb){
        connection.query("SELECT * FROM burgers WHERE (eaten=1 AND email=?);",[email] ,function(err, data) {
            if (err) {
              console.log(err)
            }
            cb(data)
        })

          
          
},
loadPage2: function(email, cb){
    connection.query("SELECT * FROM burgers WHERE (eaten=0 AND email=?);", [email], function(err, data) {
        //console.log("get")
        if (err) {
          console.log(err)
        }
        cb(data)
      });

},
addBurger: function(name, img, link, email){connection.query("INSERT INTO burgers (burger_name, burger_img, burger_res, eaten, email) VALUES (?,?,?,0,?);",[name,img,link, email], function(err, data){
    if (err) {
      console.log(err)
      
    }
    console.log("added burger")

  })
},
moveBurger: function(id){
    connection.query("UPDATE burgers SET eaten=1 WHERE id=?",[id], function(err, data){
      if (err) {
        console.log(err)
      }
    })
}
}






module.exports = orm;