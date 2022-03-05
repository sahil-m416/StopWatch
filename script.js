var playButton = document.getElementById("playButton");
var pauseButton = document.getElementById("pauseButton");
var resetButton = document.getElementById("resetButton");
var lapButton = document.getElementById("lap");
var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var second = document.getElementById("second");
var hr = 0;
var min = 0;
var sec = 0;
var isTimerOn = false;
var timerVar = false;
var counter = 1;


lapButton.addEventListener("click", function(){
    var currentTime = document.getElementById("display").innerHTML;
    var lapArea = document.getElementById("lapArea");
    var listItem = document.createElement("li");
    listItem.innerHTML = currentTime;
    lapArea.appendChild(listItem);
});
  

playButton.addEventListener("click", function(event) {
    
    
    // if(isTimerOn)
    // {
    //     clearInterval(timerVar);
    //     playButton.style.display = "block";
    //     pauseButton.style.display = "none";
    //     isTimerOn = false;
    //     lapButton.style.display = "none";
    //     resetButton.style.display = "block";

    // }
    // else {
        timerVar = setInterval(function(){
            sec = parseInt(sec);
            min = parseInt(min);
            hr = parseInt(hr);

            sec = sec+1;
            if(sec == 60)
            {
                min = min+1;
                sec = 0;
            }
            if(min == 60)
            {
                hr = hr+1;
                min = 0;
                sec = 0;
            }
            if(sec<10 || sec ==0)
            {
                sec = '0'+sec;
            }
            if(min<10 || min == 0)
            {
                min = '0'+min;
            }
            if(hr<10 || hr==0)
            {
                hr = '0' + hr;
            }

            hour.innerHTML=hr;
            minute.innerHTML = min;
            second.innerHTML = sec;
        }, 1000);
        isTimerOn = true;
        playButton.style.display = "none";
        pauseButton.style.display = "block";
        resetButton.style.display = "none";
        lapButton.style.display = "block";
    // }
})


pauseButton.addEventListener("click", function(event) {

    clearInterval(timerVar);
    playButton.style.display = "block";
    pauseButton.style.display = "none";
    isTimerOn = false;
    lapButton.style.display = "none";
    resetButton.style.display = "block";

})


resetButton.addEventListener("click", function(event) {
    playButton.style.display = "block";
    pauseButton.style.display = "none";
    lapArea.innerHTML = "";
    hour.innerHTML = "00";
    minute.innerHTML="00";
    second.innerHTML = "00";
    hr = 0;
    sec = 0;
    min = 0;
})