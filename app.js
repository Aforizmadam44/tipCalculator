const billInput = document.getElementById("billInput");
const peopleInput = document.getElementById("peopleInput");
const tip = document.querySelectorAll(".btn");
const custom = document.getElementById("custom");
const changedAmount1 = document.getElementById("changedAmount1");
const changedAmount2 = document.getElementById("changedAmount2");
const resetBtn = document.querySelector(".resetBtn");
const error = document.getElementById("error");

tip.forEach((e) => {
  e.addEventListener("click", (e) => {
    e.preventDefault();
    let percentage, total;
    let discountValue = e.target.textContent.trim();

    percentage = (parseInt(discountValue) / 100) * billInput.value;
    changedAmount1.textContent = parseFloat(
      percentage / peopleInput.value
    ).toFixed(2);
    total =
      billInput.value / peopleInput.value + percentage / peopleInput.value;
    changedAmount2.textContent = parseFloat(total.toFixed(2));

    if (peopleInput.value == 0) {
      error.style.display = "block";
      peopleInput.style.border = "1px solid  rgb(167, 37, 37)";
    } else {
      error.style.display = "none";
      peopleInput.style.border = "default";
    }
  });
});

custom.addEventListener("input", function () {
  let reqem = parseFloat(custom.value);
  let yuzde = (billInput.value * reqem) / 100 / peopleInput.value;
  changedAmount1.textContent = yuzde;
  changedAmount2.textContent = billInput.value / peopleInput.value + yuzde;
});

resetBtn.addEventListener("click", () => {
  changedAmount1.textContent, (changedAmount2.textContent = "$0.00");
  peopleInput.value = "0";
  billInput.value = "0";
});
