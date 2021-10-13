// Object property shorthand

const name = "Yago";
const userAge = 25;

const user = {
  name,
  age: userAge,
  location: "Boston",
};

console.log(user);

// Object destructuring
const product = {
  label: "Red notebook",
  price: 3,
  stock: 201,
};

// const price = product.price;

const { label: productLabel, price } = product;

console.log(productLabel);
console.log(price);
