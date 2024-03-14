const user = document.getElementById('userName');
const password = document.getElementById('password');
const button = document.getElementById('login');

button.addEventListener('click', (e) =>{
    e.preventDefault()
    const data = {
        user: user.value,
        password: password.value
    }

    user.value = "";
    password.value = "";

    console.log(data)
})