const keysound = () => {
    const audio = new Audio();
    audio.src = "./public/sounds/key.mp3";
    audio.play();
}

const key = document.querySelector(".key");
console.log(key);

document.addEventListener("keydown", (e) => {
    keysound();
    key.setAttribute('id', 'keypressed')
});
document.addEventListener("keyup", (e) => {
    key.removeAttribute('id', 'keypressed')
});