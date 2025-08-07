document.getElementById('registrationForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = validateName();
  const email = validateEmail();
  const phone = validatePhone();
  const age = validateAge();

  if (name && email && phone && age) {
    alert('Registration successful!');
    this.reset();
    clearFeedback();
  }
});

function validateName() {
  const name = document.getElementById('name');
  const error = document.getElementById('nameError');
  if (name.value.trim().length < 2) {
    error.textContent = 'Name must be at least 2 characters.';
    name.classList.add('invalid');
    return false;
  }
  error.textContent = '';
  name.classList.remove('invalid');
  name.classList.add('valid');
  return true;
}

function validateEmail() {
  const email = document.getElementById('email');
  const error = document.getElementById('emailError');
  const regex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  if (!regex.test(email.value.trim())) {
    error.textContent = 'Please enter a valid email.';
    email.classList.add('invalid');
    return false;
  }
  error.textContent = '';
  email.classList.remove('invalid');
  email.classList.add('valid');
  return true;
}

function validatePhone() {
  const phone = document.getElementById('phone');
  const error = document.getElementById('phoneError');
  const regex = /^\\d{10}$/;
  if (!regex.test(phone.value.trim())) {
    error.textContent = 'Phone must be a 10-digit number.';
    phone.classList.add('invalid');
    return false;
  }
  error.textContent = '';
  phone.classList.remove('invalid');
  phone.classList.add('valid');
  return true;
}

function validateAge() {
  const age = document.getElementById('age');
  const error = document.getElementById('ageError');
  if (parseInt(age.value) < 18) {
    error.textContent = 'You must be 18 or older.';
    age.classList.add('invalid');
    return false;
  }
  error.textContent = '';
  age.classList.remove('invalid');
  age.classList.add('valid');
  return true;
}

function clearFeedback() {
  const fields = document.querySelectorAll('input, textarea');
  fields.forEach(field => {
    field.classList.remove('valid');
    field.classList.remove('invalid');
  });
}
