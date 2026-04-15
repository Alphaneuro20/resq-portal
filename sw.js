const CACHE_NAME = "resq-app-v3"; // Version bumped for cache busting

// The "Backpack" List - Now includes the core structural files too!
const ASSETS_TO_CACHE = [
   "./",
   "./index.html",
   "./style.css",
   "./script.js",
   "./cpr.jpg",
   "./bleeding.jpg",
   "./burn.jpg",
   "./fracture.jpg",
   "./first_aid.jpg",
   "./stroke.jpg",
   "./snake.jpg"
];

// 1. INSTALL: Pack the initial backpack
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log("System Installed: Caching Core Files...");
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

// 2. ACTIVATE: The Version Checker (Cache Busting)
// Deletes old versions of the cache so users get your latest code updates
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        console.log("Deleting old cache:", cache);
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

// 3. FETCH: Dynamic Caching 
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            // Return from cache if we have it
            if (cachedResponse) return cachedResponse;

            // If we don't have it, fetch from network and save it for next time!
            return fetch(event.request).then((networkResponse) => {
                return caches.open(CACHE_NAME).then((cache) => {
                    // Only cache valid responses
                    if (event.request.method === "GET" && networkResponse.status === 200) {
                         cache.put(event.request, networkResponse.clone());
                    }
                    return networkResponse;
                });
            }).catch(() => {
                // If offline and file isn't cached, fail silently rather than crashing
                console.log("Offline and resource not cached:", event.request.url);
            });
        })
    );
});
