/* Strict JavaScript */
"use strict";

// Declare currentImageIndex in the global scope
let currentImageIndex = 1;

// Variable for videoplayer container (select from HTML)
let videoPlayer;

// Variable for image tags
let img1 = document.getElementById("imgCaptured1");
let img2 = document.getElementById("imgCaptured2");
let img3 = document.getElementById("imgCaptured3");

// Event listeners
document.getElementById("selfieBtn").addEventListener("click", startVideo);
document.getElementById("captureBtn").addEventListener("click", captureImage);
document.getElementById("pickImgBtn").addEventListener("click", pickImage);
document.getElementById("imagePicker").addEventListener("change", captureImagePick);

// Function to display the camera video stream (Source: Inspiration Template Camera Avans MDEV CMD)
function startVideo() {
    if ("mediaDevices" in navigator) {
        navigator.mediaDevices
            .getUserMedia({ video: true })
            .then(function (stream) {
                videoPlayer = document.querySelector("#player");
                videoPlayer.srcObject = stream;
                document.getElementById("secSelfie").style.display = "block";
            })
            .catch(function (error) {
                console.log("There was an error", error);
                document.getElementById("pickImage").style.display = "block";
            });
    }
}

// Function to capture a snapshot from the camera video stream (Source: Inspiration Template Camera Avans MDEV CMD)
function captureImage() {
    navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
        let mediaStreamTrack = stream.getVideoTracks()[0];
        let imageCapture = new ImageCapture(mediaStreamTrack);

        imageCapture
            .takePhoto()
            .then((blob) => {
                updateCurrentImage(blob);
                setCapturedImageStyles();
            })
            .catch((error) => console.error("takePhoto() error:", error));
    });
}

// Function to update the current image with the captured photo (Source: Partly inspiration Template Camera Avans MDEV CMD)
function updateCurrentImage(blob) {
    switch (currentImageIndex) {
        case 1:
            img1.src = URL.createObjectURL(blob);
            break;
        case 2:
            img2.src = URL.createObjectURL(blob);
            break;
        case 3:
            img3.src = URL.createObjectURL(blob);
            break;
        default:
            break;
    }

    // Increment the current image index or reset if it exceeds the total number of images
    currentImageIndex = (currentImageIndex % 3) + 1;
}

// Function to set the captured image styles (Source: Inspiration Template Camera Avans MDEV CMD)
function setCapturedImageStyles() {
    let capturedImages = document.querySelectorAll(".capturedImage");
    capturedImages.forEach((img) => {
        img.onload = () => {
            URL.revokeObjectURL(img.src);
            img.style.width = '100%'; // Set the width to fill up the selBox while maintaining aspect ratio
            img.style.height = 'auto'; // Set the height to auto to maintain aspect ratio
        };
    });
}

// Function to stop the camera stream (Source: Inspiration Template Camera Avans MDEV CMD)
function stopStreaming() {
    if (videoPlayer) {
        videoPlayer.srcObject.getVideoTracks().forEach(function (track) {
            track.stop();
        });
    }
    document.getElementById("secSelfie").style.display = "none";
}

// Function to pick an image instead of a screen capture (Source: Inspiration Template Camera Avans MDEV CMD)
function pickImage() {
    stopStreaming();
    document.getElementById("pickImage").style.display = "block";
}

// Function to capture the selected image file or blob (Source: Partly inspiration Template Camera Avans MDEV CMD)
function captureImagePick(input) {
    let reader = new FileReader();
    reader.onload = function (e) {
        img1.src = e.target.result;
        img2.src = e.target.result;
        img3.src = e.target.result;
        setCapturedImageStyles();
    };

    reader.readAsDataURL(input.target.files[0]); // Represent the blob/image as a data URL
}

/* Camera {End functions for the camera} */
