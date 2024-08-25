let progressEl = document.getElementById("progress");
let songEl = document.getElementById("song");
let playEl = document.getElementById("playIcon");

songEl.onloadedmetadata = function(){
    progressEl.max = songEl.duration;
    progressEl.value = songEl.currentTime;
}

function playPause() {
    if (playEl.classList.contains("fa-pause")) {
        songEl.pause();
        playEl.classList.remove("fa-pause");
        playEl.classList.add("fa-play");
    }
    else {
        songEl.play();
        playEl.classList.add("fa-pause");
        playEl.classList.remove("fa-play");
        
    }
}

if(songEl.play()) {
    setInterval(()=>{
        progressEl.value = songEl.currentTime;
    },500);
    
}

progressEl.onchange = function(){
    songEl.play();
    songEl.currentTime = progressEl.value;
    playEl.classList.remove("fa-play");
    playEl.classList.add("fa-pause");
}