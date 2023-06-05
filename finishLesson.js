let score = sessionStorage.getItem("score");

window.addEventListener("load", (event) => {
    alert(score);
    document.getElementById("scoree").innerText = `${String(sessionStorage.getItem("score"))}%` ;
    if (sessionStorage.getItem("score") < 26){
        document.getElementById("mashov").innerText = "דרוש שיפור :("
    } else {
        document.getElementById("mashov").innerText = "!כל הכבוד"
    }
    document.getElementById("finishBtn").addEventListener("click", finishL);
});

const finishL = (event) => {
    window.location.replace("main.html");
}

// String(sessionStorage.getItem("score"))