let orm = require("../config/orm");


let burger = {



    burgerObject: function(email, cb){
        let showBurgers={eatenBurgers: "placeholder", burgers:"placeholder"}
        orm.loadPage1(email,function(data){
            showBurgers.eatenBurgers=data;

            cb(showBurgers)
        })
    },
    burgerObject2: function(email, cb){
        orm.loadPage2(email,function(data){
            burger.burgerObject(email, function(showBurgers){
                showBurgers.burgers=data;
                cb(showBurgers)
                console.log(showBurgers.burgers)
                //console.log(showBurgers)
        })
        
            
        })
    },
    addBurger: function(name, img, link, email){
        orm.addBurger(name, img, link, email)
    },

    moveBurger: function (id){
        orm.moveBurger(id)
    }
}
 
    

    



module.exports = burger;

