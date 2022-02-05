

window.addEventListener('load', _ => {
    let value = 0;
    const loading = document.getElementById('loading-bar');
    const myAudio = document.getElementById('music');
    myAudio.volume = 0.1;

    window.addEventListener('message', function(e) {
        switch (e.data.eventName) {
            case 'startInitFunction':

                break;
            case 'startInitFunctionOrder':

                break;
            case 'initFunctionInvoking':

                break;
            case 'initFunctionInvoked':

                break;
            case 'endInitFunction':

                break;
            case 'startDataFileEntries':

                break;
            case 'onDataFileEntry':

                break;
            case 'endDataFileEntries':

                break;
            case 'performMapLoadFunction':

                break;
            case 'onLogLine':

                break;
        }
        loading.style.width = `${value}%`;
    });
})

