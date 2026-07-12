const scriptURL="https://script.google.com/macros/s/AKfycbxN1n4QkUbUC2UOk9bF4E3pa6lu63RYj9N3GtJYfrm20kOJDZ0ATkfz86gqHOVfFXY6/exec";

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
