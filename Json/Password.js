var correctUserName = ["HajimaruRay"];
var correctPassword = ["Hajimaruray6872"];

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        passwordCheck();
    }
});
function passwordCheck(){
    let password = document.getElementById("password-field").value;
    let username = document.getElementById("username-field").value;
    let isCorrect = NaN;

    for(let i = 0;i < correctUserName.length;i++){
        if (username == correctUserName[i] && password == correctPassword[i]){
            isCorrect = true;
        }
        else{
            isCorrect = false;
        }
    }

    if(isCorrect){
        sessionStorage.setItem('isLogin','true');
        window.location.href = "FuelCalculater.html";
    } else{
        password = "";
        document.getElementById("alartMessage").innerText= "Password must be wrong."
    }
}

function seethrough(){
    const passwordField = document.getElementById('password-field');
    const togglePasswordBtn = document.getElementById('button-seethrough');

    console.log("get-Cick");
    const currentType = passwordField.type;

    if (currentType === 'password') {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
}

function Logout(){
    sessionStorage.setItem('isLogin','false');
    console.log(sessionStorage.getItem('isLogin'));
    window.location.href = "/index.html"
}

window.addEventListener("load", function() {
    if (sessionStorage.getItem('isLogin') === 'true') {
        const currentPath = window.location.pathname;
        console.log(currentPath);
        if (currentPath !== '/FuelCalculater.html' && currentPath !== '/HTML/FuelCalculater.html') {
            window.location.href = "FuelCalculater.html";
        }
    }
});