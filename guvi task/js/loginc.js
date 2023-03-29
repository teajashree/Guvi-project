const username = document.querySelector('input[name="username"]');
const password = document.querySelector('input[name="password"]');
const form = document.querySelector('form');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	// Check if username and password are not empty
	if (username.value.trim() === '' || password.value.trim() === '') {
		alert('Please enter your username and password.');
		return;
	}
	
	// Check if username and password are correct
	if (username.value.trim() === 'myusername' && password.value.trim() === 'mypassword') {
		alert('Login successful!');
		window.location.href = 'dashboard.html'; // Redirect to dashboard page
	} else {
		alert('Incorrect username or password.');
	}
});
