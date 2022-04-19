const keysound = () => {
    const audio = new Audio();
    audio.src = "./public/sounds/key.mp3";
    audio.play();
}

document.addEventListener("keydown", (e) => {
    console.log(e.keyCode);

    let k = e.keyCode || e.which;
    let key = document.querySelector(`.key_${k}`);
    keysound();
    key.setAttribute('id', 'keypressed');
});

document.addEventListener("keyup", (e) => {
    let k = e.keyCode || e.which;
    let key = document.querySelector(`.key_${k}`);
    key.removeAttribute('id', 'keypressed');
});