
//切換登入註冊
function show_hide(targetForm) {
    var login = document.getElementById("Login");
    var signup = document.getElementById("Register");
    var forgot = document.getElementById("Forgot");

    if (targetForm === "Login") {
        login.style.display = "block";
        signup.style.display = "none";
        forgot.style.display = "none";
    } else if (targetForm === "Register") {
        login.style.display = "none";
        signup.style.display = "block";
        forgot.style.display = "none";
    } else if (targetForm === "Forgot" ) {
        login.style.display = "none";
        signup.style.display = "none";
        forgot.style.display = "block";
    }
}