let webcamList = document.getElementById("webcamList");
let camButton = document.getElementById("cameraButton");
let video = document.getElementById("videoPlayer");
let phoButton = document.getElementById("photoButton");

navigator.mediaDevices.getUserMedia({audio: false, video: true})
    .then(stream => {
        camButton.addEventListener("click", () => launchVideo(stream))
        navigator.mediaDevices.enumerateDevices().then(devices => {
            for(let device of devices){
                if(device.kind === "videoinput"){
                    const option = document.createElement("option");
                    option.value = device.deviceID;
                    option.textContent = device.label;
                    webcamList.append(option);
                }
            }
        })
    })
    .catch(error => console.log(error));

function launchVideo(stream){
    video.srcObject = stream;
    video.play();
    phoButton.addEventListener("click", takePhoto());
}

function takePhoto(){
    //convertir la vidéo en image est l'affiché via canvas ?
}

