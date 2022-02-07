window.addEventListener('load', _ => {
    const loading = document.getElementById('loading-bar');
    const myAudio = document.getElementById('music');
    let value = 0;
    let counter = 0;
    myAudio.volume = 0.1;

    window.addEventListener('message', function(e) {
        switch (e.data.eventName) {
            case 'initFunctionInvoking':
                counter++
                break;
            case 'performMapLoadFunction':
                counter++
                break;
        }
        if (counter <= 224) {
            value = (counter * 100) / 224;
            loading.style.opacity = `${value / 100}`;
            loading.style.width = `${value}%`;
        }
    });
})
