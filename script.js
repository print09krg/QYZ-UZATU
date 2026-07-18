const introVideo = document.getElementById("introVideo");
const startButton = document.getElementById("startButton");
const backgroundMusic = document.getElementById("backgroundMusic");



// ================================
// КНОПКА БАСТАУ
// ВИДЕО + МУЗЫКА
// ================================

startButton.addEventListener("click", function () {


    startButton.style.display = "none";


    // видео без звука

    introVideo.muted = true;


    introVideo.play();



    // запускаем музыку

    backgroundMusic.volume = 0.5;


    backgroundMusic.play()
        .catch(function(error){

            console.log(error);

        });


});





// ================================
// ПОСЛЕ ВИДЕО
// ПЕРЕХОД НА ЭКРАН 2
// ================================


introVideo.addEventListener("ended", function(){


    document.querySelectorAll(".screen")[1]
    .scrollIntoView({

        behavior:"smooth"

    });


});






// ================================
// ТАЙМЕР
// ================================


const targetDate = new Date(
    "November 8, 2026 00:00:00"
).getTime();



function updateTimer(){


    const now = new Date().getTime();


    const difference = targetDate - now;



    if(difference <= 0){

        days.innerHTML="00";
        hours.innerHTML="00";
        minutes.innerHTML="00";
        seconds.innerHTML="00";

        return;

    }



    const days =
    Math.floor(
        difference /
        (1000*60*60*24)
    );



    const hours =
    Math.floor(
        (difference %
        (1000*60*60*24)) /
        (1000*60*60)
    );



    const minutes =
    Math.floor(
        (difference %
        (1000*60*60)) /
        (1000*60)
    );



    const seconds =
    Math.floor(
        (difference %
        (1000*60)) /
        1000
    );



    document.getElementById("days").innerHTML =
    String(days).padStart(2,"0");


    document.getElementById("hours").innerHTML =
    String(hours).padStart(2,"0");


    document.getElementById("minutes").innerHTML =
    String(minutes).padStart(2,"0");


    document.getElementById("seconds").innerHTML =
    String(seconds).padStart(2,"0");


}



updateTimer();

setInterval(updateTimer,1000);