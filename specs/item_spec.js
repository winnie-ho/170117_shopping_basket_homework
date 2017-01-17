var item = require("../item");
var assert = require("assert");

describe("item",function(){
  it("item should have name", function(){
    var item1 = new item("Gin", 15, false);
    assert.equal("Gin", item1.name);
  });

  it("item should have price", function(){
    var item1 = new item("Gin", 15, false);
    assert.equal(15, item1.price);
  });

  it("item should have bogof", function(){
    var item1 = new item("Gin", 15, false);
    assert.equal(false, item1.bogof);
  });
});