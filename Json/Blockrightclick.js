
document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
    alert("Right-click is disabled.");
});

document.addEventListener("keydown", function(event) {
    if (event.key === "F12" || (event.ctrlKey && event.shiftKey && event.key === "I") || (event.ctrlKey && event.key === "U") || (event.ctrlKey && event.shiftKey && event.key === 'C')) {
        event.preventDefault();
        alert("Inspect element is disabled.");
    }
});
window.onload = function() {
    try {
        if (sessionStorage.getItem('isLogin') === 'true') {
            console.log("Already logged in");
        } else {
            console.log("Not logged in. Redirecting to index.html...");
        }
    } catch (error) {
        console.log("Error accessing sessionStorage. Setting isLogin to 'false'.");
        sessionStorage.setItem('isLogin', 'false');
    }
};