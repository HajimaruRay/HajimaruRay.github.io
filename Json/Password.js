// ตัวอย่างหลาย username-password
var correctUsers = [
    {
        usernameHash: "7a637785e876af5249b450d6f696ff0542037bc1727f8da90a056ecc02667ccc", // "HajimaruRay"
        passwordHash: "145bc19ad1f3ca7453a5c830421160fa337d5f03ee5efb5f9b207a84a70f5084"  // "Hajimaruray6872"
    },
    {
        usernameHash: "8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918", // ตัวอย่าง username2 hash
        passwordHash: "8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918"  // ตัวอย่าง password2 hash
    }
];

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

    // ตรวจสอบทุกบัญชี
    for(let i = 0; i < correctUsers.length; i++){
        if (usernameHash === correctUsers[i].usernameHash && passwordHash === correctUsers[i].passwordHash){
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
    const currentType = passwordField.type;

    passwordField.type = currentType === 'password' ? 'text' : 'password';
}

function Logout(){
    sessionStorage.setItem('isLogin','false');
    window.location.href = "/index.html"
}

window.addEventListener("load", function() {
    if (sessionStorage.getItem('isLogin') === 'true') {
        const currentPath = window.location.pathname;
        if (currentPath !== '/FuelCalculater.html' && currentPath !== '/HTML/FuelCalculater.html') {
            window.location.href = "FuelCalculater.html";
        }
    }
});
