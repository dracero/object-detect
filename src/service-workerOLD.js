import { registerRoute } from 'workbox-routing';
import { CacheFirst } from 'workbox-strategies';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import { setCatchHandler } from 'workbox-routing';
import { openDB } from 'idb';

// Warm the cache when the service worker installs
self.addEventListener('install', event => {
  const files = ['/pages/offline.html']; // you can add more resources here
  event.waitUntil(
    self.caches.open('offline-fallbacks')
        .then(cache => cache.addAll(files))
  );
});

// Respond with the fallback if a route throws an error
setCatchHandler(async (options) => {
  const destination = options.request.destination;
  const cache = await self.caches.open('offline-fallbacks');
  if (destination === 'document') {
    return (await cache.match('/pages/offline.html')) || Response.error();
  }
  return Response.error();
});

const pageStrategy = new CacheFirst({
  // Put all cached files in a cache named 'pages'
  cacheName: 'pages',
  plugins: [
    // Only requests that return with a 200 status are cached
    new CacheableResponsePlugin({
      statuses: [200],
    }),
  ],
});

// Cache page navigations (HTML) with a Cache First strategy
registerRoute( ({ request }) => request.mode === 'navigate',
  pageStrategy );

//IndexDB for offline
async function createDB() {
  // Using https://github.com/jakearchibald/idb
  const db = await openDB('cookbook', 1, {
    upgrade(db, oldVersion, newVersion, transaction) {
      // Switch over the oldVersion, *without breaks*, to allow the database to be incrementally upgraded.
    switch(oldVersion) {
     case 0:
       // Placeholder to execute when database is created (oldVersion is 0)
     case 1:
       // Create a store of objects
       const store = db.createObjectStore('recipes', {
         // The `id` property of the object will be the key, and be incremented automatically
           autoIncrement: true,
           keyPath: 'id'
       });
       // Create an index called `name` based on the `type` property of objects in the store
       store.createIndex('type', 'type');
     }
   }
  });
}  
createDB();
// Using https://github.com/jakearchibald/idb
async function addData() {
  const cookies = {
      name: "Chocolate chips cookies",
      type: "dessert",
	    cook_time_minutes: 25
  };
  const db = await openDB('cookbook',1)
  const tx = await db.transaction('recipes', 'readwrite');
  const store = tx.objectStore('recipes');
  store.add(cookies);
  await tx.done;
}
addData();
// Using https://github.com/jakearchibald/idb
async function getData() {
  const db = await openDB('cookbook',1)
  const tx = await db.transaction('recipes', 'readonly')
  const store = tx.objectStore('recipes');
// Because in our case the `id` is the key, we would
// have to know in advance the value of the id to
// retrieve the record
  const id = 1;
  const value = await store.get([id]);
}
getData();


