document.querySelector("form").addEventListener("submit",function(e){

e.preventDefault();

let password=document.getElementById("password").value;

let confirm=document.getElementById("confirm").value;

if(password!=confirm){

alert("Passwords do not match!");

return;

}

alert("Signup Successful!");

window.location="login.html";

});
