var burger = require("../models/burger");

var express = require("express");



var router = express.Router();

router.get("/", function (req, res){
    res.render("email");
})


router.get("/email=:email", function(req, res,) {

    burger.burgerObject2(req.params.email, function(data){
        console.log(data)
        res.render("index", data);
    })

    
});

router.post("/api/addBurger/:email", function(req, res){
    burger.addBurger(req.body.label, req.body.image, req.body.link, req.params.email);
    res.send("burger added!")
})

router.put("/api/moveBurger", function(req, res){
    burger.moveBurger(req.body.data);
    res.send("burger moved!")

  })

    


module.exports = router;