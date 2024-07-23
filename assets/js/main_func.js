// home contents transition
document.addEventListener("DOMContentLoaded", function() {
  const homeData = document.querySelector(".home__data");
  homeData.classList.add("animate");
});

// Sign In & Sign Up Form Slider
const container = document.getElementById('register__container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Sign In and Sign Up Validation
const signUpBtn = document.querySelector('form:first-child button');
const signInBtn = document.querySelector('form:last-child button');
const emailInput = document.querySelector('form:first-child input[type="email"]');
const signInEmailInput = document.querySelector('form:last-child input[type="email"]');
const passwordInput = document.querySelector('form:first-child input[type="password"]:first-child');
const confirmPasswordInput = document.querySelector('form:first-child input[type="password"]:last-child');
const signInPasswordInput = document.querySelector('form:last-child input[type="password"]');

signUpBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const nameValue = nameInput.value;
  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;
  const confirmPasswordValue = confirmPasswordInput.value;

  if (!validateName(nameValue)) {
    alert('Invalid name. Please enter a valid name.');
    return;
  }

  if (!validateEmail(emailValue)) {
    alert('Invalid email. Only @gmail.com, @yahoo.com, @outlook.com, @hotmail.com, and @aol.com are allowed.');
    return;
  }

  if (!validatePassword(passwordValue)) {
    alert('Invalid password. Must contain at least 1 uppercase letter, 1 special character, and 1 digit.');
    return;
  }

  if (passwordValue!== confirmPasswordValue) {
    alert('Passwords do not match. Please enter the same password in both fields.');
    passwordInput.value = '';
    confirmPasswordInput.value = '';
    passwordInput.focus();
    return;
  }

  // If all validations pass, reload the page
  window.location.reload();
});

signInBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const signInEmailValue = signInEmailInput.value;
  const signInPasswordValue = signInPasswordInput.value;

  if (!validateEmail(signInEmailValue)) {
    alert('Invalid email. Only @gmail.com, @yahoo.com, @outlook.com, @hotmail.com, and @aol.com are allowed.');
    return;
  }

  if (!validatePassword(signInPasswordValue)) {
    alert('Invalid password. Must contain at least 1 uppercase letter, 1 special character, and 1 digit.');
    return;
  }

  window.location.reload();
});

function validateEmail(email) {
  const allowedDomains = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'aol.com'];
  const emailParts = email.split('@');
  const domain = emailParts[1];

  return allowedDomains.includes(domain);
}

function validatePassword(password) {
  const uppercaseRegex = /[A-Z]/;
  const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  const digitRegex = /\d/;

  return uppercaseRegex.test(password) && specialCharRegex.test(password) && digitRegex.test(password);
}

// Favorite Feature
const heart = document.querySelector('.heart');

heart.addEventListener('mouseover', () => {
  heart.classList.add('fa-bounce');
});

heart.addEventListener('mouseout', () => {
  heart.classList.remove('fa-bounce');
});

heart.addEventListener('click', () => {
  heart.classList.toggle('active');
  if (heart.classList.contains('active')) {
    heart.classList.remove('fa-bounce');
  } else {
    heart.classList.add('fa-bounce');
  }
});