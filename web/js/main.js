const video = document.getElementById('video');

window.addEventListener('keyup', (e) => {
  if (e.code === 'Space') {
    video.muted ? (video.muted = false) : (video.muted = true);
  }
});
