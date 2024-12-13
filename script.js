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

var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 250) {
        myID.className = "top-Image show"
        fill.className = "fill show"
    } else if(y <= 250){
        fill.className = "fill hide"
        myID.className = "top-Image hide"
    }
    if(y>=700){
        fill.className = "fill hide"
        myID.className = "top-Image hide"
        card.className = "revolve show"
    }
};

window.addEventListener("scroll", myScrollFunc);
