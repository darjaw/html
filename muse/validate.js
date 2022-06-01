console.log("JS is working.")

const form = document.getElementById('form');
const password = document.getElementById('password');

form.addEventListener('submit', (error) => {
    let messages = [];
    if (password.value.length < 6)
        messages.push('Password must be at least 6 characters');

        if (messages.length > 0){
    alert("Password must be at least 6 characters");
    error.preventDefault();
        }

})