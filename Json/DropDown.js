window.onload = function() {
    var currentUrl = window.location.pathname; // Get the current page URL
    var select = document.querySelector('.selector'); // Select the dropdown
    console.log(currentUrl);
    
    // Set the value of the select element to the current URL
    if (currentUrl.includes("index.html")) {
        select.value = "/index.html";
    } else if (currentUrl.includes("/HTML/Profile.html")) {
        select.value = "/HTML/Profile.html";
    } else if (currentUrl.includes("/HTML/EducationalRecord.html")) {
        select.value = "/HTML/EducationalRecord.html";
    } else if (currentUrl.includes("/HTML/FuelCalculater.html")){
        select.value = "/HTML/FuelCalculater.html";
    }
};