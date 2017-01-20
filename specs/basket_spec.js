var basket = require("../basket");
var item = require("../item");
var assert = require("assert");

var item1 = new item ("apples", 0.21, false);
var item2 = new item ("oranges", 0.21, true);
var item3 = new item ("bread", 0.76, false);


describe("basket",function(){
  beforeEach(function(){
    basket.basketArray = [];
  });

  it("can add items to basket", function(){
    basket.addItem(item1);
    basket.addItem(item2);
    assert.equal(2, basket.basketArray.length);
  });

  it("can remove items from basket", function(){
    basket.addItem(item1);
    basket.addItem(item2);
    basket.addItem(item1);
    basket.removeItem(item3);
    assert.equal(2, basket.basketArray.length);
  });

  it("can return value of basket", function(){
    basket.addItem(item1);
    basket.addItem(item2);
    // console.log(basket.basketArray);
    assert.equal(0.42, basket.value());
  });

  it("has loyalty card", function(){
    assert.equal(true, basket.hasLoyaltyCard);
    // console.log(basket.hasLoyaltyCard);
  });




});

