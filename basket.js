var basket = {
  basketArray: new Array(),

  addItem: function(item){
    this.basketArray.push(item);
    // console.log(item.name, "has been added")
  },

  removeItem: function(item){
    var removeIndex = this.basketArray.indexOf(item.name);
    this.basketArray.splice(removeIndex,1);
    // console.log(item.name, "has been removed")
  },

  value: function(){
    var total = 0;
    for (var item of this.basketArray){
      total += item.price;
    }
    return total;
  },

  hasLoyaltyCard: false
  

};


module.exports = basket;


// Shopping Basket Lab
// We need to find the price of a shopping basket. A shopping basket can have multiple items. It should be able to add and remove items.

// Discounts:

// 10% discount for all shopping baskets over £20
// If the customer has a valid discount card then they get an additional 5% off.
// Extension (hard!) Add the ability to have buy one get one free items.