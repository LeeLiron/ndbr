window.addEventListener("load", (event) => {
    document.getElementById("homePageNav").addEventListener("click", direct);
    document.getElementById("cardsPageNav").addEventListener("click", direct);
    document.getElementById("gamesPageNav").addEventListener("click", direct);
});

const direct = (event) => {
    if (event.currentTarget.id == "homePageNav"){
        window.location.replace("main.html");
    } else if (event.currentTarget.id == "gamesPageNav"){
        window.location.replace("mainGame.html");
    } else {
        window.location.replace("flipCards.html");
    }
}