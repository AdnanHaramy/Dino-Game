const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');

function Jump() {
    dino.classList.add('jump');
    setTimeout(function () {
        dino.classList.remove('jump');
    }, 300)
}
setInterval(function () {
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));

    if (cactusLeft < 30 && cactusLeft > 0 && dinoTop == 150) {
        alert("Game Over ")
    }
})
document.addEventListener("keydown", function () {
    Jump();
});