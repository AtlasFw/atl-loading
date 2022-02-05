

window.addEventListener('load', _ => {
    let value = 0;
    const loading = document.getElementById('loading-bar');
    const myAudio = document.getElementById('music');
    myAudio.volume = 0.1;

    window.addEventListener('message', function(e) {
        switch (e.data.eventName) {
            case 'startInitFunction':
                value = value + 1/10
                break;
            case 'startInitFunctionOrder':
                value = value + 1/10
                break;
            case 'initFunctionInvoking':
                value = value + 1/10
                break;
            case 'initFunctionInvoked':
                value = value + 1/10
                break;
            case 'endInitFunction':
                value = value + 1/10
                break;
            case 'startDataFileEntries':
                value = value + 1/10
                break;
            case 'onDataFileEntry':
                value = value + 1/10
                break;
            case 'endDataFileEntries':
                value = value + 1/10
                break;
        }
        loading.style.opacity = `${value / 100}`
        if (value <= 100) {
            loading.style.width = `${value}%`;
        }
    });
})

