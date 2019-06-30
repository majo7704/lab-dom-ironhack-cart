
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
}

//FUNCTIONS
function deleteItem(e) {
  var buttonClicked = e.target
  buttonClicked.parentNode.parentNode.remove()
  updateSubtotalPrice()
}

function quantityChanged (event) {
  let input = event.target
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1
  }
  updateSubtotalPrice()
}

function updateSubtotalPrice (){
  let productsContainers = document.getElementsByClassName('ultimate-container')[0]
  let rows = productsContainers.getElementsByClassName('product-row')
  let subtotalPrice = 0
  for (let i = 0; i < rows.length; i ++) {
    let row = rows[i]
    let unitPrice = row.getElementsByClassName('unit-box')[0]
    let priceOfItem = parseFloat(unitPrice.innerText.replace('$', ''))
    let quantity = row.getElementsByClassName('quantity')[0]  
    let inputValue = quantity.value
    subtotalPrice = subtotalPrice + (priceOfItem * inputValue)
  }
  let subtotal = document.getElementsByClassName('subtotal')[0].innerText.replace('$', '')
    let priceOfUnits = parseFloat(subtotal)
  console.log(priceOfUnits)
  }
