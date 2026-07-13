document.querySelector("form").addEventListener("submit", function(e){

    e.preventDefault();

    let username = document.querySelector('input[type="text"]').value;
    let password = document.querySelector('input[type="password"]').value;

    let user = JSON.parse(localStorage.getItem("user"));

    if(user==null){

        alert("Please Signup First");

        return;

    }

    if(username===user.username && password===user.password){

        localStorage.setItem("loggedIn","true");

        window.location.href="index.html";

    }

    else{

        alert("Invalid Username or Password");

    }

});
