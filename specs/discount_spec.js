var basket = require("../basket");
var item = require("../item");
var discount = require("../discount");
var assert = require("assert");

var item1 = new item ("apples", 0.21, false);
var item2 = new item ("oranges", 0.21, false);
var item3 = new item ("Talisker Storm", 25.00, false);
var item4 = new item ("milk", 1.45, true);



describe("discount",function(){
  beforeEach(function(){
    basket.basketArray = [];
  });

  it("10% discount over £20", function(){
    basket.addItem(item3);
    assert.equal(22.50, discount.tenPercentDiscount(basket));
  });


  it("5% discount for loyalty card holders", function(){
    basket.addItem(item3);
    assert.equal(23.75, discount.loyaltyCardDiscount(basket));
  });


  it("bogof", function(){
    basket.addItem(item4);
    // discount.bogof(basket);
    console.log(item4);
    console.log(basket.basketArray);
    assert.equal(1.45, basket.value());
  });


});