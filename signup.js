const scriptURL="https://script.google.com/macros/s/AKfycbwhTegjIWij19AH6u64jN783X614WZX0BBa7iuDq70lzF0RgqEHxI_aUSpTLpRo61TD/exec";

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
