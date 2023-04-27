const PizzaShop = require("./pizza-shop");
const DrinkMachine = require("./drink-machine");

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

pizzaShop.on("order", (size, topping) => {
  console.log(`Order received, baking a ${size} pizza with ${topping}.`);
  drinkMachine.serveDrink(size);
});

pizzaShop.order("large", "cheese");
pizzaShop.displayOrderNumber();
pizzaShop.order("small", "pepperoni");
pizzaShop.displayOrderNumber();
