document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Simple validation
    if (username === 'evan.degroot' && password === '20459$78') {
        window.location.href = 'https://github.com/';
    } else {
        document.getElementById('message').textContent = 'Invalid username or password!';
    }
});
