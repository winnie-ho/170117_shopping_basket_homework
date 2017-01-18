var discount = {
  tenPercentDiscount: function(basket){
    if(basket.value() > 20){
    var newTotal = basket.value() * 0.9;
    };
    return newTotal;
  },

  loyaltyCardDiscount: function(basket){
    if(basket.hasLoyaltyCard === true){
      var newTotal1 = basket.value() * 0.95;
    } else if (basket.hasLoyaltyCard === false){
      var newTotal1 = basket.value();
    }
    return newTotal1;
  },

  bogof: function(basket){
    for (var item of basket.basketArray){
      if(item.bogof === true){
        item.price = (item.price * 0.5);
      }
    } 
  }

}

module.exports = discount;