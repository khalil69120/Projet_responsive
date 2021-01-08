const site_name = "test-pwa";
const assets = ["Projet.html", "Projet.css", "Projet.js"];

self.addEventListener("install", (installEvent) => {
    installEvent.waitUntil(
        caches.open(site_name).then((cache) => {
            cache.addAll(assets);
        })
    );
});

self.addEventListener("fetch", (fetchEvent) => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then((res) => {
            return res || fetch(fetchEvent.request);
        })
    );
});
