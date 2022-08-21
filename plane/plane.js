const plane = document.querySelector(".plane");
const count = document.getElementById("count");
const amount = document.getElementById("amount");
const select = document.getElementById("city");
const cityPrices = [20, 25, 30];
const SPECIAL_SEAT_FEE = 20;

plane.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("reserved")
  ) {
    e.target.classList.toggle("selected");
    calculateTotal();
  }
});

select.addEventListener("change", function (e) {
  calculateTotal();
});

function calculateTotal() {
  // Seat count calculations
  const specialSelectedSeatCount = getSpecialSelectedSeatCount();
  const standardSelectedSeatCount =
    getTotalSelectedSeatCount() - specialSelectedSeatCount;

  // Price calculations
  const price = cityPrices[parseInt(select.value)];
  const specialPrice = price + SPECIAL_SEAT_FEE;
  const standartTotalPrice = standardSelectedSeatCount * price;
  const specialTotalPrice = specialSelectedSeatCount * specialPrice;
  const totalPrice = standartTotalPrice + specialTotalPrice;

  // Inner text section
  count.innerText = standardSelectedSeatCount + specialSelectedSeatCount;
  amount.innerText = totalPrice;
}

function getSpecialSelectedSeatCount() {
  return plane.querySelectorAll(".seat.selected.special").length;
}

function getTotalSelectedSeatCount() {
  return plane.querySelectorAll(".seat.selected").length;
}
