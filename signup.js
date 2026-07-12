const scriptURL = "https://script.google.com/macros/s/AKfycbwF12oz9pNxOOq1GEExu_Rh-KwOtWajefejIOrmmOjMW0QCEne1x8JAhAh3aGJFFRor/exec";

document.querySelector("form").addEventListener("submit", function(e) {

    e.preventDefault();

    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;

    // Password check
    if (password !== confirm) {
        alert("Passwords do not match!");
        return;
    }

    // CAPTCHA check (agar Google reCAPTCHA use kar rahe ho)
    if (typeof grecaptcha !== "undefined") {
        let response = grecaptcha.getResponse();
        if (response.length === 0) {
            alert("Please verify that you are not a robot.");
            return;
        }
    }

    const data = {
        name: document.querySelector("input[placeholder='Full Name']").value,
        email: document.querySelector("input[placeholder='Email Address']").value,
        username: document.querySelector("input[placeholder='Username']").value,
        password: password
    };

    fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        alert("Signup Successful!");
        window.location = "login.html";
    })
    .catch(error => {
        alert("Error! Data save nahi hua.");
        console.error(error);
    });

});
