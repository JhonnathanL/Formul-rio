  // Função para registrar 
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var nome = document.getElementById('registerNome').value;
    var sobrenome = document.getElementById('registerSobrenome').value;
    var email = document.getElementById('registerEmail').value;
    var senha = document.getElementById('registerSenha').value;

    // Salvando dados do usuário no localStorage
    localStorage.setItem('nome', nome);
    localStorage.setItem('sobrenome', sobrenome);
    localStorage.setItem('email', email);
    localStorage.setItem('senha', senha);

    alert("Usuário registrado com sucesso!");
    document.getElementById('registerForm').reset();
});

// Função para realizar o login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('loginEmail').value;
    var senha = document.getElementById('loginSenha').value;

    // Verificando se os dados correspondem aos dados armazenados
    if (localStorage.getItem('email') === email && localStorage.getItem('senha') === senha) {
        alert("Login bem-sucedido!");
    } else {
        alert("Usuário ou senha incorretos!");
    }

    document.getElementById('loginForm').reset();
});