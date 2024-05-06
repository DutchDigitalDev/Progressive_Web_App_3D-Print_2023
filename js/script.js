/* Strict JavaScript */
"use strict";

/* Link to serviceworker */
if (navigator && navigator.serviceWorker) {
    // Register the service worker
    navigator.serviceWorker.register("/sw.js");
}

/* Simple menu Toggle to make the hamburger menu interactive */
function toggleMenu() {
    var menu = document.querySelector('.navS ul');
    menu.classList.toggle('show');
}

/* Extra download notification (Downloads are not possible!)*/
document.getElementById("downbg").addEventListener("click", showDownloadNotification);

function showDownloadNotification() {
    // Notification options
    let downloadOptions = {
        body: "Sorry, downloads are not possible just yet!",
        icon: "../icon/3DPEicon48.png"
    };

    // Display the notification
    navigator.serviceWorker.ready.then(function (registration) {
        registration.showNotification("Download Not Available", downloadOptions);
    });
}

/* Return button function */
var returnButton = document.getElementById("returnButton");

if (returnButton) {
    returnButton.addEventListener("click", goBack);
} else {
    console.error("Element #goBackButton not found");
}

function goBack() {
    // Navigate back in the browser history
    window.history.back();
}

