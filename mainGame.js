var scorm = pipwerks.scorm;
var lmsConnected = false;

window.addEventListener("load", (event) => {
    document.getElementById("gameBox1").addEventListener("click", playGame);
});

const playGame = (event) => {
    window.location.replace("game.html");
}