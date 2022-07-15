class fruitPurchases {
  constructor(price, fruitName, fruitsQuantity) {
    this.price = price;
    this.fruitName = fruitName;
    this.fruitsQuantity = fruitsQuantity;
    this.getTotalprice = function (fruitName, quantity) {
      let total = price * quantity;
      return `${fruitsqQuantity} ${fruitName} for shillings ${total}`;
    };
  }
}
var fruit= new fruitPurchases(30,"Mango",3)
console.log(fruit.getTotalPrice());

class KioskCalc {
  constructor(fruit, quantity) {
    this.fruit = fruit;
    this.quantity = quantity;
    this.fruitPriceList = { Orange: 30, mango: 15, Avocado: 40 };
    this.getTotals = function () {
      return `${quantity} ${fruit} for shillings ${quantity * this.price}`;
    };
  }
}
var kiosk = new KioskCalc("Orange", 2);
console.log(kiosk.getTotals())
