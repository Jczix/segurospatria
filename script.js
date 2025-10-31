// Preload the video
const video = document.getElementById('scary-video');
video.load();

// Form submission handler
document.getElementById('lottery-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Hide form and show video
    document.getElementById('form-container').style.display = 'none';
    document.getElementById('video-container').style.display = 'block';

    // Play video in fullscreen
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
    }

    // Start playing the video
    video.muted = false; // Unmute for scare effect
    video.play();
});

// Exit video handler
document.getElementById('exit-video').addEventListener('click', function() {
    // Exit fullscreen if in fullscreen
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }

    // Hide video and show form again
    document.getElementById('video-container').style.display = 'none';
    document.getElementById('form-container').style.display = 'block';

    // Reset video
    video.pause();
    video.currentTime = 0;
    video.muted = true;
});