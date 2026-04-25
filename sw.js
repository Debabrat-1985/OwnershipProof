// ==========================================
// MemoryFlip Studio - Service Worker (PWA)
// ==========================================
// Abhi ke liye yeh SW sirf install hota hai.
// Caching / Offline logic aap baad mein add kar sakte ho.

const CACHE_NAME = 'memoryflip-v1';

// Install
self.addEventListener('install', event => {
    console.log('[SW] Installed');
    self.skipWaiting();
});

// Activate
self.addEventListener('activate', event => {
    console.log('[SW] Activated');
    event.waitUntil(clients.claim());
});

// Fetch (abhi kuch nahi karta — seedha network se fetch hoga)
self.addEventListener('fetch', event => {
    // Khali: Network se hi serve hoga, koi caching nahi abhi
});
