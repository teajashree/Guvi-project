const form = document.querySelector('form');
const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"]');
const passwordInput = document.querySelector('input[name="password"]');
const password2Input = document.querySelector('input[name="password2"]');

form.addEventListener('submit', e => {
	e.preventDefault();

	const nameValue = nameInput.value.trim();
	const emailValue = emailInput.value.trim();
	const passwordValue = passwordInput.value;
	const password2Value = password2Input.value;

	if (nameValue === '' || emailValue === '' || passwordValue === '' || password2Value === '') {
		alert('Please fill in all fields.');
		return;
	}

	if (passwordValue !== password2Value) {
		alert('Passwords do not match.');
		return;
	}

	alert('Registration successful!');
});
