/**
 * @author Alvaro Fonseca Hernandez
 * @github
 */

document.addEventListener("DOMContentLoaded", function (event) {
  const table = document.getElementById("inventTable");
  const btnAdd = document.getElementById("btn-add");
  const btnEdit = document.getElementById("btn-edit");
  const btnDel = document.getElementById("btn-delete");
  const btnSearch = document.getElementById("btn-search");
  const btnTotal = document.getElementById("btn-total");
  const search = document.getElementById("search");

  let stock = [
    { id: 1, name: "camisetas", amount: 50, price: 15 },
    { id: 2, name: "pantalones", amount: 30, price: 30 },
    { id: 3, name: "zapatos", amount: 20, price: 50 },
  ];

  const updateTable = () => {
    table.innerHTML = "";
    stock.forEach((element) => {
      let newRow = `
      <tr class="cell">
        <td>${element.id}</td>
        <td>${element.name}</td>
        <td>${element.amount} uds</td>
        <td>${element.price}€</td>
      </tr>
    `;
      table.innerHTML += newRow;
    });
  };

  const selectRow = () => {
    stock.forEach((element, i) => {
      table.rows[i].onclick = () => {
        table.rows[i].classList.toggle("found");
      };
    });
  };

  const addToInventory = () => {
    let itemId;
    if (stock.length === 0) {
      itemId = 1;
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
      if (itemAmount <= 0 || itemPrice < 0) {
        alert("Introduce valores válidos");
      } else {
        const newItem = {
          id: itemId,
          name: itemName,
          amount: itemAmount,
          price: itemPrice.toFixed(2),
        }; //structured item to add to inventory

        stock.push(newItem);
        console.log(newItem.name + " added to stock");
        document.getElementById("name").value = "";
        document.getElementById("amount").value = "";
        document.getElementById("price").value = "";

        updateTable();
      }
    }
  };

  const deleteProduct = () => {
    const pro = search.value.toLowerCase();
    let productFound = false;
    stock.forEach((element, i) => {
      if (
        element.name.toLowerCase() === pro ||
        table.rows[i].classList.contains("found")
      ) {
        console.log(pro);
        stock.splice(i, 1);
        search.value = "";
        productFound = true;
      }
    });
    productFound
      ? console.log("El producto ha sido eliminado del stock")
      : console.log("Producto no encontrado");
    updateTable();
    console.log(stock);
    search.value = "";
  };

  const searchProduct = () => {
    updateTable();
    const pro = search.value.toLowerCase();
    let productFound = false;
    if (pro === "") {
      alert("Introduzca un valor de busqueda");
    } else {
      stock.forEach((element, i) => {
        const currentRow = table.rows[i];
        if (element.name.toLowerCase() === pro) {
          currentRow.classList.add("found");
          console.log(table.innerHTML);
          console.log(currentRow);
          //search.value = "";
          productFound = true;
        }
      });
      productFound ? null : console.log("Producto no encontrado");
      //search.value = "";
    }
  };

  const totalPrice = () => {
    updateTable();
    let totalPrice = 0;
    stock.forEach((element) => {
      console.log("Precio " + element.name + ": " + element.price);

      totalPrice += element.amount * element.price;
    });
    let priceRow = table.insertRow();
    priceRow.innerHTML = `
      <tr>
        <td colspan="3">Precio total inventario:</td>
        <td>${totalPrice}€</td>
      </tr>
    `;

    console.log("PRECIO TOTAL INVENTARIO: " + totalPrice);
  };

  btnAdd.addEventListener("click", addToInventory);
  btnDel.addEventListener("click", deleteProduct);
  btnSearch.addEventListener("click", searchProduct);
  btnTotal.addEventListener("click", totalPrice);
  updateTable();
  selectRow();

  //Allows you to use the numpad and keyboard to interact with the calculator
  document.addEventListener("keydown", function (event) {
    switch (event.key) {
      case "Enter":
        addToInventory();
        break;
    }
  });
});
