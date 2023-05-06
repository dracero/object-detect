<script>
    import { onMount } from 'svelte';
    import { dev } from '$app/environment';
    import Cam from './Cam.svelte';
   
    function registerServiceWorker() {
        if ('serviceWorker' in navigator) {
            addEventListener('load', function () {
                navigator.serviceWorker.register('../service-worker.js');
    });
}
    }

   // Detecting service worker update and reload the page.
    async function detectSWUpdate() {
          const registration = await navigator.serviceWorker.ready;
          registration.addEventListener("updatefound", event => {
            const newSW = registration.installing;
            newSW.addEventListener("statechange", event => {
                if (newSW.state == "installed") {
                    console.log('New service worker installed');
                    // New service worker is installed, but waiting activation
      }
    });
  })
}


    onMount(async () => {   
        registerServiceWorker();
        detectSWUpdate();
    });

</script>
<Cam />

