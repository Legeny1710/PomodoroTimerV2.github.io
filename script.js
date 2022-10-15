let timerEl = document.getElementById("timer-el")
let StartBtn = document.getElementById("start-btn")
let PauseBtn = document.getElementById("pause-btn")
let ResumeBtn = document.getElementById("resume-btn")
let BreakBtn = document.getElementById("break-btn")
let TextEl = document.getElementById("text")

let LongBreakBtn = document.getElementById("Longbreak")


let timerBox = document.querySelector(".timerBox")

var finished = false
var id;
var value = "00:00";

const audio = new Audio()
audio.src = "./ring.mp3"


function startTimer(m, s) {
    timerEl.textContent = m + ":" + s;
    if (s == 0) {
        if (m == 0) {
            TextEl.textContent = "Time is UP!"
            audio.play()
            return;
        } else if (m != 0) {
            m = m - 1;
            s = 60;
        }
        
}

    s = s - 1;
    id = setTimeout(function () {
        startTimer(m, s)
    }, 1000);
}

function pauseTimer() {
    value = timerEl.textContent;
    clearTimeout(id);
}

function resumeTimer() {
    var t = value.split(":");

    startTimer(parseInt(t[0], 10), parseInt(t[1], 10));
}

StartBtn.addEventListener("click", function () {
    clearTimeout(id)
    startTimer(25, 00);
    if (timerBox.classList.contains("break")) {
        timerBox.classList.remove("break")
    }

    if (timerBox.classList.contains("longbreak")){
        timerBox.classList.remove("longbreak")
    }


    timerBox.classList.add("pomodoro")

    document.body.style.background = "crimson"

    StartBtn.classList.add("active")

    if (BreakBtn.classList.contains("active")) {
        BreakBtn.classList.remove("active")
    }

    if (LongBreakBtn.classList.contains("active")) {
        LongBreakBtn.classList.remove("active")
    }

   
}, false);



PauseBtn.addEventListener("click", pauseTimer, false);

ResumeBtn.addEventListener("click", resumeTimer, false);

BreakBtn.addEventListener("click", function() {
    document.body.style.background = " rgb(76, 145, 149)"
    clearTimeout(id)
    TextEl.textContent = ""
    startTimer(05,00)
    if (timerBox.classList.contains("pomodoro")) {
        timerBox.classList.remove("pomodoro")
    }

    if (timerBox.classList.contains("longbreak")){
        timerBox.classList.remove("longbreak")
    }

    timerBox.classList.add("break")

    if (StartBtn.classList.contains("active")) {
        StartBtn.classList.remove("active")
    }

    if (LongBreakBtn.classList.contains("active")) {
        LongBreakBtn.classList.remove("active")
    }



    BreakBtn.classList.add("active")
    
})


LongBreakBtn.addEventListener("click", function() {
    document.body.style.background = "rgb(69, 124, 163)"
    clearTimeout(id)
    TextEl.textContent = ""
    startTimer(15,00)

    if (timerBox.classList.contains("pomodoro")) {
        timerBox.classList.remove("pomodoro")
    }

    if (timerBox.classList.contains("break")) {
        timerBox.classList.remove("break")
    }

    timerBox.classList.add("longbreak")



    if (StartBtn.classList.contains("active")) {
        StartBtn.classList.remove("active")
    }

    if (BreakBtn.classList.contains("active")) {
        BreakBtn.classList.remove("active")
    }

    LongBreakBtn.classList.add("active")
})




