document.querySelector("form").addEventListener("submit", function(e){

    e.preventDefault();

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;

    if(password !== confirm){
        alert("Passwords do not match!");
        return;
    }

    const user = {
        username: username,
        email: email,
        password: password
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Signup Successful!");

    window.location.href = "login.html";

});
