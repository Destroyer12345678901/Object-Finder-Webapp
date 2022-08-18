status_of_cocossd = "";
status = "";
function setup(){
    canvas = createCanvas(480,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
   document.getElementById("status").innerHTML = "Status: Detecting Objects";
   document.getElementById("input1").value = input_value_holder;
}
function modelLoaded(){
    console.log("Model is Loaded!");
    status = true;
}
function draw(){
 image(video, 0, 0, 480,380);   
}