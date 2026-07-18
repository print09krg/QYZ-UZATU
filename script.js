const introVideo = document.getElementById("introVideo");
const startButton = document.getElementById("startButton");
const bgMusic = document.getElementById("bgMusic");

let started = false;

startButton.addEventListener("click", async () => {

    if (started) return;

    started = true;

    startButton.style.display = "none";

    try {
        bgMusic.volume = 0;
        await bgMusic.play();

        const fade = setInterval(() => {

            if (bgMusic.volume < 0.95) {

                bgMusic.volume += 0.05;

            } else {

                bgMusic.volume = 1;
                clearInterval(fade);

            }

        }, 150);

    } catch (e) {}

    introVideo.play();

});

introVideo.addEventListener("ended", () => {

    document
        .getElementById("screen2")
        .scrollIntoView({
            behavior: "smooth"
        });

});

const eventDate = new Date("2026-11-08T18:00:00").getTime();

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function updateTimer() {

    const now = new Date().getTime();

    const distance = eventDate - now;

    if (distance <= 0) {

        days.textContent = "00";
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";

        return;

    }

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));

    const h = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const m = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const s = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    days.textContent = String(d).padStart(2, "0");
    hours.textContent = String(h).padStart(2, "0");
    minutes.textContent = String(m).padStart(2, "0");
    seconds.textContent = String(s).padStart(2, "0");

}

updateTimer();

setInterval(updateTimer, 1000);

document.querySelectorAll("img").forEach(img => {

    img.setAttribute("draggable", "false");

});

document.addEventListener("contextmenu", e => {

    e.preventDefault();

});

document.addEventListener("gesturestart", e => {

    e.preventDefault();

});
window.addEventListener("load", () => {

    window.scrollTo(0, 0);

    if ("scrollRestoration" in history) {

        history.scrollRestoration = "manual";

    }

});

document.addEventListener("visibilitychange", () => {

    if (!document.hidden && started) {

        bgMusic.play().catch(() => {});

    }

});

introVideo.addEventListener("loadeddata", () => {

    document.body.classList.add("ready");

});

introVideo.addEventListener("error", () => {

    console.error("Ошибка загрузки видео");

});

bgMusic.addEventListener("error", () => {

    console.error("Ошибка загрузки музыки");

});

document.querySelectorAll(".main-button").forEach(button => {

    button.addEventListener("click", () => {

        button.style.transform = "translateX(-50%) scale(.96)";

        setTimeout(() => {

            button.style.transform = "";

        }, 150);

    });

});

window.addEventListener("pageshow", () => {

    updateTimer();

});

window.addEventListener("resize", () => {

    updateTimer();

});