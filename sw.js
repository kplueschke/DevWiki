const CACHE_NAME = 'devwiki-cache-v1';
const urlsToCache = [
    './',
    './index.html',
    './style.css',
    './script.js',
    './data.js',
    './manifest.json',
    './Analyseprofile_für_Netzwerk-Paketanalysatoren.pdf',
    './Guide_für_Netzwerk-Analyse-Filter.pdf',
    './IPv4-Header_Troubleshooting-Guide.pdf',
    './Logik-Check_bei_Negations-Filtern.pdf',
    './MVVM.pdf',
    './Namensauflösung_in_der_Netzwerkanalyse.pdf',
    './Netzwerk-Filter-Guide__Erfassung_vs._Anzeige.pdf',
    './Netzwerk-Forensik__Angriffe_mit_Display-Filtern_entlarven.pdf',
    './Netzwerkanalyse-Basiswissen__Der_ultimative_Guide.pdf',
    './TCP-Fehlersuche_in_der_Netzwerkanalyse.pdf',
    './VisualStudioCodeShortcuts.pdf',
    './VisualStudioShortcuts.pdf',
    './Visuelle_Netzwerkanalyse_und_Latenz-Diagnose.pdf',
    './Werkzeuge_für_automatisierte_Netzwerk-Analyse.pdf',
    './XMLDokumentation.pdf',
    './XMLDokumentationsTags.pdf'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Return cached response if found, else fetch from network
                return response || fetch(event.request);
            })
    );
});

self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});