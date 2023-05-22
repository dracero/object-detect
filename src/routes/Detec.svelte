<script>
// @ts-ignore
import * as tf from "@tensorflow/tfjs";
import { onMount } from 'svelte';
// @ts-ignore
let dataCollectorButtons;

onMount (() => {
 
const STATUS = document.getElementById('status');
const VIDEO = document.getElementById('webcam');
const ENABLE_CAM_BUTTON = document.getElementById('enableCam');
const TRAIN_BUTTON = document.getElementById('train');
const MOBILE_NET_INPUT_WIDTH = 224;
const MOBILE_NET_INPUT_HEIGHT = 224;
const STOP_DATA_GATHER = -1;
// @ts-ignore
const CLASS_NAMES = [];
// @ts-ignore
ENABLE_CAM_BUTTON.addEventListener('click', enableCam);
// @ts-ignore
TRAIN_BUTTON.addEventListener('click', trainAndPredict);

// @ts-ignore
let mobilenet = undefined;
let gatherDataState = STOP_DATA_GATHER;
let videoPlaying = false;
// @ts-ignore
let trainingDataInputs = [];
// @ts-ignore
let trainingDataOutputs = [];
// @ts-ignore
let examplesCount = [];
let predict = false;

const status = document.getElementById('status');
if (status) {
  // @ts-ignore
  status.innerText = 'Loaded TensorFlow.js - version: ' + tf.version.tfjs;
}

function hasGetUserMedia() {
  return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
}

function enableCam() {
  if (hasGetUserMedia()) {
    // getUsermedia parameters.
    const constraints = {
      video: true,
      width: 640, 
      height: 480 
    };

    // Activate the webcam stream.
    navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
      // @ts-ignore
      VIDEO.srcObject = stream;
      // @ts-ignore
      VIDEO.addEventListener('loadeddata', function() {
        videoPlaying = true;
        // @ts-ignore
        ENABLE_CAM_BUTTON.parentNode.removeChild(ENABLE_CAM_BUTTON);
      });
    });
  } else {
    console.warn('getUserMedia() is not supported by your browser');
  }
}

function predictLoop() {
  if (predict) {
    // @ts-ignore
    tf.tidy(function() {
      // @ts-ignore
      let videoFrameAsTensor = tf.browser.fromPixels(VIDEO).div(255);
      // @ts-ignore
      let resizedTensorFrame = tf.image.resizeBilinear(videoFrameAsTensor,[MOBILE_NET_INPUT_HEIGHT, 
          MOBILE_NET_INPUT_WIDTH], true);

      // @ts-ignore
      let imageFeatures = mobilenet.predict(resizedTensorFrame.expandDims());
      // @ts-ignore
      let prediction = model.predict(imageFeatures).squeeze();
      let highestIndex = prediction.argMax().arraySync();
      let predictionArray = prediction.arraySync();

      // @ts-ignore
      STATUS.innerText = 'Prediction: ' + CLASS_NAMES[highestIndex] + ' with ' + Math.floor(predictionArray[highestIndex] * 100) + '% confidence';
    });

    window.requestAnimationFrame(predictLoop);
  }
}

async function trainAndPredict() {
  predict = false;
  // @ts-ignore
  tf.util.shuffleCombo(trainingDataInputs, trainingDataOutputs);
  // @ts-ignore
  let outputsAsTensor = tf.tensor1d(trainingDataOutputs, 'int32');
  // @ts-ignore
  let oneHotOutputs = tf.oneHot(outputsAsTensor, CLASS_NAMES.length);
  // @ts-ignore
  let inputsAsTensor = tf.stack(trainingDataInputs);
  
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  let results = await model.fit(inputsAsTensor, oneHotOutputs, {shuffle: true, batchSize: 5, epochs: 10, 
      callbacks: {onEpochEnd: logProgress} });
  
  outputsAsTensor.dispose();
  oneHotOutputs.dispose();
  inputsAsTensor.dispose();
  predict = true;
  predictLoop();
}

// @ts-ignore
function logProgress(epoch, logs) {
  console.log('Data for epoch ' + epoch, logs);
}

