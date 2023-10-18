document.addEventListener("DOMContentLoaded", function (event) {
  const table = document.getElementById("inventTable");
  const btnAdd = document.getElementById("btn-add");

  let stock = [
    { id: 1, name: "camisetas", amount: 50, price: 15 },
    { id: 2, name: "pantalones", amount: 30, price: 30 },
    { id: 3, name: "zapatos", amount: 20, price: 50 },
  ];

  const updateTable = () => {
    table.innerHTML = "";
    stock.forEach((element) => {
      let newRow = `
      <tr>
        <td>${element.id}</td>
        <td>${element.name}</td>
        <td>${element.amount}</td>
        <td>${element.price}</td>
      </tr>
    `;
      table.innerHTML += newRow;
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

      updateTable();
    }
  };

  btnAdd.addEventListener("click", addToInventory);
  updateTable();
});
