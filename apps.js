const firstName = document.getElementById("first-name");
const firstnameError = document.getElementById("firstnameError"); 
const xmarkDisplay = document.getElementById("x");

const lastName = document.getElementById("last-name");
const lastnameError = document.getElementById("lastnameError"); 
const xmarkDisplay2 = document.getElementById("x2");

const currenlastName = document.getElementById("current-last-name");
const currentError = document.getElementById("currentError"); 
const xmarkDisplay3 = document.getElementById("x3");

const emailAddress = document.getElementById("email-address");
const emailError = document.getElementById("emailError"); 
const errorEmail = document.getElementById("emailError2"); 
const xmarkDisplay4 = document.getElementById("x4");


const stateError = document.getElementById('stateError');
const cityError = document.getElementById('cityError');
const gradError = document.getElementById('gradError');



const schoolState = document.getElementById('state');
const schoolCity = document.getElementById('city');
const schoolGrad = document.getElementById('grad');

const gradYear = document.getElementById("grad-year");
const gradError2 =  document.getElementById("gradError2");

const password = document.getElementById("password");
const xmarkDisplay5 = document.getElementById("x5");
const passwordError = document.getElementById("passwordError");

const password2 = document.getElementById("password2");
const xmarkDisplay6 = document.getElementById("x6");
const passwordError2 = document.getElementById("passwordError2");

const form = document.getElementById("form");


//FUNCTION//

function callValidation (element, validation, errorMesage, blankMessage, xmarkDisplay, xmark, validationMessage){
  if(element.value === "") {
      errorMesage.innerHTML = blankMessage;
      errorMesage.style.display = "block";
      xmarkDisplay.innerHTML = xmark;
      xmarkDisplay.style.display = "block";
      return;
}

  if(validation === true){
    xmarkDisplay.innerHTML =  validationMessage;
    xmarkDisplay.style.display = "block";
    return;
  }

  if(validation === false){
    errorMesage.innerHTML = "Please enter a valid email.";
    errorMesage.style.display = "block";
    return;
  }

  
};

function lostFocus(element, errorMesage, xmarkDisplay){
    errorMesage.style.display = "none";
    xmarkDisplay.style.display ="none";
    return;
}


function checkEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailVal = emailRegex.test(emailAddress.value);
    return emailVal;
  }


// ------------FIRST NAME EVENTS------------ //
firstName.addEventListener("blur", function(){
  callValidation(firstName, (firstName.value.length > 1), firstnameError, "First name, Please!", xmarkDisplay, "❌", "✔️"); 
});

firstName.addEventListener("focus", function(){
  lostFocus(firstName, firstnameError, xmarkDisplay);
});


// ----------LAST NAME EVENTS---------- //
lastName.addEventListener("blur", function(){
  callValidation(lastName, (lastName.value.length > 1), lastnameError, "Last name, Please!", xmarkDisplay2, "❌", "✔️"); 
});

lastName.addEventListener("focus", function(){
  lostFocus(lastName, lastnameError, xmarkDisplay2);
});


// ------------CURRENT NAME EVENTS----------- //
currenlastName.addEventListener("blur", function(){
  callValidation(currenlastName, (currenlastName.value.length > 1), true, "", xmarkDisplay3, "", "✔️")
});

currenlastName.addEventListener("focus", function(){
  lostFocus(currenlastName, currentError, xmarkDisplay3);
});


// ------------EMAIL EVENTS----------- //
emailAddress.addEventListener("blur", function(){
  callValidation(emailAddress, checkEmail(), emailError, "Email address, please!", xmarkDisplay4, "❌", "✔️")
});

emailAddress.addEventListener("focus", function(){
  lostFocus(emailAddress, emailError, xmarkDisplay4);
}); 


//-------------STATES---------------------//

schoolState.addEventListener("blur", function(){
  callValidation(schoolState, true, stateError, "Oops! Please select your States.", xmarkDisplay, "", "");
});

schoolState.addEventListener("focus", function(){
  lostFocus(schoolState, stateError , xmarkDisplay);
}); 


//---------CITY-----//
schoolCity.addEventListener("blur", function(){
  callValidation(schoolState, true, cityError, "Oops! Please select your City.", xmarkDisplay, "", "");
});

schoolCity.addEventListener("focus", function(){
  lostFocus(schoolCity, cityError , xmarkDisplay);
}); 


//----------SCHOOL------------//

schoolGrad.addEventListener("blur", function(){
  callValidation(schoolGrad, true, gradError, "Oops! Please select your School", xmarkDisplay, "", "");
});

schoolGrad.addEventListener("focus", function(){
  lostFocus(schoolGrad, gradError , xmarkDisplay);
}); 

//-----------GRAD YEAR-----------//

gradYear.addEventListener("blur", function(){
  callValidation(gradYear, true, gradError2, "Oops! Please select your graduation year!", xmarkDisplay, "", "");
});

gradYear.addEventListener("focus", function(){
  lostFocus(gradYear, gradError2 , xmarkDisplay);
}); 


