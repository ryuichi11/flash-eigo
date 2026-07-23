let current = 0;
let lap = 1;

function showQuestion() {
document.getElementById("lap").innerHTML = lap + "周目";
const q = questions[current];

document.getElementById("emoji").innerHTML = q.emoji;
document.getElementById("question").innerHTML = q.english;
document.getElementById("answer").innerHTML = q.japanese;

document.getElementById("answer").style.display = "none";

startTimer();

}
function startTimer() {

let count = 3;

document.getElementById("timer").innerHTML = count;

const timer = setInterval(function () {

count--;

if (count >= 0) {
document.getElementById("timer").innerHTML = count;
}

if (count < 0) {
clearInterval(timer);
}

}, 1000);

}

function showAnswer() {

document.getElementById("answer").style.display = "block";

}

function speak() {

const q = questions[current];

const speech = new SpeechSynthesisUtterance(q.english);

speech.lang = "en-US";

speech.rate = 0.9;

speechSynthesis.speak(speech);

}
function nextQuestion() {

    current++;

    if (current >= questions.length) {

        current = 0;
        lap++;

        alert("🎉 " + (lap - 1) + "周目クリア！\n\n" + lap + "周目スタート！");

    }

    showQuestion();

}
window.onload = function () {
    showQuestion();
};
