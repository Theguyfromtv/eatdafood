let orm = require("../config/orm");


let burger = {



    burgerObject: function(cb){
        let showBurgers={uneatenBurgers: "placeholder", burgers:"placeholder"}
        orm.loadPage1(function(data){
            showBurgers.eatenBurgers=data;

            cb(showBurgers)
        })
    },
    burgerObject2: function(cb){
        orm.loadPage2(function(data){
            burger.burgerObject(function(showBurgers){
                showBurgers.burgers=data;
                cb(showBurgers)
                console.log(showBurgers)
        })
        
            
        })
    },
    addBurger: function(name, img, link){
        orm.addBurger(name, img, link)
    }
}
 
    

    



module.exports = burger;

