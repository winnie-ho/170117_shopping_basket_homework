var discount = {
  tenPercentDiscount: function(basket){
    if(basket.value() > 20){
    var newValue = basket.value() * 0.9;
    };
    return newValue;
  },

  loyaltyCard: function(basket){
    if(basket.hasLoyaltyCard === true){
      var newValue = basket.value() * 0.95;
    };
    return newValue;
  }

}

module.exports = discount;