var scorm = pipwerks.scorm;
var lmsConnected = false;

window.addEventListener("load", (event) => {
    for (let i = 1; i < 6; i++){
        document.getElementById(`icon${i}`).addEventListener("click", openPlay);
    }
});

const openPlay = (event) => {
    for (let i = 1; i < 6; i++){
        if (document.getElementById(`play${i}`).style.visibility == "visible"){
            document.getElementById(`play${i}`).style.visibility = "hidden";
            document.getElementById(`play${i}`).removeEventListener("click", playGame);
        }
    }
    document.getElementById(`play${event.currentTarget.id.charAt(4)}`).style.visibility = "visible";
    document.getElementById(`play${event.currentTarget.id.charAt(4)}`).addEventListener("click", playGame);
}

const playGame = (event) => {
    console.log("levelllllll");
    console.log(event.currentTarget.id.charAt(4));
    window.location.replace("tirgul1.html");
}