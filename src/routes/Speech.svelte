<script>
    // @ts-nocheck
    import { onMount } from 'svelte';
  
    let recognition = null;
    let transcript = '';
  
    onMount(() => {
      window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognition = new window.SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
  
      recognition.onresult = event => {
        transcript = Array.from(event.results)
          .map(result => result[0])
          .map(result => result.transcript)
          .join('');
  
      };
  
      recognition.start();
    });
  </script>
  
  <p>{transcript}</p>
  