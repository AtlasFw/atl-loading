window.addEventListener('load', _ => {
    document.getElementById('music').volume = 0.1;
    let counter = 0;
    window.addEventListener('message', (e) => {
        if (e.data.eventName == 'endInitFunction') {
            counter++
            if (counter == 2) {
                setTimeout(() => {
                    document.getElementById('app').style.opacity = '0';
                }, 5000);
            }
        }
    });
})