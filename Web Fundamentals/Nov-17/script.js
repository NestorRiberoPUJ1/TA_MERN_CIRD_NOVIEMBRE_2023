


function playVideo(element) {
    element.muted = true;
    element.play();

}

function pauseVideo(element) {
    element.pause();
    element.muted = false;
}

function resetVideo(element) {
    element.pause();
    element.currentTime = 0;
    element.muted = false;
}