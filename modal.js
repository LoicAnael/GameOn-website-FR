function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//ISSUE 1 : CLOSE MODAL
//DOM Element
const closeBtn = document.querySelectorAll(".close");
const closeBtn2 = document.querySelectorAll(".close2");
const confirmedModalBg = document.querySelector(".modal-confirm");

//close modal function
const closeModal = () => {
  modalbg.style.display = "none";
  confirmedModalBg.style.display = "none";
};
//close modal event
closeBtn.forEach((element) => element.addEventListener("click", closeModal));
closeBtn2.forEach((element) => element.addEventListener("click", closeModal));
//ISSUE 2 + 3 + 4: VALIDATION FORM
//DOM element
const prenom = document.getElementById("first");
const nom = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const userCondition = document.querySelector("#checkbox1");
const missingField = document.querySelector(".champ-manquant");
const inputs = document.querySelectorAll(".entries");
const sendBtn = document.getElementById("send");
const form = document.getElementById("form");

//regex
const namesRegex = /^[A-Za-zçàéèÉÈÀÇ]{2,}$/;
const emailRegex = /\S[a-zA-Z0-9]+@\S+\.\S+/;
const numbersRegex = /^0?([0-9])$/;
//error elements DOM
const errFistName = document.querySelector(".err-first");
const errLastName = document.querySelector(".err-last");
const errEmail = document.querySelector(".err-email");
const errBirthdate = document.querySelector(".err-birthdate");
const errNumber = document.querySelector(".err-number");
const errLocation = document.querySelector(".err-location");
const errCondition = document.querySelector(".err-condition");
//error message if all fields are not filled

//error message for incorrect inputs
const errorFocusName = () => {
  let isFormValid = true;
  if (!namesRegex.test(prenom.value)) {
    errFistName.innerHTML =
      "Veuillez entrer au minimum 2 caractères pour ce champ";
    prenom.style.borderColor = "#F00";
    isFormValid = false;
  } else {
    errFistName.innerHTML = "";
    prenom.style.borderColor = "#FFF";
  }
  return isFormValid;
};
const errorFocusSurname = () => {
  let isFormValid = true;
  if (!namesRegex.test(nom.value)) {
    errLastName.innerHTML =
      "Veuillez entrer au minimum 2 caractères pour ce champ";
    nom.style.borderColor = "#F00";
    isFormValid = false;
  } else {
    errLastName.innerHTML = "";
    nom.style.borderColor = "#FFF";
  }
  return isFormValid;
};
const errorFocusEmail = () => {
  let isFormValid = true;
  if (!emailRegex.test(email.value)) {
    errEmail.innerHTML = "Format d'adresse E-mail incorrect";
    email.style.borderColor = "#F00";
    isFormValid = false;
  } else {
    errEmail.innerHTML = "";
    email.style.borderColor = "#FFF";
  }
  return isFormValid;
};
const errorFocusBirthdate = () => {
  let isFormValid = true;
  if (!birthdate.value) {
    errBirthdate.innerHTML = "Vous devez entrer votre date de naissance";
    birthdate.style.borderColor = "#F00";
    isFormValid = false;
  } else {
    errBirthdate.innerHTML = "";
    birthdate.style.borderColor = "#FFF";
  }
  return isFormValid;
};
const errorFocusNumber = () => {
  let isFormValid = true;
  if (!numbersRegex.test(quantity.value)) {
    errNumber.innerHTML = "Veuillez entrer des chiffres uniquement";
    quantity.style.borderColor = "#F00";
    isFormValid = false;
  } else {
    errNumber.innerHTML = "";
    quantity.style.borderColor = "#FFF";
  }
  return isFormValid;
};
const errorFocusLocation = () => {
  let isFormValid = true;
  const locations = document.querySelectorAll("[name=location]:checked");
  if (locations.length < 1) {
    errLocation.innerHTML = "Veillez faire un choix";
    isFormValid = false;
  } else {
    errLocation.innerHTML = "";
  }
  return isFormValid;
};
const errorFocusCondition = () => {
  let isFormValid = true;
  if (!userCondition.checked) {
    errCondition.innerHTML =
      "</br>Vérifiez que vous acceptez les termes et conditions !";
    isFormValid = false;
  } else {
    errCondition.innerHTML = "";
  }
  return isFormValid;
};

function sendForm(e) {
  e.preventDefault();
  const isFormValid =
    errorFocusName() &&
    errorFocusSurname() &&
    errorFocusEmail() &&
    errorFocusBirthdate() &&
    errorFocusNumber() &&
    errorFocusCondition() &&
    errorFocusLocation();
  console.log(isFormValid);
  if (!isFormValid) {
    modalbg.style.display = "block";
    confirmedModalBg.style.display = "none";
  } else {
    let modalbg = document.querySelector(".bground");
    let confirmedModalBg = document.querySelector(".modal-confirm");
    modalbg.style.display = "none";
    confirmedModalBg.style.display = "block";
    form.reset();
  }
  return isFormValid;
}
//send form event
form.addEventListener("submit", sendForm);
