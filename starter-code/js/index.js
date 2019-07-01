
if(document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
  
}

function ready(){
let deleteButtons = document.getElementsByClassName('btn-delete');
for (let i = 0; i < deleteButtons.length; i++) {
  var button = deleteButtons[i];
  button.addEventListener("click", deleteItem)
}
let quantityInputs = document.getElementsByClassName('quantity')
for (i = 0; i < quantityInputs.length; i ++) {
  let input = quantityInputs[i]
  input.addEventListener('change', quantityChanged)
}
let updatePriceButton = document.getElementById('calc-prices-button')
updatePriceButton.addEventListener("click", updateSubtotalPrice)
updatePriceButton.addEventListener("click", calculatePrices)

let createButton = document.getElementsByClassName('btn-create')[0]
  createButton.addEventListener('click', getValuesMakeRowAndThenDisplayNewItems)
}

function getValuesMakeRowAndThenDisplayNewItems() {
  //select, get values, make new row, call displayNewElements(the row you just made)
  let valueIneed = document.getElementById("input-name").value;
  let priceIneed = document.getElementById("input-price").value;
  let priceBox = parseFloat(priceIneed)
  let newRow = new Row(valueIneed, priceBox, 2, 0.00, "button")

  displayNewElements(newRow)
}

//FUNCTIONS
function deleteItem(e) {
  var buttonClicked = e.currentTarget
  buttonClicked.parentNode.parentNode.remove()
  updateSubtotalPrice()
  calculatePrices()
}

function quantityChanged (event) {
  let input = event.target
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1
  }
  updateSubtotalPrice()
  calculatePrices()
}

function updateSubtotalPrice (){
  let productsContainers = document.getElementsByClassName('ultimate-container')[0]
  let productRows = productsContainers.getElementsByClassName('product-row')


  for (let i = 0; i < productRows.length; i ++) {

    let subtotalPrice = 0
    let productRow = productRows[i]
    let priceElement = productRow.getElementsByClassName('unit-box')[0]
    let priceOfItem = parseFloat(priceElement.innerText.replace('$', ''))
    let quantity = productRow.getElementsByClassName('quantity')[0] 
    let inputValue = quantity.value
    let subtotal = document.getElementsByClassName('subtotal')[0].innerText.replace('$', '')
      
    subtotalPrice = parseInt(priceOfItem * inputValue)
    subtotalPrice = Math.round(subtotalPrice)
    productRow.getElementsByClassName('subtotal')[0].innerText = '$' + subtotalPrice;

  }

  }

  function calculatePrices () {
    let productsContainers = document.getElementsByClassName('ultimate-container')[0]
    let productRows = productsContainers.getElementsByClassName('product-row')
    let totalPrice = 0
    for (let i = 0; i < productRows.length; i++) {
      let productRow = productRows[i]
      totalPrice += parseInt(productRow.getElementsByClassName('subtotal')[0].innerText.replace('$', ''))
    }
    document.getElementsByClassName('price')[0].innerText = '$' + totalPrice

}

//creating an element
let row = {
  name: '<name>',
  price: '<price>',
  quantity: '<quantity>',
  subtotal: '<subtotal>',
  button: '<button>'
};
typeof row.toString();
console.log(row);

function Row(name, price, quantity, subtotal, button) {
  this.name = name;
  this.price = price;
  this.quantity= quantity;
  this.subtotal = subtotal;
  this.button = button;
  toString = function () {
    return 'Name: ' + this.name + ',' +
      ' price: ' + this.price + ',' + ' quantity ' + this.quantity + ',' +
      ' subtotal: ' + this.subtotal + ' button ' + this.button
    }
  }
let arrayOfRows = [
  new Row('IronBubble-head', "25.00", 2, 0.00, "button"),
  new Row('IronShirt', "15.00", 1, 0.00, "button"),
  new Row('IronCup', "10.00", 1, 0.00, "button"),
  new Row('IronSticker', "1.00", 2, 0.00, "button"),
  new Row('IronAxe', "10.00", 1, 0.00, "button"),
  new Row('IronPen', "15.00", 1, 0.00, "button"),
  new Row('IronMug', "30.00", 2, 0.00, "button"),
]
function RowList (rows) {
  this.allRows = rows;
}

function displayNewElements (row) {
  let displayButton = document.createElement('button');
  displayButton.className = 'btn btn-delete';
  displayButton.textContent = 'DELETE';
  displayButton.addEventListener('click', deleteItem);

  let buttonDiv = document.createElement('div');
  buttonDiv.appendChild(displayButton);

  let displaySubtotal = document.createElement('span');
  displaySubtotal.className = 'subtotal';
  displaySubtotal.textContent = '$ 0.00';

  let subtotalDiv = document.createElement('div');
  subtotalDiv.appendChild(displaySubtotal);

  let dispalyQuantity = document.createElement('input');
  dispalyQuantity.className = 'quantity';
  dispalyQuantity.type = 'number';
  dispalyQuantity.value = row.quantity;
  let displayLabel = document.createElement('label');
  displayLabel.textContent = 'QTY';

  let quantityDiv = document.createElement('div');
  quantityDiv.className = 'input-container'
  quantityDiv.appendChild(displayLabel);
  quantityDiv.appendChild(dispalyQuantity);

  
  let priceDisplay = document.createElement('span');
  priceDisplay.className = 'unit-box';
  priceDisplay.textContent = '$' + row.price;
  let nameDisplay = document.createElement('span');
  nameDisplay.className = 'product-title';
  nameDisplay.textContent = row.name;
  

  let displayRow = document.createElement('div');
  displayRow.className = 'product-row'
  displayRow.appendChild(nameDisplay);
  displayRow.appendChild(priceDisplay);
  displayRow.appendChild(quantityDiv);
  displayRow.appendChild(subtotalDiv);
  displayRow.appendChild(buttonDiv);

  document.querySelector('.ultimate-container').appendChild(displayRow);
}

let rows = new RowList();
for (i = 0; i < arrayOfRows.length; i++) { //Initialization
  displayNewElements(arrayOfRows[i]);
}

