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
            if (ans != 2){
                console.log("lll");
                document.getElementById(`answer${ans}`).classList.add("false");
            }
            document.getElementById("answer2").classList.add("true");
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
    console.log("3333");
}