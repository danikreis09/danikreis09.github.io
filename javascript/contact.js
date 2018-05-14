// Settings
var validTag = 'is-valid';
var invalidTag = 'is-invalid';

// Element associations
var fullNameInput = document.getElementById('fullname');
fullNameInput.addEventListener('keyup', validateFullName);

var emailInput = document.getElementById('email');
emailInput.addEventListener('keyup', validateEmail);

var mobileInput = document.getElementById('mobile');
mobileInput.addEventListener('keyup', validateMobile);

var messageInput = document.getElementById('message');

var contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', submitForm);

var resultsMsg = document.getElementById('results');

function validateFullName(event) {
  var fullNameInput = event.target;
  var value = fullNameInput.value;
  if (!value) {
    fullNameInput.classList.remove(invalidTag);
    fullNameInput.classList.remove(validTag);
  } else {
    if (value.split(" ").length > 1) {
      fullNameInput.classList.remove(invalidTag);
      fullNameInput.classList.add(validTag);
    } else {
      fullNameInput.classList.remove(validTag);
      fullNameInput.classList.add(invalidTag);
    }
  }
}

function validateEmail(event) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var emailInput = event.target;
  var value = emailInput.value;
  if (!value) {
    emailInput.classList.remove(invalidTag);
    emailInput.classList.remove(validTag);
  } else {
    if (re.test(String(value).toLowerCase())) {
      emailInput.classList.remove(invalidTag);
      emailInput.classList.add(validTag);
    } else {
      emailInput.classList.remove(validTag);
      emailInput.classList.add(invalidTag);
    }
  }
}

function validateMobile(event) {
  var mobileInput = event.target;
  var value = mobileInput.value;
  if (!value) {
    mobileInput.classList.remove(invalidTag);
    mobileInput.classList.remove(validTag);
  } else {
    if (/^\+?[0-9]*$/.test(value)) {
      mobileInput.classList.remove(invalidTag);
      mobileInput.classList.add(validTag);
    } else {
      mobileInput.classList.remove(validTag);
      mobileInput.classList.add(invalidTag);
    }
  }
}

function submitForm(event) {
  event.preventDefault();
  var values = {
    name: fullNameInput.value,
    email: emailInput.value,
    mobile: mobileInput.value,
    message: messageInput.value
  };
  results.innerHTML = '<pre>' + JSON.stringify(values, null, 2) + '</pre>';
}
