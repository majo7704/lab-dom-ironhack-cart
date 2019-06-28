if(document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}
function ready(){
let removeButtons = document.getElementsByClassName('btn-delete');

for (let i = 0; i < removeButtons.length; i++) {
  var button = removeButtons[i];
  button.addEventListener("click", function deleteItem(e) {
  var buttonClicked = e.currentTarget
  buttonClicked.parentElement.parentElement.remove()
  calculateTotalPrice()
})

}
}
function calculateTotalPrice (){
  let productContainer = document.getElementsByClassName('ultimate-container')[0]
  let productRows = productContainer.getElementsByClassName('product-box')
  let total = 0
  debugger;
  for (var i =0; i < productRows.length; i++){
    let productRow = productRows[i]
    let priceProduct = productRow.getElementsByClassName('unit-box')[0]
    let quantities = productRow.getElementsByClassName('quantity')[0]
    let price = parseFloat(priceProduct.innerHTML.replace('$', ''))
    let quantity = quantities.value
    total =+ (price * quantity)
  }
  let tot = document.getElementsByClassName('subtotal')[0].innerText.replace('$', '')
  tot = '$' + total
}
document.getElementById('calc-prices-button').addEventListener("click", calculateTotalPrice());

