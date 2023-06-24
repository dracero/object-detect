<script lang="ts">
	//import Cam from './Cam.svelte';
    import { page } from "$app/stores"
    import Detect from '../Detec.svelte';
    import Snap from '../Snap.svelte';
    import Screen from '../Screen.svelte';
    import Speech from '../Speech.svelte';
    import Detectab from '../Detect.svelte';
    import Mic from '../Mic.svelte';
</script>
{#if $page.data.session}
<h1>Protected pagea</h1>
<p>
  This is a protected content. You can access this content because you are
  signed in.
</p>
<Detect />
<Snap />
<Screen />
<Speech />
<Detectab />
<Mic />
<embed src="http://chimuelo.fi.uba.ar/" title="Google" width="100%" height="500" />
<p>Session expiry: {$page.data.session?.expires}</p>
{:else}
<h1>Access Denied</h1>
<p>
  <a href="/auth/signin">
    You must be signed in to view this page
  </a>
</p>
{/if}
