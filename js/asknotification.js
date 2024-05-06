/* Notifications {Start functions for notifications} */

// Check if the browser supports notifications
if ("Notification" in window) {
    // If supported, display the button to enable notifications
    document.querySelector("#btnEnableNotifications").style.display = "block";

    // Add click event listener to the button to request notification permission
    document
        .querySelector("#btnEnableNotifications")
        .addEventListener("click", askForNotificationPermission);
}

// Function to ask for notification permission
function askForNotificationPermission() {
    Notification.requestPermission(function (result) {
        console.log("User Choice:", result);

        // Check if permission is not granted
        if (result !== "granted") {
            console.log("No permission granted");
        } else {
            console.log("Permission granted!!!");
            // If permission is granted, display the first notification
            displayFirstNotification();
        }
    });
}

// Function to display the first notification
function displayFirstNotification() {
    // Hide the button to enable notifications
    document.querySelector("#btnEnableNotifications").style.display = "none";

    // Options for the notification
    let options = {
        body: "Welcome to the 3DPE family!!! Bipedie Bapedie your notifications are now our meme dropperty",
        icon: "../icon/3DPEicon48.png"
    }

    // Get the service worker registration and show the notification
    navigator.serviceWorker.ready.then(function (registration) {
        registration.showNotification("Successfully subscribed!!", options);
    });
}

/* Notifications {End functions for notifications} */

