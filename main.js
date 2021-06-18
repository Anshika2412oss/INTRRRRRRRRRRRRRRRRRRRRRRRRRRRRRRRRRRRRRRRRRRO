function preload(){

}

function setup(){
    canvas=createCanvas(630 , 480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide()
    filter_color="";
}

function draw(){
    image(video, 0 , 0 , 630 , 480);
    tint(filter_color);
}
function apply_filter(){
    filter_color= document.getElementById("color_name").value;
}
function take_snapshot(){
    save('anshika.png');
}