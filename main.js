function setup(){
    canvas=createCanvas(480,380);
    canvas.center();
    
}
function draw(){
    image(video,0,0,480,380);
    if(status != ""){
        objectdetector.detect(video,gotresults);
       for(i=0;i<object.length;i++){
           document.getElementById("status").innerHTML="status:ojects dected";
           document.getElementById("no_of_objects").innerHTML="No of objects dected are: "+object.length;
           fill("#ff0000");
           percent=floor(object[i].confidence*100);
           text(object[i].label+" "+percent+"%",object[i].x+15,object[i].y+15);
            noFill();
            stroke("#ff0000");
            rect(object[i].x,object[i].y,object[i].width,object[i].height);

       } 
    }
    

}
 function gotresults(error,result){
if(error){
    console.log(error)
}
else{
    console.log(result);
    object=result;
}
 }
function start(){
    objectdetector=ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML="status : decting objects"

}
function modelloaded(){
   console.log("modelloaded");
   status=true;
   video.loop();
   video.speed(1);
   video.volume(0); 
}