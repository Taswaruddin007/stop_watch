window.onload = function(){
    var tens = 0;
    var seconds = 0;
    var appendTens = document.getElementById("tens");
    var appendSeconds = document.getElementById("seconds");
    var buttonStart = document.getElementById("button-start");
    var buttonStop = document.getElementById("button-stop");
    var buttonReset = document.getElementById("button-reset");
    var interval;

    buttonStart.onclick = function(){
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    }

        buttonStop.onclick = function(){
            clearInterval(interval);
        }

    buttonReset.onclick = function(){
        tens = "00";
        seconds = "00";
        document.getElementById("tens").innerHTML = tens;
        document.getElementById("seconds").innerHTML = seconds;
    }

    function startTimer(){
        tens++;

        if(tens <= 9){
            appendTens.innerHTML = "0" + tens;
        }
        if(tens > 9){
            appendTens.innerHTML = tens;
        }
        if(tens > 99){
            console.log("seconds");
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }
        if(seconds > 9){
            appendSeconds.innerHTML = seconds;
        }
    }
}