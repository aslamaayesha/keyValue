let keyValuePairs = {};

function storeKeyValue() {
  let key = document.getElementById("key").value;
  let value = document.getElementById("value").value;
  if (key && value) {
    keyValuePairs[key] = value;
    document.getElementById("key").value = "";
    document.getElementById("value").value = "";
  }
}

function lookupValue() {
  let key = document.getElementById("key").value;
  let valueField = document.getElementById("value");
  if (key in keyValuePairs) {
    valueField.value = keyValuePairs[key];
  } else {
    valueField.value = "";
  }
}

function printTable() {
  let table = document.getElementById("table");
  table.innerHTML = "";
  for (let key in keyValuePairs) {
    let row = table.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.innerHTML = key;
    cell2.innerHTML = keyValuePairs[key];
  }
}

function clearTable() {
  keyValuePairs = {};
  document.getElementById("table").innerHTML = "";
}
