var Discount = function(){

}

Discount.prototype = {
  tenPercentDiscount: function(basket){
    if(basket.value() > 20){
    var tenDiscount = basket.value() * 0.1;
    };
    return tenDiscount;
  },

  loyaltyCardDiscount: function(basket){
    if(basket.hasLoyaltyCard === true){
      var loyaltyDiscount = basket.value() * 0.05;
    } else if (basket.hasLoyaltyCard === false){
      var loyaltyDiscount = 0;
    }
    return loyaltyDiscount;
  },

  bogof: function(basket){
        // creating an array of bogof items.
        var bogofItems = basket.basketArray.filter(function(item){
          return (item.bogof === true);
        });
        console.log("bogofItems Array:", bogofItems);
      
        // creating an array of bogof items by name.
        var bogofNames = bogofItems.map(function(item){
          return item.name;
        });
        console.log("bogofNames Array:", bogofNames);


        // creating a hashtable of bogof items and qty.
        var singleBogofType = bogofNames.reduce(function (accumulator, current) {
          if (typeof accumulator[current] == 'undefined') {
            accumulator[current] = 1;
          } else {
            accumulator[current] += 1;
          }
          return accumulator;
          }, {});
        console.log("bogof Type count Hash:", singleBogofType);


        // calculating the bogof reduction       
              var reduction = 0;
              console.log("init reduction", reduction);
                for (var item of bogofItems) {
                    reduction += (item.price * 0.5);
                    console.log(item.price);
                    }
                    console.log("stage1 reduction", reduction);
                  
                for (key in singleBogofType){
                  if ((singleBogofType[key] % 2) !== 0) {
                  console.log("ODD", key);
                  console.log("stage2 reduction", reduction);

                    for(var item of bogofItems){
                      if(key === item.name){
                        console.log(key);
                        console.log(item.price);
                        var oddPrice = item.price * 0.5;
                        console.log("oddPrice", oddPrice);
                      } 
                    }
                        reduction -= (oddPrice); 
                        console.log("stage3 reduction", reduction);
                  }
                }               
                return reduction;
                console.log(reduction);
                  
                
                
          bogofDiscount = basket.value() - reduction;
          return bogofDiscount;
      
   },
   allDiscounts: function(basket){

    var discount1= this.tenPercentDiscount(basket);

    var discount2 = this.loyaltyCardDiscount(basket);

    var discount3 = this.bogof(basket);

    var totalDiscounts = discount1 + discount2 + discount3;
    return basket.value() - totalDiscounts;

   }  
}

module.exports = Discount;