const intro = document.querySelector("top-Image");
let scrollY = window.scrollY;
const video = document.querySelector('video'); // select the video element 

// Set playback rate to 2 (twice the normal speed)
video.playbackRate = 2;

// Set playback rate to 0.5 (half the normal speed)
video.playbackRate = 0.5;

window.addEventListener("scroll", ()=>{
    if(scrollY < window.scrollY){
        console.log("down");
    }else{
        console.log("up");
    }
})

myID = document.getElementById("container");
fill = document.getElementById("fil");
card = document.getElementById("ca");
cd = document.getElementById("s23");
s2 = document.getElementById("section2")

var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 250 && y<700) {
        myID.className = "top-Image show"
        //fill.className = "fill show"
    } else if(y <= 250){
        //fill.className = "fill hide"
        myID.className = "top-Image hide"
        card.className = "image-cont hide"

    }else if(y>=700){
        //fill.className = "fill hide"
        myID.className = "top-Image hide"
    }
    if(y>=710 && y<1100){
        card.className = "image-cont show"
    }else if(y<720){
        
        card.className = "image-cont hide"
    }
    if(y>1150){
        s2.className = "se2 show"
        cd.className = "Section3 show"
    }else{
        cd.className = "Section3 hide"
        s2.className = "se2 hide"
    }
    
};

window.addEventListener("scroll", myScrollFunc);