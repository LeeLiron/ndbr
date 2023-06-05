window.addEventListener("load", (event) => {
    console.log("hello");
    for (let i = 1; i < 4; i++){
        console.log(`card${i}`);
        document.getElementById(`card${i}`).addEventListener( 'click', function() {
            document.getElementById(`card${i}`).classList.toggle('is-flipped');
        });
    }
});


