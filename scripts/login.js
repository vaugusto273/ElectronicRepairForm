let SubmitButton = document.getElementById("submit");
SubmitButton.addEventListener("click", function(){
    let username = document.getElementById("user").value;
    let password = document.getElementById("pass").value;
    if (username == user && password == pass){
        document.getElementById("LoginForm").reset();
        document.location.href = "main.html"
    }
    else{
        alert("Access blocked");
        document.getElementById("LoginForm").reset();
    }
});
