let currentWord; //for checking match
let match = 0; //number of matches made 
let wordCount1 = 5; //for checking if match is true
let wordCount2 = 5; //for checking if match is true
let win = false; //win of not
const TimeInSecs = 59; //timer
let timerInterval; //timer
let currentTime; //timer
var scorm = pipwerks.scorm;
var lmsConnected = false;

let word = ["מפקד", "סגן", `רמ"ס`, `ק. אג"ם`, `ק. מודיעין`, `ק. קשר`, `קמב"ץ`, `ק. שריון`, `ק. חיר`, `ק. קשתות`];
let translate = ["קודקוד", "משנה", "סיפון", "אולר", "פרפר", `כספית`, `מברג`, `אבוס`, `שעון`, `קלף`];

window.addEventListener("load", (event) => {
    document.getElementById("startGame").addEventListener("click", startGame); 
    document.getElementById("return").addEventListener("click", ret);
});

const ret = (event) => {
    window.location.replace("mainGame.html");
}

const startTimer = () => {
    console.log("start timer");
    currentTime = TimeInSecs;
    timerInterval = setInterval(everySecond, 1000);
}

const everySecond = () => {
    console.log("every second" + currentTime);
    currentTime--;
    let minutes=String(Math.floor(currentTime/60));
    if(minutes<10){
        minutes=`0${String(Math.floor(currentTime/60))}`;
    }
    let seconds=String(currentTime-(minutes*60));
    if(seconds<10){
        seconds=`0${String(currentTime-(minutes*60))}`;
    }
    document.getElementById("timer").innerText=`${minutes}:${seconds}`;
    if (currentTime === 0) {
        console.log("clear interval");
        // clearInterval(timerInterval);
        checkWin();
        //END OF TIME needs to check win or lose
    }
}

const startGame = (event) => {
    startTimer();
    //change visibility of screen
    document.getElementById("open").style.visibility = "hidden"; 
    document.getElementById("timer").style.visibility = "visible";
    document.getElementById("wordsCollumn").style.visibility = "visible";
    document.getElementById("transCollumn").style.visibility = "visible";
    //puts words and listeners
    words();
    for (let i = 1; i < 6; i++) {
        document.getElementById(`word${i}`).addEventListener("click", touch);
        document.getElementById(`trans${i}`).addEventListener("click", check);
    }
}

const words = () => {
    //puts words from arrays to cubes
    for (let i = 1; i < 6; i++) {
        document.getElementById(`word${i}`).innerText = word[i - 1];
    }
    document.getElementById(`trans${1}`).innerText = translate[4];
    document.getElementById(`trans${2}`).innerText = translate[1];
    document.getElementById(`trans${3}`).innerText = translate[3];
    document.getElementById(`trans${4}`).innerText = translate[0];
    document.getElementById(`trans${5}`).innerText = translate[2];
}

const touch = (event) => {
    //when left collumn touched
    //changes right or wrong marks
    for (let i = 1; i < 6; i++) {
        if (document.getElementById(`word${i}`).classList.contains("wrong")) {
            document.getElementById(`word${i}`).classList.remove("wrong");
        }
        if (document.getElementById(`trans${i}`).classList.contains("wrong")) {
            document.getElementById(`trans${i}`).classList.remove("wrong");
        }
    }
    //removes last one that was marked
    if (currentWord != null) {
        document.getElementById(`word${currentWord}`).classList.remove("touched");
    }
    //adds the grey mark
    event.currentTarget.classList.add("touched");
    currentWord = event.currentTarget.id.charAt(4);
}

const check = (event) => { //checks wrong or right
    if (translate.indexOf(event.currentTarget.innerText) == word.indexOf(document.getElementById(`word${currentWord}`).innerText)) {
        //right
        console.log(`word${currentWord}`);
        document.getElementById(`word${currentWord}`).classList.remove("touched");
        document.getElementById(`word${currentWord}`).classList.add("right");
        event.currentTarget.classList.add("right");

        let transNum = event.currentTarget.id.charAt(5);

        setTimeout(() => { //waits until removes marks
            document.getElementById(`word${currentWord}`).innerText = null;
            document.getElementById(`word${currentWord}`).classList.remove("right");
            document.getElementById(`word${currentWord}`).removeEventListener("click", touch);

            document.getElementById(`trans${transNum}`).innerText = null;
            document.getElementById(`trans${transNum}`).classList.remove("right");
            document.getElementById(`trans${transNum}`).removeEventListener("click", check);

            match++;
            fillWords();
        }, 400);

    } else {
        //false 
        console.log("false");
        document.getElementById(`word${currentWord}`).classList.remove("touched");
        document.getElementById(`word${currentWord}`).classList.add("wrong");
        event.currentTarget.classList.add("wrong");
    }
}

const fillWords = () => {
    //check if needs to fill in words of not
    console.log("fill");
    if (match % 2 == 0 && wordCount1 != 11) {
        //need to fill
        wordCount1++;
        for (let i = 1; i < 6; i++) {
            //fills left
            if (document.getElementById(`word${i}`).innerText == "") {
                document.getElementById(`word${i}`).innerText = word[wordCount1 - 1];
                document.getElementById(`word${i}`).addEventListener("click", touch);
                wordCount1++;
            }
        }
        wordCount2++;
        for (let i = 1; i < 6; i++) {
            //fills right
            if (document.getElementById(`trans${i}`).innerText == "") {
                console.log("here");
                document.getElementById(`trans${i}`).innerText = translate[wordCount2 - 1];
                document.getElementById(`trans${i}`).addEventListener("click", check);
                wordCount2++;
            }
        }
    }
    if (match == 9){
        //if all matches were made, check if win
        checkWin();
    }
}

const checkWin = () => {
    clearInterval(timerInterval);
    if (match == 9) {
        //all matches were made in  time
        win = true;
    }
    finish();
}

const finish = (event) => {
    //displays the next screen according to result
    //hides game
    document.getElementById("wordsCollumn").style.visibility = "hidden";
    document.getElementById("transCollumn").style.visibility = "hidden";
    document.getElementById("timer").style.visibility = "hidden";

    if (win) {
        document.getElementById("winDiv").style.visibility = "visible";
        document.getElementById("replay").style.visibility = "visible";
        document.getElementById("winSubTitle").innerText = " הצלחת להתאים " + match + " זוגות ";
    } else {
        document.getElementById("loseDiv").style.visibility = "visible";
        document.getElementById("replay").style.visibility = "visible";
        document.getElementById("loseSubTitle").innerText = " הצלחת להתאים " + match + " זוגות ";
    }

    document.getElementById("playAgain").addEventListener("click", playAgain);
    document.getElementById("exit").addEventListener("click", finishReturn);
}

const finishReturn = (event) => {
    window.location.replace("mainGame.html");
}

const playAgain = (event) => {
    document.getElementById("replay").style.visibility = "hidden";
    if(win) {
        document.getElementById("winDiv").style.visibility = "hidden";
    } else {
        document.getElementById("loseDiv").style.visibility = "hidden";
    }

    document.getElementById("open").style.visibility = "visible";
    document.getElementById("startGame").addEventListener("click", startGame); 
    document.getElementById("return").addEventListener("click", ret);
    match = 0; 
    TimeInSecs = 59;
    document.getElementById("timer").innerText = "00:59";
}

// change wrong/ right class to full.
