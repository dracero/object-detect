import { registerSW } from 'svelte-kit/sw';
import { Workbox } from 'workbox-window';
import { onMount } from 'svelte';

import './service-worker.js';

const workbox = new Workbox('./service-worker.js');

registerSW({
  onNeedRefresh() {
    workbox.addEventListener('controlling', () => {
      window.location.reload();
    });

    workbox.messageSkipWaiting();
  },
});

onMount(() => {
  workbox.register();
});

