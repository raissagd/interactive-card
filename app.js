const cardNumber = document.getElementById("number");
const numberInp = document.getElementById("card-number");

const nameInp = document.getElementById("card-name");
const cardName = document.getElementById("name");

const cardMonth = document.getElementById("month");
const monthInp = document.getElementById("card-month");

const cardYear = document.getElementById("year");
const yearInp = document.getElementById("card-year");

const cardCvc = document.getElementById("cvc");
const cvcInp = document.getElementById("card-cvc");

const submitBtn = document.getElementById("submit-btn");
const completed = document.querySelector(".successful");
const buttonContinue = document.getElementById("continue");

const form = document.querySelector("form");

function setCardNumber(e) {
  cardNumber.innerText = format(e.target.value);
}
function setCardName(e) {
  cardName.innerText = format(e.target.value);
}
function setCardMonth(e) {
  cardMonth.innerText = format(e.target.value);
}
function setCardYear(e) {
  cardYear.innerText = format(e.target.value);
}
function setCardCvc(e) {
  cardCvc.innerText = format(e.target.value);
}

function handleSubmit(e) {
  e.preventDefault();
  if (!nameInp.value) {
    nameInp.classList.add("error");
    nameInp.parentElement.classList.add("error-message");
  } else {
    nameInp.classList.remove("error");
    nameInp.parentElement.classList.remove("error-message");
  }
  if (!numberInp.value) {
    numberInp.classList.add("error");
    numberInp.parentElement.classList.add("error-message");
  } else if (numberInp.value.length < 16) {
    numberInp.classList.add("error");
  } else {
    numberInp.classList.remove("error");
    numberInp.parentElement.classList.remove("error-message");
  }
  if (!monthInp.value) {
    monthInp.classList.add("error");
    monthInp.parentElement.classList.add("error-message");
  } else {
    monthInp.classList.remove("error");
    monthInp.parentElement.classList.remove("error-message");
  }
  if (!yearInp.value) {
    yearInp.classList.add("error");
    yearInp.parentElement.classList.add("error-message");
  } else {
    yearInp.classList.remove("error");
    yearInp.parentElement.classList.remove("error-message");
  }
  if (!cvcInp.value) {
    cvcInp.classList.add("error");
    cvcInp.parentElement.classList.add("error-message");
  } else {
    cvcInp.classList.remove("error");
    cvcInp.parentElement.classList.remove("error-message");
  }
  if (
    nameInp.value &&
    numberInp.value &&
    monthInp.value &&
    yearInp.value &&
    cvcInp.value &&
    numberInp.value.length == 16
  ) {
    completed.classList.remove("hidden");
    form.classList.add("hidden");
  }
}
function format(s) {
  return s.toString().replace(/\d{4}(?=.)/g, "$& ");
}

buttonContinue.addEventListener("click", () => {
  cardName.textContent = "CECÍLIA GUEDES";
  cardNumber.textContent = "0000 0000 0000 0000";
  monthInp.textContent = "00";
  yearInp.textContent = "00";
  cardCvc.textContent = "000";

  nameInp.value = "";
  numberInp.value = "";
  monthInp.value = "";
  yearInp.value = "";
  cvcInp.value = "";

  completed.classList.add("hidden");
  form.classList.remove("hidden");
});

numberInp.addEventListener("keyup", setCardNumber);
nameInp.addEventListener("keyup", setCardName);
monthInp.addEventListener("keyup", setCardMonth);
yearInp.addEventListener("keyup", setCardYear);
cvcInp.addEventListener("keyup", setCardCvc);
submitBtn.addEventListener("click", handleSubmit);