function checkPassword(element2, validation2, errorMesage2, blankMessage2, xmarkDisplay2, xmark2, validationMessage2){

      if(element2.value === "") {
      errorMesage2.innerHTML = blankMessage2;
      errorMesage2.style.display = "block";
      xmarkDisplay2.innerHTML = xmark2;
      xmarkDisplay2.style.display = "block";
      return;
}
      if(validation2 === false){
      errorMesage2.innerHTML = "Your password should be between 6 and 20 characters long. Only English letters, numbers, and these characters !@#$%^&* may be used in your password. Please remove any symbols or special characters.";
      errorMesage2.style.display = "block";
      return;
  }  else{
      xmarkDisplay2.innerHTML =  validationMessage2;
      xmarkDisplay2.style.display = "block";

  }
  
};
function validatePassword() {
  const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;
  const passVar = regex.test(password.value);
  return passVar;
}



//-------------------PASSWORD------------------//
password.addEventListener("blur", function(){
  checkPassword(password, validatePassword(), passwordError, "Your password should be between 6 and 20 characters long. Only English letters, numbers, and these characters !@#$%^&* may be used in your password. Please remove any symbols or special characters.", xmarkDisplay5, "❌", "✔️");
});

password.addEventListener("focus", function(){
  lostFocus(password, passwordError, xmarkDisplay5);
}); 

password2.addEventListener("blur", function(){
  checkPassword(password2,(password.value === password2.value) , passwordError2, "Passwords do not match!", xmarkDisplay6, "❌", "✔️");
});

password2.addEventListener("focus", function(){
  lostFocus(password2, passwordError2, xmarkDisplay6);
}); 





const states = {
  Alabama: ['Aaronsville','Abbeville', 'Adamsville', 'Addison', 'Akron', 'Alabster'],
  Alaska: ['Adak', 'Akiachak', 'Alakanuk', 'Aleknagik', 'Aliceville', 'Ambler'],
  Arizona: ['Aguila', 'Ajo', 'Alphine', 'Amado', 'Anthem', 'Apache Junction'],
  Arkansas: ['Adona', 'Alma', 'Almyra', 'Alpena', 'Altheimer', 'Altus'],
  California: ['Acampo', 'Acton', 'Adelanto', 'Adin', 'Agoura', 'Agoura Hills'],          
  Colorado: ['Abilene', 'Agate', 'Aguilar', 'Akron', 'Alamosa', 'Anton'],           
  Connecticut: ['Andover', 'Ansonia', 'Ashford', 'Avon', 'Avon', 'Baltic'],           
  Delaware: ['Bear', 'Berlin', 'Bridgeville', 'Camden Wyoming', 'Claymont','Claton'],
  Columbia: ['Washington'],
  Florida: ['Alachua', 'Altamonte Springs', 'Altha', 'Athuras', 'Alva', 'Anthony'],         
                  
};


function updateCityOptions(){
  const selectedCity = schoolState.value;
  const cityOption = states[selectedCity] || [];
  schoolCity.innerHTML='<option value="">`  School City</option>';

  for(let i = 0; i < cityOption.length; i++){
    const state = document.createElement('option');
    state.value = cityOption[i];
    state.text = cityOption[i];
    schoolCity.appendChild(state);

  }
}
schoolState.addEventListener('change', updateCityOptions);




//Show Error Function //

const togglePassword = document.getElementById('toggle-password');
const togglePassword2 = document.getElementById('toggle-password2');
const passwordInput = document.getElementById('password');
const passwordInput2 = document.getElementById('password2');

togglePassword.addEventListener('click', function() {
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
  
  if (type === 'text') {
    togglePassword.classList.remove('fa-eye');
    togglePassword.classList.add('fa-eye-slash');
  } else {
    togglePassword.classList.remove('fa-eye-slash');
    togglePassword.classList.add('fa-eye');
  }
});

togglePassword2.addEventListener('click', function() {
  const type = passwordInput2.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput2.setAttribute('type', type);
  
  if (type === 'text') {
    togglePassword2.classList.remove('fa-eye');
    togglePassword2.classList.add('fa-eye-slash');
  } else {
    togglePassword2.classList.remove('fa-eye-slash');
    togglePassword2.classList.add('fa-eye');
  }
});

form.addEventListener("submit", function(e){
  e.preventDefault();


  callValidation(firstName, (firstName.value.length > 1), firstnameError, "First name, Please!", xmarkDisplay, "❌", "✔️"); 
  callValidation(lastName, (lastName.value.length > 1), lastnameError, "Last name, Please!", xmarkDisplay2, "❌", "✔️"); 
  callValidation(currenlastName, (currenlastName.value.length > 1), currenlastName, "", xmarkDisplay3, "", "✔️");
  callValidation(emailAddress, checkEmail(), emailError, "Email address, please!", xmarkDisplay4, "❌", "✔️");
  callValidation(schoolState, true, stateError, "Oops! Please select your States.", xmarkDisplay, "", "");
  callValidation(schoolState, true, cityError, "Oops! Please select your City.", xmarkDisplay, "", "");
  callValidation(schoolGrad, true, gradError, "Oops! Please select your School", xmarkDisplay, "", "");
  callValidation(gradYear, true, gradError2, "Oops! Please select your graduation year!", xmarkDisplay, "", "");
  checkPassword(password, validatePassword(), passwordError, "Your password should be between 6 and 20 characters long. Only English letters, numbers, and these characters !@#$%^&* may be used in your password. Please remove any symbols or special characters.", xmarkDisplay5, "❌", "✔️");
  checkPassword(password2,(password.value === password2.value) , passwordError2, "Passwords do not match!", xmarkDisplay6, "❌", "✔️");
});

