window.addEventListener('load', _ => {
    document.getElementById('music').volume = 0.1;
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
})