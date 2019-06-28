function deleteItem(e){
  let 
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var unitPrices = document.getElementsByClassName('unit-price')[0];
  var quantities = document.getElementsByClassName('quantity')[0]
  var subTotal = document.getElementsByClassName('subtotal')
  calculatePriceButton.addEventListener("click", function(event){

    
    let inputValue = document.getElementsByTagName("input")[0].value
    quantity.parseInt()
  })
}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
