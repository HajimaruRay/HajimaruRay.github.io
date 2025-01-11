document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
    alert("Right-click is disabled.");
});

document.addEventListener("keydown", function(event) {
    if (event.key === "F12" || (event.ctrlKey && event.shiftKey && event.key === "I") || (event.ctrlKey && event.key === "U")) {
        event.preventDefault();
        alert("Inspect element is disabled.");
    }
});
