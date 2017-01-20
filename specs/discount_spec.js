var basket = require("../basket");
var item = require("../item");
var Discount = require("../discount");
var assert = require("assert");

var item1 = new item ("apples", 0.21, false);
var item2 = new item ("oranges", 0.21, false);
var item3 = new item ("Talisker Storm", 25.00, false);
var item4 = new item ("milk", 1.45, true);
var item5 = new item ("cheese", 2.56, true);

var discount = new Discount();

describe("discount",function(){
  beforeEach(function(){
    basket.basketArray = [];
  });

  it("10% discount over £20", function(){
    basket.addItem(item3);
    assert.equal(2.50, discount.tenPercentDiscount(basket));
  });


  it("5% discount for loyalty card holders", function(){
    basket.addItem(item3);
    assert.equal(1.25, discount.loyaltyCardDiscount(basket));
  });


  it("bogof for even numbers of bogof items", function(){
    basket.addItem(item4);
    basket.addItem(item4);
    basket.addItem(item5);
    basket.addItem(item5);

    assert.equal(4.01, discount.bogof(basket));
  });


  it("bogof for odd numbers of bogof items", function(){
    basket.addItem(item4);
    basket.addItem(item4);
    basket.addItem(item4);
    basket.addItem(item5);
    basket.addItem(item5);

    assert.equal(4.01, discount.bogof(basket).toFixed(2));
    assert.equal(5.46, (basket.value() - discount.bogof(basket)).toFixed(2));
  });

  it("bogof work for a random basket", function(){
    basket.addItem(item1);
    basket.addItem(item3);
    basket.addItem(item4);
    basket.addItem(item4);
    basket.addItem(item4);
    basket.addItem(item5);
    basket.addItem(item5);
    assert.equal(3.468, discount.tenPercentDiscount(basket));
    assert.equal(1.734, discount.loyaltyCardDiscount(basket));
    assert.equal(4.01, discount.bogof(basket).toFixed(2));
    assert.equal(25.47, discount.allDiscounts(basket).toFixed(2));
  });



});