var burger = require("../models/burger");

var express = require("express");



var router = express.Router();

router.get("/", function(req, res,) {
    let data1;
    let data2;
    burger.burgerObject2(function(data){
        console.log(data)

        res.render("index", data);
    })

    
});


module.exports = router;