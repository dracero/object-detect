<script>
    import { onMount } from "svelte";
    // @ts-ignore
    let stream;
    // @ts-ignore
    let videoRef;
    // @ts-ignore
    /**
	 * @type {HTMLCanvasElement}
	 */
    let canvasRef;

    async function getStream() {
        try {
            stream = await navigator.mediaDevices.getUserMedia({
                video: true,
                audio: false
            });
            // @ts-ignore
            videoRef.srcObject = stream;
        } catch (err) {
            console.error(err);
        }
        // @ts-ignore
        console.log(stream.getTracks()[0])
    }

    // Add this function to send the locally saved photo to the server
    async function sendLocalPhoto() {
        const localPhoto = localStorage.getItem('photo');
        if (localPhoto) {
            const response = await fetch('/api/inPhoto', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ imageData: localPhoto })
            });
            if (response.ok) {
                console.log("Local photo sent to server");
                localStorage.removeItem('photo');
            } else {
                console.error("Error sending local photo:", response.statusText);
            }
        }
    }

    async function takePhoto() {
        // @ts-ignore
        canvasRef.getContext('2d').drawImage(videoRef, 0, 0, canvasRef.width, canvasRef.height);
        const dataUrl = canvasRef.toDataURL('image/png');

        if (navigator.onLine) {
            // Send the image data to the server
            const response = await fetch('/api/inPhoto', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ imageData: dataUrl })
            });
            if (response.ok) {
                console.log("Data inserted successfully");
            } else {
                console.error("Error inserting data:", response.statusText); 
            }
        } else {
            // Save the photo locally
            localStorage.setItem('photo', dataUrl);
            console.log("Photo saved locally");
        }
    }

    onMount(() => {
        getStream();
        // Listen for when the device goes back online
        window.addEventListener('online', sendLocalPhoto);
    });

</script>

<section class="container mx-auto px-4">
    <h1 class="text-4xl text-blue-500 my-4">Webcam Stream Mastery</h1>
    <button class="rounded-sm bg-blue-600 text-white px-4 py-2" on:click|preventDefault={takePhoto}>Take Photo</button>
    <!-- svelte-ignore a11y-media-has-caption -->
    <video class="mt-4 rounded-sm " width="640" height="480" autoplay={true} bind:this={videoRef} />

    <canvas class="mt-4 rounded-sm" width="640" height="480" bind:this={canvasRef}></canvas>
</section>
