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
