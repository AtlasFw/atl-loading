const video = document.getElementById('video');
let counter = 0;
window.addEventListener('message', (e) => {
  // Needs to be tested because atm it's not smooth
  if (e.data.eventName == 'endInitFunction') {
    counter++
    if (counter == 2) {
      document.getElementById('app').style.opacity = '0';
    }
  }
});

window.addEventListener('keyup', (e) => {
  if (e.code === 'Space') {
    video.muted ? video.muted = false : video.muted = true;
  }
})