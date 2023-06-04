window.addEventListener("load", (event) => {
    console.log("hello");
    document.getElementById(`card1`).addEventListener( 'click', function() {
        document.getElementById(`card$1`).classList.toggle('is-flipped');
    });
});


