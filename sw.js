/* Strict JavaScript */
"use strict";

// Log a message to the console for testing script.js and sw.js linking
console.log("TEST: link script.js and sw.js");

// Service Worker installation event
self.addEventListener("install", function (event) {
    console.log("[Service Worker] Installing Service Worker ...", event);
});

// Service Worker activation event
self.addEventListener("activate", function (event) {
    console.log("[Service Worker] Activating Service Worker ...", event);
    return self.clients.claim(); // Claim clients immediately for controlling all pages
});

// Service Worker fetch event
self.addEventListener("fetch", function (event) {
    console.log("[Service Worker] Fetching something ....", event);
    event.respondWith(fetch(event.request)); // Respond to the fetch event with the fetched resource
});
