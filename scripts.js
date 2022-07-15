class fruitPurchases {
  constructor(price, fruitName, fruitsQuantity) {
    this.price = price;
    this.fruitName = fruitName;
    this.fruitsQuantity = fruitsQuantity;
    this.totalprice = function (fruitname, quantity) {
      let total = price * quantity;
      return `${quantity} ${fruitname} for shillings ${total}`;
    };
  }
}
console.log(fruitPurchases.totalPrice());

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
var kiosk = new kiosk("Orange", 2);
console.log(KioskCalc.getTotals())
