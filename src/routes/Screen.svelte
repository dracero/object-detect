<script>
    // @ts-nocheck
    import html2canvas from 'html2canvas';
  
    let screenshotUrl = '';
  
    function takeScreenshot() {
      html2canvas(document.body).then(canvas => {
        screenshotUrl = canvas.toDataURL();
        console.log(screenshotUrl);
      });
    }
  </script>
  
  <button on:click={takeScreenshot}>Take Screenshot</button>
  