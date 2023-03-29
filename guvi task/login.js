const username = document.querySelector('input[name="username"]');
const password = document.querySelector('input[name="password"]');
const form = document.querySelector('form');

form.addEventListener("submit", e => {
	e.preventDefault();
	if (username.value.trim() === '' || password.value.trim() === '') {
		alert('Please enter your username and password.');
		return;
	}
	if (username.value.trim() === 'myusername' && password.value.trim() === 'mypassword') {
		alert("Login successful!");
		window.location. = "reg.html"; 
	} else {
		alert('Incorrect username or password.');
	}
}
function goToNextPage() {
  window.open ("reg.html"); 
}

);
