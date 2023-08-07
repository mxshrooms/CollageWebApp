speechRecognition = window.webkitSpeechRecognition;
testRecognition = new speechRecognition();

function start() {
    document.getElementById("voiceoutput").innerHTML = "";
    testRecognition.start();
}

testRecognition.onresult = function(event) {
    console.log(event);
    content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("voiceoutput").innerHTML = content;
    speak();
}
function speak() {
    var synth = window.speechSynthesis;
    speakData = document.getElementById("voiceoutput").value;
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
    Webcam.attach(camera);
}

Webcam.set({
    width: 400, height: 480, image_format: "png", png_quality: 100
});

camera = document.getElementById("camera");