
window.addEventListener("load", (event) => {
    for (let i = 1; i < 23; i++){
        console.log(`card${i}`);
        document.getElementById(`card${i}`).addEventListener( 'click', function() {
            document.getElementById(`card${i}`).classList.toggle('is-flipped');
        });
    }
});
    