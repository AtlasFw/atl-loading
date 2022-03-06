console.log("Loading app.js. This is the main application file. It is loaded after all other files.");

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
  console.log(e.code);
  if (e.code === 'Space') {
    video.muted ? video.muted = false : video.muted = true;
  }
})