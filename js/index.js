const btnShow = document.getElementById("btn-show");
const btnAdd = document.getElementById("btn-add");
const btnTotal = document.getElementById("btn-total");
const btnSearch = document.getElementById("btn-search");
const btnDel = document.getElementById("btn-delete");
const search = document.getElementById("search");

let stock = [
  { id: 1, name: "Camisetas", amount: 50, price: 15 },
  { id: 2, name: "Pantalones", amount: 30, price: 30 },
  { id: 3, name: "Zapatos", amount: 20, price: 50 },
];

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

const searchProduct = () => {
  const pro = search.value.toLowerCase();
  if (pro === "") {
    alert("Introduzca un valor de busqueda");
  } else {
    stock.forEach((element) => {
      if (element.name.toLowerCase() === pro) {
        console.log("Producto: " + element.name);
        console.log("Cantidad en stock: " + element.amount + " unidades");
        console.log("Precio por unidad: " + element.price + "€");
        search.value = "";
        return;
      }
    });
    console.log("Producto no econtrado");
    search.value = "";
  }
};

//const updateInventory = () => {};

const deleteProduct = () => {
  const pro = search.value.toLowerCase();
  if (pro === "") {
    alert("Introduzca un valor de busqueda");
  } else {
    stock.forEach((element) => {
      if (element.name.toLowerCase() === pro) {
        stock.pop(element);
        search.value = "";
        return;
      }
    });
    console.log("Producto no econtrado");
    search.value = "";
  }
};

btnShow.addEventListener("click", showInventory);
btnAdd.addEventListener("click", addToInventory);
btnTotal.addEventListener("click", totalPrice);
btnSearch.addEventListener("click", searchProduct);
btnDel.addEventListener("click", deleteProduct);
