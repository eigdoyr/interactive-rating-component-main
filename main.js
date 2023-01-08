const form = document.querySelector("#rate-form");
const successCard = document.querySelector(".rate-card");
const submitCard = document.querySelector(".submit-card");
let rateSelected = document.querySelector("#rate-selected");
let rating = document.getElementsByName("rating");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let selected = Array.from(rating).find((rate) => rate.checked);
  rateSelected.innerHTML = selected.value;

  successCard.classList.remove("hidden");
  submitCard.classList.add("hidden");
});
