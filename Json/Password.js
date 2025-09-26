// username "HajimaruRay"
var correctUserName = ["7a637785e876af5249b450d6f696ff0542037bc1727f8da90a056ecc02667ccc"];
// password "Hajimaruray6872"
var correctPassword = ["145bc19ad1f3ca7453a5c830421160fa337d5f03ee5efb5f9b207a84a70f5084"];

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        passwordCheck();
    }
});

async function hashString(str) {
    const encoder = new TextEncoder();
    const data = encoder.encode(str);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

async function passwordCheck(){
    let username = document.getElementById("username-field").value;
    let password = document.getElementById("password-field").value;
    let isCorrect = false;

    const usernameHash = await hashString(username);
    const passwordHash = await hashString(password);

    for(let i = 0; i < correctUserName.length; i++){
        if (usernameHash === correctUserName[i] && passwordHash === correctPassword[i]){
            isCorrect = true;
            break;
        }
    }

    if(isCorrect){
        sessionStorage.setItem('isLogin','true');
        window.location.href = "FuelCalculater.html";
    } else{
        document.getElementById("alartMessage").innerText= "Password must be wrong.";
        document.getElementById("password-field").value = "";
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