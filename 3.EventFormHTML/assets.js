document.getElementById('registrationForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = validateName();
  const email = validateEmail();
  const phone = validatePhone();
  const age = validateAge();
  const event = validateEvent();
  const consent = validateConsent();

  if (name && email && phone && age && event && consent) {
    // Get the name value from the input field
    const userName = document.getElementById('name').value;
    
    // Encode the name to handle spaces and special characters correctly in the URL
    const encodedName = encodeURIComponent(userName);
    
    // Redirect to the thank you page with the user's name as a query parameter
    window.location.href = 'thankyou.html?name=' + encodedName;
  }
});

function validateName() {
  const name = document.getElementById('name');
  const error = document.getElementById('nameError');
  if (name.value.trim().length < 2) {
    error.textContent = 'Name must be at least 2 characters.';
    error.classList.remove('hidden');
    name.classList.add('invalid');
    return false;
  }
  error.textContent = '';
  error.classList.add('hidden');
  name.classList.remove('invalid');
  name.classList.add('valid');
  return true;
}

function validateEmail() {
  const email = document.getElementById('email');
  const error = document.getElementById('emailError');
  // Updated regex to be a string literal
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email.value.trim())) {
    error.textContent = 'Please enter a valid email.';
    error.classList.remove('hidden');
    email.classList.add('invalid');
    return false;
  }
  error.textContent = '';
  error.classList.add('hidden');
  email.classList.remove('invalid');
  email.classList.add('valid');
  return true;
}

function validatePhone() {
  const phone = document.getElementById('phone');
  const error = document.getElementById('phoneError');
  // Updated regex to be a string literal
  const regex = /^\d{10}$/;
  if (!regex.test(phone.value.trim())) {
    error.textContent = 'Phone must be a 10-digit number.';
    error.classList.remove('hidden');
    phone.classList.add('invalid');
    return false;
  }
  error.textContent = '';
  error.classList.add('hidden');
  phone.classList.remove('invalid');
  phone.classList.add('valid');
  return true;
}

function validateAge() {
  const age = document.getElementById('age');
  const error = document.getElementById('ageError');
  const ageValue = parseInt(age.value);
  if (isNaN(ageValue) || ageValue < 18 || ageValue > 120) {
    error.textContent = 'You must be at least 18 years old.';
    error.classList.remove('hidden');
    age.classList.add('invalid');
    return false;
  }
  error.textContent = '';
  error.classList.add('hidden');
  age.classList.remove('invalid');
  age.classList.add('valid');
  return true;
}

function validateEvent() {
    const event = document.getElementById('event');
    if (event.value === "") {
        alert("Please select an event.");
        return false;
    }
    return true;
}

function validateConsent() {
    const consent = document.getElementById('consent');
    if (!consent.checked) {
        alert("You must agree to the terms and conditions.");
        return false;
    }
    return true;
}

function clearFeedback() {
  const fields = document.querySelectorAll('input, textarea, select');
  fields.forEach(field => {
    field.classList.remove('valid');
    field.classList.remove('invalid');
  });
}