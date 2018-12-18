let eggs = {
  itemName: 'dozen eggs',
  quantity: 2,
  price: 0.99
}

let milk = {
  itemName: 'gallon of milk',
  quantity: 1,
  price: 2.99
}

let bread = {
  itemName: 'loaf of bread',
  quantity: 1,
  price: 3.50
}

let coffee = {
  itemName: 'lbs. of coffee',
  quantity: 10,
  price: 8.99
}

let shoppingCart = [eggs, milk, bread, coffee];

// your code, here
console.log(`The price of one pound of coffee is ${shoppingCart[3].price}`);

let subtotal;
shoppingCart.forEach(item=>{
  subtotal = item.price * item.quantity;
})

let total = subtotal + subtotal* 0.0625;

console.log(subtotal);
console.log(Math.ceil(total));
