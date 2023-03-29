const form = document.getElementById('login-form');

form.addEventListener('submit', function(e) {
	e.preventDefault();

	const username = document.getElementById('username').value;
	const password = document.getElementById('password').value;

	// Aqui você pode adicionar sua própria lógica de validação de login
	if (username === 'admin' && password === 'senha') {
		window.location.href = 'clientes.html';
	} else {
		alert('Nome de usuário ou senha incorretos');
	}
});