// Settings
var validTag = 'is-valid';
var invalidTag = 'is-invalid';
var hideTag = 'collapse';

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
contactForm.addEventListener('reset', resetForm);

var results = document.getElementById('results');

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

function resetForm(event) {
  results.classList.add(hideTag);
  fullNameInput.classList.remove(invalidTag);
  fullNameInput.classList.remove(validTag);
  emailInput.classList.remove(invalidTag);
  emailInput.classList.remove(validTag);
  mobileInput.classList.remove(invalidTag);
  mobileInput.classList.remove(validTag);
}

function submitForm(event) {
  event.preventDefault();
  var counter = 0;
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var values = {
    name: fullNameInput.value || '',
    email: emailInput.value,
    mobile: mobileInput.value,
    message: messageInput.value
  };
  results.classList.remove(hideTag);
  results.innerHTML = "";
  if (values.name === "" && values.email === "" && values.mobile === "" && values.message === "") {
    results.innerHTML += 'Please, you must fill in some information<br>';
    counter = counter + 1;
  } else {
    if (values.name === "") {
      results.innerHTML += 'Please, include your name.<br>';
      counter = counter + 1;
    } else {
      if (!(values.name.split(" ").length > 1)) {
        results.innerHTML += "Your name is not okay.<br>";
        counter = counter + 1;
      }
    } //-------------------------------------------------------------
    if (values.email === "") {
      results.innerHTML += "Please check the email data.<br>";
      counter = counter + 1;
    } else {
      if (!(re.test(String(values.email).toLowerCase()))) {
        results.innerHTML += "Email is not correct.<br>";
        counter = counter + 1;
      }
    }
    //-----------------------------------------------------------------------
    if (values.mobile === "") {
      results.innerHTML += "Please check the number.<br>";
      counter = counter + 1;
    } else {
      if (!(/^\+?[0-9]*$/.test(values.mobile))) {
        results.innerHTML += "Your mobile is not okay.<br>";
        counter = counter + 1;
      }
    }
    //-----------------------------------------------------------------
    if (values.message === "") {
      results.innerHTML += "Please check the mensage.<br>";
      counter = counter + 1;
    } else {
      if (!(values.message.split(" ").length > 6)) {
        results.innerHTML += "Your message is not okay.<br>";
        counter = counter + 1;
      }
    }
  }
  if (counter === 0) (
    results.classList.add(hideTag);
  )
}
