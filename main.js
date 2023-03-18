x=0;
y=0;
draw_apple="";
to_number=0;
apple="";
speak_data="";



var SpeechRecognition= window.webkitSpeechRecognition;
var recognition= new SpeechRecognition();
function preload(){
    apple=loadImage("apple.png");
}

function start(){
    document.getElementById("status").innerHTML="system is listening please speak";
    recognition.start();

}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("status").innerHTML="the speech has been recognized as: "+content;
    to_number=Number(content);
   if(Number.isInteger(to_number)){
       draw_apple="set";
   }
   
}
function setup(){
    canvas=createCanvas(900,600);
    canvas.center();
}

function draw(){
    if(draw_apple=="set"){
        for(var i=1; i<=to_number; i++){
            x=Math.floor(Math.random()*900);
            y=Math.floor(Math.random()*600);
            image(apple,x,y,50,50);

        }
        draw_apple="";
    }
}