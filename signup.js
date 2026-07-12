const scriptURL = "https://script.google.com/macros/s/AKfycbxN1n4QkUbUC2UOk9bF4E3pa6lu63RYj9N3GtJYfrm20kOJDZ0ATkfz86gqHOVfFXY6/exec";

document.querySelector("form").addEventListener("submit", function(e){

    e.preventDefault();

    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;

    if(password !== confirm){
        alert("Passwords do not match!");
        return;
    }

    const data = {
        name: document.querySelector("input[placeholder='Full Name']").value,
        email: document.querySelector("input[placeholder='Email Address']").value,
        username: document.querySelector("input[placeholder='Username']").value,
        password: password
    };

    fetch(scriptURL,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    })
    .then(response=>response.json())
    .then(result=>{
        alert("Signup Successful!");
        window.location="login.html";
    })
    .catch(error=>{
        console.error(error);
        alert("Data save nahi hua.");
    });

});
