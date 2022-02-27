window.addEventListener('load', _ => {
    document.getElementById('music').volume = 0.1;
    let counter = 0;
    let stoped = false;
    window.addEventListener('message', (e) => {
        // Needs to be tested because atm it's not smooth
        if (e.data.eventName == 'endInitFunction') {
            counter++
            if (counter == 2) {
                document.getElementById('app').style.opacity = '0';
            }
        }
    });
    
    document.body.onkeyup = function(e){
        if(e.keyCode == 32){
            if (stoped == false){
                document.getElementById('music').volume = 0;
                stoped = true;
            }else if(stoped == true){
                document.getElementById('music').volume = 0.1;
                stoped = false;
            }
        }
    };
})
