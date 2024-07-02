var users = {
    "admin": "password",
    "user1": "pass123",
    "user2": "test456"
};

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    if (users.hasOwnProperty(username) && users[username] === password) {
        switch (username) {
            case 'admin':
                window.location.href = 'https://github.com/';
                break;
            case 'user1':
                window.location.href = 'https://github.com/user1';
                break;
            case 'user2':
                window.location.href = 'https://github.com/user2';
                break;
            default:
                break;
        }
    } else {
        document.getElementById('message').textContent = 'Invalid username or password!';
    }
});
