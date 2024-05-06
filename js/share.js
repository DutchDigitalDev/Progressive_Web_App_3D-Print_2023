// Execute the share function when the DOM content is loaded (Source: Inspiration Template Camera Avans MDEV CMD)
document.addEventListener('DOMContentLoaded', function () {
    testShareFunction();
}, false);

// Function to test if the browser supports the share API (Source: Inspiration Template Camera Avans MDEV CMD)
function testShareFunction() {
    console.log("Begin testing sharing");

    // Check if the browser supports the share API (Source: Inspiration Template Camera Avans MDEV CMD)
    if ("share" in navigator) {
        console.log("Sharing is supported");
        ClickEvent();
    } else {
        console.log("Sharing not supported");
        
        // Display a message to the user that share function is not supported (Source: Inspiration Template Camera Avans MDEV CMD)
        document.getElementById("shareOndersteuning").innerHTML += '<p>This browser does not support the share option...</p>'; 
        hideShareButtons(); // Hide share buttons
    }
}

// Function to handle click events on share buttons with event listeners (Source: Inspiration Template Camera Avans MDEV CMD)
function ClickEvent() {
    document.getElementById("XShare").addEventListener("click", function (ev) {
        shareContent("X page", "Look at this!", "https://twitter.com/?lang=en");
    });

    document.getElementById("FacebookShare").addEventListener("click", function (ev) {
        shareContent("Facebook startpage", "Look at this!", "https://www.facebook.com");
    });

    document.getElementById("InstagramShare").addEventListener("click", function (ev) {
        shareContent("Instagram startpage", "Look at this!", "https://www.instagram.com/");
    });

    document.getElementById("TiktokShare").addEventListener("click", function (ev) {
        shareContent("Tiktok startpage", "Look at this!", "https://www.tiktok.com/");
    });

    document.getElementById("PinterestShare").addEventListener("click", function (ev) {
        shareContent("Pinterest startpage", "Look at this!", "https://nl.pinterest.com/");
    });

    document.getElementById("WhatsappShare").addEventListener("click", function (ev) {
        shareContent("Whatsapp startpage", "Look at this!", "https://www.whatsapp.com/?lang=nl_NL");
    });
}

// Function to share content using the share API (Source: Inspiration Template Camera Avans MDEV CMD)
function shareContent(title, text, url) {
    navigator.share({
        title: title,
        text: text,
        url: url
    })
    .then(function() {
        console.log('Share succeeded!!');
    })
    .catch(function (error) {
        console.log("Error! " + error);
    });
}

// Function to hide share buttons
function hideShareButtons() {
    document.getElementById("FacebookShare").style.visibility = 'hidden';
    document.getElementById("InstagramShare").style.visibility = 'hidden';
    document.getElementById("TiktokShare").style.visibility = 'hidden';
    document.getElementById("PinterestShare").style.visibility = 'hidden';
    document.getElementById("WhatsappShare").style.visibility = 'hidden';
}
