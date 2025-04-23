var video = document.getElementById('video');
var cameraShot = document.getElementById('camera-snapshot')

if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({
        video: true
    }).then(function(stream) {
        video.srcObject = stream;
        video.play()
    })
}

cameraShot.addEventListener('click', mouseOvershot);

function mouseOvershot(e) {
    Array.from(cameraShot).forEach(function(shot) {
        console.log(shot)
    })
}

document.getElementById('snap').addEventListener('click', function() {
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d')

    canvas.className = 'canvas'
    console.log(canvas)

    cameraShot.appendChild(canvas);
    context.drawImage(video,0,0,280,200)
})