let ans;
let checked = false;
let currQuest = 1;

window.addEventListener("load", (event) => {
    for (let i = 1; i < 5; i++) {
        document.getElementById(`answer${i}`).addEventListener("click", touched);
    }
    document.getElementById("checkAns1").addEventListener("click", check);
});


const touched = (event) => {
    for (let i =1; i < 5; i++){
        if (document.getElementById(`answer${i}`).classList.contains("touched")){
            document.getElementById(`answer${i}`).classList.remove("touched");
        }
    }

    event.currentTarget.classList.add("touched");
    checked = true;
}

const check= (event) => {
    for (let i = 1; i < 5; i++){
        document.getElementById(`answer${i}`).removeEventListener("click", touched);
        if (document.getElementById(`answer${i}`).classList.contains("touched")){
            ans = document.getElementById(`answer${i}`).id.charAt(6);
        }
    }

    if (checked){
        console.log("hola");
        console.log(currQuest);
        if (currQuest == 1){
            if (ans != 1){
                console.log("lll");
                document.getElementById(`answer${ans}`).classList.add("false");
            }
            document.getElementById("answer1").classList.add("true");
            document.getElementById("checkAns1").addEventListener("click", quest2);
        }

        if (currQuest == 2){
            console.log("here");
            if (ans != 4){
                document.getElementById(`answer${ans}`).classList.add("false");
            }
            document.getElementById("answer4").classList.add("true");
            document.getElementById("checkAns1").addEventListener("click", quest3);
        }
    }

    document.getElementById("checkAns1").innerText = "הבא";
    document.getElementById("checkAns1").removeEventListener("click", check);
    
}

const quest2 = () => {
    checked = false;
    currQuest = 2;
    console.log("quest2");
    console.log(currQuest);
    for (let i = 1; i < 5; i++){
        if (document.getElementById(`answer${i}`).classList.contains("true")){
            document.getElementById(`answer${i}`).classList.remove("true");
        }

        if (document.getElementById(`answer${i}`).classList.contains("false")){
            document.getElementById(`answer${i}`).classList.remove("false");
        }

        if (document.getElementById(`answer${i}`).classList.contains("touched")){
            document.getElementById(`answer${i}`).classList.remove("touched");
        }

        document.getElementById(`answer${i}`).addEventListener("click", touched);
    }


    document.getElementById("checkAns1").innerText = "בדוק";
    document.getElementById("checkAns1").removeEventListener("click", quest2);
    document.getElementById("checkAns1").addEventListener("click", check);
    document.getElementById("tirgul1Word").innerText = "ק. חיר";
    document.getElementById("ans1Title1").innerText = "מנעול";
    document.getElementById("ans1Title2").innerText = "תלתן";
    document.getElementById("ans1Title3").innerText = "צמיד";
    document.getElementById("ans1Title4").innerText = "שעון";

    document.getElementById("ans1Img1").setAttribute("src", "assets/icons/padlock.png");
    document.getElementById("ans1Img2").setAttribute("src", "assets/icons/shamrock.png");
    document.getElementById("ans1Img3").setAttribute("src", "assets/icons/bracelet.png");
    document.getElementById("ans1Img4").setAttribute("src", "assets/icons/clock.png");
}

const quest3 = (event) => {
    currQuest = 3;
    console.log("3333");
    document.getElementById("quest2").style.visibility = "visible";
    document.getElementById("quest1").style.visibility = "hidden";
    document.getElementById("checkAns1").removeEventListener("click", check);
    document.getElementById("checkAns1").classList.add("disabled");
    for (let i = 1; i < 4; i++){
        console.log(`card${i}`);
        document.getElementById(`card${i}`).addEventListener("click", pressed);
        document.getElementById(`card${i}`).addEventListener( 'click', function() {
            document.getElementById(`card${i}`).classList.toggle('is-flipped');
        });
    }
}

const pressed = (event) => {
    let counter = 0;
    event.currentTarget.classList.add("cardTouch");
    for(let i = 1; i < 4; i++){
        if (document.getElementById(`card${i}`).classList.contains("cardTouch")) {
            counter++;
        }
    }
    if (counter == 3){
        document.getElementById("checkAns1").addEventListener("click", quest4);
        document.getElementById("checkAns1").classList.remove("disabled");
    }
}

const quest4 = (event) => {
    document.getElementById("quest2").style.visibility = "hidden";
    document.getElementById("quest3").style.visibility = "visible";
    document.getElementById("checkAns1").style.color = "#2d8e89";
    document.getElementById("checkAns1").innerText = "בדוק";
    for (let i =1; i < 7; i++){
        document.getElementById(`t4word${i}`).addEventListener("click", changeT4);
    }
    document.getElementById("checkAns1").addEventListener("click", check4);
}

const changeT4 = (event) => {
    document.getElementById("ansT4").innerText = event.currentTarget.innerText;
}

const changeT42 = (event) => {
    document.getElementById("ansT42").innerText = event.currentTarget.innerText;
}

const check4 = (event) => {
    for (let i =1; i < 7; i++){
        document.getElementById(`t4word${i}`).removeEventListener("click", changeT4);
    }
    if (document.getElementById("ansT4").innerText != null){
        if (document.getElementById("ansT4").innerText == "תורן" ){
            document.getElementById("ansT4").style.color = "green";
        } else {
            document.getElementById("ansT4").style.color = "red";
            document.getElementById("t4word2").style.color = "green";
        }
    } else {
        document.getElementById("ansT4").innerText = "תורן";
        document.getElementById("ansT4").style.color = "green";
    }

    document.getElementById("checkAns1").innerText = "הבא";
    document.getElementById(`checkAns1`).addEventListener("click", change2T4);

}

const change2T4 = (event) => {
    document.getElementById("quest3").style.visibility = "hidden";
    document.getElementById("quest4").style.visibility = "visible";
    document.getElementById("checkAns1").innerText = "בדוק";
    for (let i =1; i < 7; i++){
        document.getElementById(`t42word${i}`).addEventListener("click", changeT42);
    }
    document.getElementById("checkAns1").addEventListener("click", check42);
}

const check42 = (event) => {
    document.getElementById("checkAns1").innerText = "הבא";
    for (let i =1; i < 7; i++){
        document.getElementById(`t42word${i}`).removeEventListener("click", changeT4);
    }
    if (document.getElementById("ansT42").innerText != null){
        if (document.getElementById("ansT42").innerText == "שעון" ){
            document.getElementById("ansT42").style.color = "green";
        } else {
            document.getElementById("ansT42").style.color = "red";
            document.getElementById("t42word2").style.color = "green";
        }
    } else {
        document.getElementById("ansT42").innerText = "שעון";
        document.getElementById("ansT42").style.color = "green";
    }

    document.getElementById("checkAns1").innerText = "הבא";
}