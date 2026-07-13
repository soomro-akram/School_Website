document.querySelector("form").addEventListener("submit", function(e){

    e.preventDefault();

    localStorage.setItem("loggedIn", "true");

    alert("Login Successful!");

    window.location.href = "index.html";

});
