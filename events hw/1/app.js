function createTable() {
  let numCols = prompt("Enter the number of columns:");
  let numRows = prompt("Enter the number of rows:");
  console.log(`numCols: ${numCols} , numRows: ${numRows}`);

  let table = document.createElement("table");

  for (let i = 0; i < numRows; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < numCols; j++) {
      let cell = document.createElement("td");
      cell.innerHTML = "Row-" + (i + 1) + " Column-" + (j + 1);
      row.appendChild(cell);
    }
    table.appendChild(row);
  }

  document.body.appendChild(table);
}

document.getElementById("create-table-btn").addEventListener("click", createTable);
console.log("table created successfully!");