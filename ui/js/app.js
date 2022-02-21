window.addEventListener('load', _ => {
    document.getElementById('music').volume = 0.1;
    window.addEventListener('message', (e) => {
        if (e.data.eventName == 'endInitFunction') {
            document.getElementById('app').style.opacity = '0';
        }
    });
})