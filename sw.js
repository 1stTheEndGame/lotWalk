const CACHE_NAME = 'lotwalk-cache-v015';
const ASSETS = [
  './','./index.html','./404.html','./manifest.webmanifest',
  './icons/icon-192.png','./icons/icon-512.png',
  'https://unpkg.com/react@18/umd/react.production.min.js',
  'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js',
  'https://unpkg.com/@babel/standalone/babel.min.js',
  'https://cdn.tailwindcss.com'
];
self.addEventListener('install', e=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS))); self.skipWaiting();});
self.addEventListener('activate', e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.map(k=>k===CACHE_NAME?null:caches.delete(k))))); self.clients.claim();});
self.addEventListener('fetch', e=>{
  const req=e.request;
  if(req.mode==='navigate'){
    e.respondWith(fetch(req).then(res=>{caches.open(CACHE_NAME).then(c=>c.put(req,res.clone()));return res;})
      .catch(()=>caches.match(req).then(r=>r||caches.match('./index.html'))));
  } else {
    e.respondWith(caches.match(req).then(cached=>cached||fetch(req).then(res=>{caches.open(CACHE_NAME).then(c=>c.put(req,res.clone()));return res;}).catch(()=>cached)));
  }
});