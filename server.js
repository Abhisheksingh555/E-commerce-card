function changeImage(smallImg) {
  let mainImg = document.getElementById("mainImg");
  mainImg.src = smallImg.src;

  let thumbs = document.querySelectorAll(".thumbnail-row img");
  thumbs.forEach((img) => img.classList.remove("active-thumb"));
  smallImg.classList.add("active-thumb");
}

// Change price
const basePrice = 499.99;
let qtyInput = document.getElementById("qty");
let priceDisplay = document.getElementById("price");

document.getElementById("up").addEventListener("click", function () {
  let qty = parseInt(qtyInput.value);
  qty++;
  qtyInput.value = qty;
  priceDisplay.textContent = "$" + (qty * basePrice).toFixed(2);
});

document.getElementById("down").addEventListener("click", function () {
  let qty = parseInt(qtyInput.value);
  if (qty > 1) {
    qty--;
    qtyInput.value = qty;
    priceDisplay.textContent = "$" + (qty * basePrice).toFixed(2);
  }
});
