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
const thanksModalBg = document.querySelector(".modal-confirm");

//close modal function
const closeModal = () => {
  modalbg.style.display = "none";
  thanksModalBg.style.display = "none";
};
//close modal event
closeBtn.forEach((element) => element.addEventListener("click", closeModal));

//ISSUE 2 : VALIDATION FORM
//DOM element
const prenom = document.getElementById("first");
const nom = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const userCondition = document.querySelector("#checkbox1");
const missingField = document.querySelector(".champ-manquant");
const entries = document.querySelectorAll(".entries");
const sendBtn = document.getElementById("send");
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
const sendForm = (e) => {
  let isFormValid = true;
  for (let entry of entries) {
    if (entry.validity.valueMissing) {
      missingField.innerHTML = "<i>veillez remplir tout les champs</i>";
      isFormValid = false;
    } else {
      missingField.innerHTML = "";
    }
    e.preventDefault();
  }

  //error message for incorrect inputs
  if (namesRegex.test(prenom.value) == false) {
    errFistName.innerHTML = "<i>Format de prenom incorrect</i>";
    isFormValid = false;
  } else {
    errFistName.innerHTML = "";
  }
  if (namesRegex.test(nom.value) == false) {
    errLastName.innerHTML = "<i>Format de nom incorrect</i>";
    isFormValid = false;
  } else {
    errLastName.innerHTML = "";
  }
  if (emailRegex.test(email.value) == false) {
    errEmail.innerHTML = "<i>Format d'adresse E-mail incorrect";
    isFormValid = false;
  } else {
    errEmail.innerHTML = "";
  }
  if (!birthdate.value) {
    errBirthdate.innerHTML = "Vous devez entrer votre date de naissance";
    isFormValid = false;
  } else {
    errBirthdate.innerHTML = "";
  }
  if (numbersRegex.test(quantity.value) == false) {
    errNumber.innerHTML = "<i>Format de saisie incorrect</i>";
    isFormValid = false;
  } else {
    errNumber.innerHTML = "";
  }
  const locations = document.querySelectorAll("[name=location]:checked");
  if (locations.length < 1) {
    errLocation.innerHTML = "</br><i>Veillez faire un choix</i>";
    isFormValid = false;
  } else {
    errLocation.innerHTML = "";
  }

  if (!userCondition.checked) {
    errCondition.innerHTML = "<i>Champ obligatoire";
    isFormValid = false;
  } else {
    errCondition.innerHTML = "";
  }
  if (isFormValid) {
    const modalbg = document.querySelector(".bground");
    const thanksModalBg = document.querySelector(".modal-confirm");
    modalbg.style.display = "none";
    thanksModalBg.style.display = "block";
    e.preventDefault();
  }
  //return isFormValid;
};

//send form event
sendBtn.addEventListener("click", sendForm);