dataCollectorButtons = document.querySelectorAll('button.dataCollector');
for (let i = 0; i < dataCollectorButtons.length; i++) {
  dataCollectorButtons[i].addEventListener('mousedown', gatherDataForClass);
  dataCollectorButtons[i].addEventListener('mouseup', gatherDataForClass);
  // Populate the human readable names for classes.
  CLASS_NAMES.push(dataCollectorButtons[i].getAttribute('data-name'));
}


/**
 * Handle Data Gather for button mouseup/mousedown.
 **/
function gatherDataForClass() {
  // @ts-ignore
  let classNumber = parseInt(this.getAttribute('data-1hot'));
  gatherDataState = (gatherDataState === STOP_DATA_GATHER) ? classNumber : STOP_DATA_GATHER;
  dataGatherLoop();
}

function dataGatherLoop() {
  if (videoPlaying && gatherDataState !== STOP_DATA_GATHER) {
    // @ts-ignore
    let imageFeatures = tf.tidy(function() {
      // @ts-ignore
      let videoFrameAsTensor = tf.browser.fromPixels(VIDEO);
      // @ts-ignore
      let resizedTensorFrame = tf.image.resizeBilinear(videoFrameAsTensor, [MOBILE_NET_INPUT_HEIGHT, 
          MOBILE_NET_INPUT_WIDTH], true);
      let normalizedTensorFrame = resizedTensorFrame.div(255);
      // @ts-ignore
      return mobilenet.predict(normalizedTensorFrame.expandDims()).squeeze();
    });

    trainingDataInputs.push(imageFeatures);
    trainingDataOutputs.push(gatherDataState);
    
    // Intialize array index element if currently undefined.
    // @ts-ignore
    if (examplesCount[gatherDataState] === undefined) {
      examplesCount[gatherDataState] = 0;
    }
    // @ts-ignore
    examplesCount[gatherDataState]++;

    // @ts-ignore
    STATUS.innerText = '';
    for (let n = 0; n < CLASS_NAMES.length; n++) {
      // @ts-ignore
      STATUS.innerText += CLASS_NAMES[n] + ' data count: ' + examplesCount[n] + '. ';
    }
    window.requestAnimationFrame(dataGatherLoop);
  }
}

/**
 * Loads the MobileNet model and warms it up so ready for use.
 **/
async function loadMobileNetFeatureModel() {
  const URL = 
    'https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v3_small_100_224/feature_vector/5/default/1';
  
  // @ts-ignore
  mobilenet = await tf.loadGraphModel(URL, {fromTFHub: true});
  // @ts-ignore
  STATUS.innerText = 'MobileNet v3 loaded successfully!';
  
  // Warm up the model by passing zeros through it once.
  // @ts-ignore
  tf.tidy(function () {
    // @ts-ignore
    let answer = mobilenet.predict(tf.zeros([1, MOBILE_NET_INPUT_HEIGHT, MOBILE_NET_INPUT_WIDTH, 3]));
    console.log(answer.shape);
  });
}

// Call the function immediately to start loading.
loadMobileNetFeatureModel();

// @ts-ignore
let model = tf.sequential();
// @ts-ignore
model.add(tf.layers.dense({inputShape: [1024], units: 128, activation: 'relu'}));
// @ts-ignore
model.add(tf.layers.dense({units: CLASS_NAMES.length, activation: 'softmax'}));

model.summary();

// Compile the model with the defined optimizer and specify a loss function to use.
model.compile({
  // Adam changes the learning rate over time which is useful.
  optimizer: 'adam',
  // Use the correct loss function. If 2 classes of data, must use binaryCrossentropy.
  // Else categoricalCrossentropy is used if more than 2 classes.
  loss: (CLASS_NAMES.length === 2) ? 'binaryCrossentropy': 'categoricalCrossentropy', 
  // As this is a classification problem you can record accuracy in the logs too!
  metrics: ['accuracy']  
});
})
</script>
<h1>TensorFlow.js Example</h1>
  <p id="status"></p>
  <!-- svelte-ignore a11y-media-has-caption -->
  <video id="webcam" width="640" height="480" autoplay></video>
  <button id="enableCam" >Enable Webcam</button>
  <button id="train">Train and Predict</button>
  <button class="dataCollector" data-1hot="0" data-name="Class 1">Gather Class 1 Data</button>
  <button class="dataCollector" data-1hot="1" data-name="Class 2">Gather Class 2 Data</button>
