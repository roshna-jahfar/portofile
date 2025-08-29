const form = document.getElementById('registrationForm');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const event = document.getElementById('eventSelect').value;

  if (name && email && event) {
    successMessage.textContent = `✅ Thank you, ${name}! You have successfully registered for ${event}.`;
    successMessage.style.display = 'block';
    form.reset();
  } else {
    successMessage.textContent = '';
    successMessage.style.display = 'none';
    alert('Please fill out all fields!');
  }
});
