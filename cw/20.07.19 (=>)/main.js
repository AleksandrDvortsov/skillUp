
const email = document.getElementById('email');
const pass = document.getElementById('pass');
const send = document.getElementById('send');

send.onclick = function () {
    const user = {
        userEmail: email.value,
        userPassword: pass.value
    }
    console.log(user)
    console.log(JSON.stringify(user));

    fetch('https://google.com', {
        method: "POST",
        body: JSON.stringify(user)
    });

}







function Sender () {

}

























