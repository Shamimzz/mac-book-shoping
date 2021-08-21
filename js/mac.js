
// Total calculation for product....
function totalCalculation(){
  const bestBriceText = document.getElementById('best-price').innerText;
  const bestBrice = parseFloat(bestBriceText);
  const Memorytext = document.getElementById('memory-cost').innerText;
  const MemoryCost = parseFloat(Memorytext);
  const storageText = document.getElementById('storage-cost').innerText;
  const storageCost = parseFloat(storageText);
  const deliveryText = document.getElementById('delivery-cost').innerText;
  const deliveryCost = parseFloat(deliveryText);
  // all product addition.
  const total = bestBrice+MemoryCost+storageCost+deliveryCost;
  // Price Total
  const totalPrice = document.getElementById('total-cost');
  totalPrice.innerText = total;
  //Grand total.
  const totalGrand = document.getElementById('total-grand');
  totalGrand.innerText = total;
}


// Memory,Storage & Delevery function declaration....
function getInputValue (putIdOf, cost) {
  const costOfProduct = document.getElementById(putIdOf + '-cost');
  costOfProduct.innerText = cost;
  totalCalculation();
}

// Apply promo code for discount....
function getCoupon(text){
  const couponText = document.getElementById('couponText');
  if (couponText.value == text) {
    const subTotalElement = document.getElementById('total-cost');
    const totalElement = document.getElementById('total-grand');
    const subTotal = subTotalElement.innerText;
    // 20% discount useing coupon.
    const grandTotal = subTotal - (subTotal * 20 / 100);
    totalElement.innerText = grandTotal;
    couponText.value = '';
   }else{ 
    couponText.value = '';
   }
}

// declaring event handeler Memory Storage....
document.getElementById('8BG').addEventListener('click', function(){
getInputValue('memory', 0);
})
document.getElementById('16GB').addEventListener('click', function(){
getInputValue('memory', 180);
})

// declaring event handeler Storage space....
document.getElementById('256GB').addEventListener('click', function(){
    getInputValue('storage', 0);
})
document.getElementById('512GB').addEventListener('click', function(){
    getInputValue('storage', 100);
})
document.getElementById('1TB').addEventListener('click', function(){
    getInputValue('storage', 180);
})

// declaring event handeler Delivery....
document.getElementById('Free-Delivery').addEventListener('click', function(){
   getInputValue('delivery', 0);
})
document.getElementById('charge-Delivery').addEventListener('click', function(){
   getInputValue('delivery', 20);
})

// Apply promo code for discount....
document.getElementById('Apply').addEventListener('click', function(){
  getCoupon('stevekaku');
})