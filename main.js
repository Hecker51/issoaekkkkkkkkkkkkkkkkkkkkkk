
Webcam.set({
  width: 350,
  height: 300,
  image_format: 'png',
  png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');







function takeSnapshot() {
  Webcam.snap(function (data_uri) {
    document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
  });
}





console.log('ml5 version:', ml5.version);






var classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json', modelLoaded);







function modelLoaded() {
  console.log('Model Loaded!');




}


function check()
{
img = document.getElementById("captured_image");
classifier.classify(img,pegarResultado);

}

function pegarResultado(error,results)
{
if(error){
console.log(error)

}else{
console.log(results)
var nome = results [0].label
var conf = results [0].confidence
document.getElementById("nomesla").innerHTML = nome;
document.getElementById("nomesla2").innerHTML = conf.toFixed(2);
}



}
