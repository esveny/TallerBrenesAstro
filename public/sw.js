const CACHE_NAME = "tallerbrenes-cache-v1";
const urlsToCache = [
    "/",
    "/contacto",
    "/productos",
    "/mantenimiento",
    "/servicios",
];

// Pre-cachea las páginas principales al instalar
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
    );
    self.skipWaiting(); // Activa el nuevo SW inmediatamente
});

// Limpia cachés antiguos al activarse
self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) =>
            Promise.all(
                cacheNames
                    .filter((name) => name !== CACHE_NAME)
                    .map((name) => caches.delete(name))
            )
        )
    );
    self.clients.claim(); // Toma control de las pestañas abiertas
});

// Estrategia: Network First (intenta red, si falla usa caché)
self.addEventListener("fetch", (event) => {
    event.respondWith(
        fetch(event.request)
            .then((response) => {
                // Guarda una copia en caché de las respuestas exitosas
                if (response.status === 200) {
                    const responseClone = response.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseClone);
                    });
                }
                return response;
            })
            .catch(() => caches.match(event.request))
    );
});
