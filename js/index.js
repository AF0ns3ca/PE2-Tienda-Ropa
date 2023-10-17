const btnShow = document.getElementById("btn-show");
const btnAdd = document.getElementById("btn-add");
const btnTotal = document.getElementById("btn-total");

let stock = [
  { id: 1, name: "Camisetas", amount: 50, price: 15 },
  { id: 2, name: "Pantalones", amount: 30, price: 30 },
  { id: 3, name: "Zapatos", amount: 20, price: 50 },
];

/* btnAdd.addEventListener("click", function(){
    const itemId = 4; //id autoincrement
    const itemName = "Gorra"; //name input
    const itemAmount = 100; //amount input
    const itemPrice = 20; //price input

    const newItem = {
      id: itemId,
      name: itemName,
      amount: itemAmount,
      price: itemPrice,
    }; //structured item to add to inventory

    stock.push(newItem);
    console.log("Item added to stock");
  });*/

/* btnShow.addEventListener("click", function(){
    stock.forEach((element) => {
        console.log(element);
      });
  });*/

/*btnTotal.addEventListener("click", function(){
    let totalPrice = 0;
    stock.forEach((element) => {
      totalPrice += element.price;
    });

    console.log(totalPrice);
  });*/

const showInventory = () => {
  stock.forEach((element) => {
    console.log(element);
  });
};

const addToInventory = () => {
  const itemId = 4; //id autoincrement
  const itemName = "Gorra"; //name input
  const itemAmount = 100; //amount input
  const itemPrice = 20; //price input

  const newItem = {
    id: itemId,
    name: itemName,
    amount: itemAmount,
    price: itemPrice,
  }; //structured item to add to inventory

  stock.push(newItem);
  console.log("Item added to stock");
};

const totalPrice = () => {
  let totalPrice = 0;
  stock.forEach((element) => {
    console.log("Precio " + element.name + ": " + element.price);
    totalPrice += element.price;
  });

  console.log("PRECIO TOTAL INVENTARIO: " + totalPrice);
};

//const searchProduct = () => {};

//const updateInventory = () => {};

//const deleteProduct = () => {};

//btnAdd.addEventListener("click", addToInventory());
//btnTotal.addEventListener("click", totalPrice(stock));
//btnShow.addEventListener("click", showInventory(stock));
