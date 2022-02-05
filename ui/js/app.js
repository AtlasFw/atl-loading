window.addEventListener('load', _ => {
    let value = 0;
    let counter = 0;
    const loading = document.getElementById('loading-bar');
    const myAudio = document.getElementById('music');
    myAudio.volume = 0.1;

    window.addEventListener('message', function(e) {
        switch (e.data.eventName) {
            case 'initFunctionInvoking':
                counter++
                value = (counter * 100) / 224
                break;
            case 'performMapLoadFunction':+
                counter++
                value = (counter * 100) / 224
                break;
        }
        loading.style.opacity = `${value / 100}`
        if (value <= 100) {
            loading.style.width = `${value}%`;
        }
    });
})