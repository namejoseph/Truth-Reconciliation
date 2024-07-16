
var playState = 0;
var karolPanelState = 0

function toggleNavFunction() {
    if (document.getElementById("temp-nav-menu").style.display == "block") {
        document.getElementById("temp-nav-menu").style.display = "none";
    } else {
        document.getElementById("temp-nav-menu").style.display = "block";
    }
    
}

function playSoundscape() {
    if (playState == 0) {
        var x = document.getElementById("audioSoundscape").play();
        document.getElementById("btnPlayPause").src = "tr-img-btn-audio-pause.png";
        playState = 1;
    } else {
        var x = document.getElementById("audioSoundscape").pause();
        document.getElementById("btnPlayPause").src = "tr-img-btn-audio-play.png";
        playState = 0;
    }
}

function nextSoundscape() {
    var x = document.getElementById("audioSoundscape").load();
    if (playState == 1) {
        var x = document.getElementById("audioSoundscape").play();
    }
}

function rewindSoundscape() {
    var x = document.getElementById("audioSoundscape").load();
    if (playState == 1) {
        var x = document.getElementById("audioSoundscape").play();
    }
}

function openKarolPanel() {
    if (karolPanelState == 0) {
        document.getElementById("karol-obj").src = "tr-website-karol-panel-open.png";
        document.getElementById("karol-obj").style.width = "15%";
        console.log("expand");
        karolPanelState = 1;    
    } else {
        document.getElementById("karol-obj").src = "tr-website-karol-panel-closed.gif";
        document.getElementById("karol-obj").style.width = "6%";
        console.log("close");
        karolPanelState = 0;
    }
}

function openNeighborhoodPanel() {
    document.getElementById("temp-panel-demo").style.display = "inline";
}

function closeNeighborhoodPanel() {
    document.getElementById("temp-panel-demo").style.display = "none";
}