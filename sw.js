const CACHE_NAME = "resq-app-v2"; // Changed version number to force update

// The "Backpack" List
const ASSETS_TO_CACHE = [
   "./cpr.jpg",
   "./bleeding.jpg",
   "./burn.jpg",
   "./fracture.jpg",
   "./first_aid.jpg",
   "./stroke.jpg",
];

// 1. INSTALL: Pack the backpack
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log("System Installed: Caching Files...");
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

// 2. FETCH: Use the backpack content when offline
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            // Return cached file OR try to download if online
            return response || fetch(event.request);
        })
    );
});
