document.addEventListener("DOMContentLoaded", function (event) {
  const btnShow = document.getElementById("btn-show");
  const btnAdd = document.getElementById("btn-add");
  const btnTotal = document.getElementById("btn-total");
  const btnSearch = document.getElementById("btn-search");
  const btnDel = document.getElementById("btn-delete");
  const search = document.getElementById("search");


  let stock = [
    { id: 1, name: "camisetas", amount: 50, price: 15 },
    { id: 2, name: "pantalones", amount: 30, price: 30 },
    { id: 3, name: "zapatos", amount: 20, price: 50 },
  ];

  const showInventory = () => {
    stock.forEach((element) => {
      console.log(element);
    });
  };

  const addToInventory = () => {
    let itemId;
    if (stock.length === 0) {
      itemId = 0;
    } else {
      itemId = stock[stock.length - 1].id + 1; //id autoincrement
    }
    console.log(itemId);
    //name input
    const itemName = document.getElementById("name").value.toLowerCase();
    console.log(itemName);
    //amount input
    const itemAmount = parseFloat(document.getElementById("amount").value);
    console.log(itemAmount);
    //price input
    const itemPrice = parseFloat(document.getElementById("price").value);
    console.log(itemPrice);

    if (itemName === "" || isNaN(itemAmount) || isNaN(itemPrice)) {
      alert("Todos los campos son obligatorios");
    } else {
      const newItem = {
        id: itemId,
        name: itemName,
        amount: itemAmount,
        price: itemPrice,
      }; //structured item to add to inventory

      stock.push(newItem);
      console.log(newItem.name + " added to stock");
      document.getElementById("name").value = "";
      document.getElementById("amount").value = "";
      document.getElementById("price").value = "";
    }
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
    let productFound = false;
    if (pro === "") {
      alert("Introduzca un valor de busqueda");
    } else {
      stock.forEach((element) => {
        if (element.name.toLowerCase() === pro) {
          console.log("Producto: " + element.name);
          console.log("Cantidad en stock: " + element.amount + " unidades");
          console.log("Precio por unidad: " + element.price + "€");
          const searchResult = document.getElementById("searchResult");
          searchResult.innerHTML = `
            <span>Producto: ${element.name}</span>
            <span>Cantidad en Stock: ${element.amount} unidades</span>
            <span>Precio por Unidad: ${element.price}€</span>
          `;
          search.value = "";
          productFound = true;
        }
      });
      productFound ? null : console.log("Producto no encontrado"); searchResult.innerHTML = `<span>Producto no encontrado</span>`;
      search.value = "";
    }
  };

  //const updateInventory = () => {};

  const deleteProduct = () => {
    const pro = search.value.toLowerCase();
    let productFound = false;
    if (pro === "") {
      alert("Introduzca un valor de busqueda");
    } else {
      stock.forEach((element) => {
        if (element.name.toLowerCase() === pro) {
          stock.pop(element);
          search.value = "";
          productFound = true;
        }
      });
      productFound
        ? console.log("El producto ha sido eliminado del stock")
        : console.log("Producto no encontrado");
      search.value = "";
    }
  };

  btnShow.addEventListener("click", showInventory);
  btnAdd.addEventListener("click", addToInventory);
  btnTotal.addEventListener("click", totalPrice);
  btnSearch.addEventListener("click", searchProduct);
  btnDel.addEventListener("click", deleteProduct);

  //Allows you to use the numpad and keyboard to interact with the calculator
  document.addEventListener("keydown", function (event) {
    switch (event.key) {
      case "Enter":
        addToInventory();
        break;
    }
  });
});
